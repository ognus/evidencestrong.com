import React from "react"
import _ from "lodash"
import { TagPills } from "./tag-pills"

const Group = ({ groupName, tags }) => (
  <div>
    <h2>{groupName}</h2>
    <TagPills tags={tags} />
  </div>
)

export const GroupedTags = ({ tags }) => {
  const tagsByGroup = _.groupBy(tags, ({ group }) => group)
  return _.toPairs(tagsByGroup).map(([groupName, tags]) => (
    <Group key={groupName} groupName={groupName} tags={tags} />
  ))
}
