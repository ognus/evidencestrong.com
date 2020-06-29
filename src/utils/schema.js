export const toPosts = edges => {
  return edges.map(({ node }) => {
    const { slug, draft } = node.fields
    const { tags, categories, title, description } = node.frontmatter

    return {
      tags,
      categories,
      slug,
      draft,
      title,
      description: description || node.excerpt,
    }
  })
}
