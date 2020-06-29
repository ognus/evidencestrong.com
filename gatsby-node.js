const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const ContentPage = path.resolve("./src/templates/content-page.js")
  const TagPage = path.resolve("./src/templates/tag-page.js")
  const CategoryPage = path.resolve("./src/templates/category-page.js")

  const { data, errors } = await graphql(
    `
      {
        pages: allMdx(
          filter: { fields: { visible: { eq: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                draft
                collection
              }
              frontmatter {
                title
                tags {
                  value
                }
              }
            }
          }
        }
        tags: allMdx(filter: { fields: { visible: { eq: true } } }) {
          group(field: frontmatter___tags___value, limit: 1) {
            tag: fieldValue
          }
        }
        categories: allMdx(filter: { fields: { visible: { eq: true } } }) {
          group(field: frontmatter___categories___name, limit: 1) {
            category: fieldValue
            nodes {
              frontmatter {
                categories {
                  description
                }
              }
            }
          }
        }
      }
    `
  )

  if (errors) {
    throw errors
  }

  const posts = data.pages.edges
  const tags = data.tags.group
  const categories = data.categories.group.map(({ category, nodes }) => {
    const {
      frontmatter: {
        categories: [{ description }],
      },
    } = nodes[0]
    return {
      name: category,
      description,
    }
  })

  posts.forEach(post => {
    const { slug, draft, collection } = post.node.fields
    const { tags = [] } = post.node.frontmatter;

    if (collection === "posts" && tags.includes(null)) {
      throw new Error(`Post ${slug} uses undefined tag`);
    }

    createPage({
      path: post.node.fields.slug,
      component: ContentPage,
      context: {
        slug,
        draft,
        collection,
      },
    })
  })

  tags.forEach(({ tag }) => {
    createPage({
      path: `/tag/${_.kebabCase(tag)}/`,
      component: TagPage,
      context: {
        tag,
      },
    })
  })

  categories.forEach(({ name, description }) => {
    createPage({
      path: `/category/${_.kebabCase(name)}/`,
      component: CategoryPage,
      context: {
        categoryName: name,
        categoryDescription: description,
      },
    })
  })
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNodeField, createNode, createParentChildLink } = actions

  function transformObject(obj, id, type) {
    const childNode = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      },
    }
    createNode(childNode)
    createParentChildLink({ parent: node, child: childNode })
  }

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    const parent = getNode(node.parent)

    createNodeField({
      name: "slug",
      node,
      value,
    })

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMdx` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    })
  }

  if (node.internal.type === "TagGroupsYaml") {
    const { name: groupName, tags } = node

    tags.forEach(tag => {
      transformObject(
        { value: tag, group: groupName },
        createNodeId(`${node.id} [${tag}] >>> TAG`),
        "TagCustom"
      )
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      tags: [TagCustom] @link(by: "value")
      categories: [CategoriesYaml] @link(by: "name")
    }
  `
  createTypes(typeDefs)
}
