import { useStaticQuery, graphql } from "gatsby"

export const useTags = () => {
  const {
    counts: { values: counts },
    groups: { values: groups },
  } = useStaticQuery(
    graphql`
      query {
        counts: allMdx(filter: { fields: { visible: { eq: true } } }) {
          values: group(field: frontmatter___tags___value) {
            tag: fieldValue
            count: totalCount
          }
        }
        groups: allTagGroupsYaml {
          values: nodes {
            name
            tags
          }
        }
      }
    `
  )

  const tagsCounts = counts.reduce((acc, { tag, count }) => ({
    ...acc,
    [tag]: count,
  }), {})

  const tags = groups
    .map(({ name, tags }) =>
      tags
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }))
        .map(tag => ({ value: tag, group: name, count: tagsCounts[tag] || 0 }))
    )
    .flat()
    .filter(({ count }) => count > 0)

  return tags
}
