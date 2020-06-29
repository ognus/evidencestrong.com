exports.onCreateNode = ({ node, actions }) => {
  const isDev = (process.env.NODE_ENV || "").startsWith("dev")
  const { createNodeField } = actions

  if (node.frontmatter) {
    const now = new Date()
    const date = new Date(node.frontmatter.date || "9999")

    const isPublished = date.getTime() <= now.getTime()
    const isVisible = isDev || isPublished

    createNodeField({
      name: "draft",
      value: !isPublished,
      node,
    })

    createNodeField({
      name: "visible",
      value: isVisible,
      node,
    })
  }
}
