import styled from "@emotion/styled"
import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useTags } from "../../hooks/use-tags"
import { rhythm } from "../../utils/typography"
import { Input } from "../form/input"
import { GroupedTags } from "./grouped-tags"

const Empty = styled.p`
  display: ${({ show }) => (show ? "block" : "none")};
  margin-top: ${rhythm(1.5)};
`

export const SearchableTags = () => {
  const [searchTerm, setSearchTerm] = useState()

  const tags = useTags().filter(
    ({ value }) =>
      !searchTerm || value.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const onSearch = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <Input
        type="text"
        name="searchTerm"
        icon={FaSearch}
        placeholder="Search tags"
        onChange={onSearch}
      />
      <Empty show={tags.length === 0}>
        <span role="img" aria-label="bow emoji">
          🙇‍♀️
        </span>{" "}
        Sorry no tags found...
      </Empty>
      <GroupedTags tags={tags} />
    </div>
  )
}
