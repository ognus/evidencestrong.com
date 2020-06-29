import styled from "@emotion/styled"
import Image from "gatsby-image"
import React from "react"
import { useBio } from "../hooks/use-bio"
import { rhythm, scale } from "../utils/typography"

const Container = styled.div`
  ${scale(-1 / 6)};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${rhythm(2)};

  img {
    border-radius: 50%;
  }

  p {
    margin-top: ${rhythm(1 / 2)};
    margin-bottom: 0;
    text-align: center;
  }
`

const Bio = ({ content }) => {
  const { author, social, avatar } = useBio()

  const bio =
    content ||
    (() => (
      <>
        <p>{author.summary}</p>
        <a href={`https://twitter.com/${social.twitter}`}>Say Hi on Twitter</a>
      </>
    ))

  return (
    <Container>
      <Image fixed={avatar} alt={author.name} />
      {bio({ author, social })}
    </Container>
  )
}

export default Bio
