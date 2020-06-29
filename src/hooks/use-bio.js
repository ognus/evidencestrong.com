import { useStaticQuery, graphql } from "gatsby"

export const useBio = () => {
  const {
    file: {
      childImageSharp: { avatar },
    },
    site: {
      siteMetadata: { author, social },
    },
  } = useStaticQuery(graphql`
    query BioQuery {
      file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          avatar: fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  return { author, avatar, social }
}
