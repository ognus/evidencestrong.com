import styled from "@emotion/styled"
import { cx } from "emotion"
import React from "react"
import { theme } from "../../utils/theme"
import { rhythm, scale } from "../../utils/typography"

function findTableDimensions(cells) {
  let maxRows = 0
  let columns = 0
  let columnRows = 0

  cells.forEach(({ props: { header, footer } }) => {
    if (header) {
      columnRows = 0
      columns++
    } else if (!footer) {
      columnRows++
    }

    maxRows = columnRows > maxRows ? columnRows : maxRows
  })

  return { rows: maxRows + 1, columns } // +1 for headers row
}

function getLabels(cells) {
  return cells
    .filter(({ props: { label, children } }) => label && children)
    .map(({ props: { children } }) => children)
}

function* getInfIter(array) {
  let index = 0

  while (true) {
    yield array[index]
    index = (index + 1) % array.length
  }
}

const GridCell = styled.div`
  padding-left: ${rhythm(2 / 3)};
  padding-top: ${rhythm(2 / 3)};

  &.label {
    display: none;

    @media (min-width: 500px) {
      display: block;
    }
  }

  &.header {
    margin-top: ${rhythm(1)};
    padding-bottom: ${rhythm(1 / 3)};
    font-weight: ${theme.fonts.header.weights.bold};
    border-bottom: 2px solid ${theme.colors.primary};

    @media (min-width: 500px) {
      grid-row: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-top: 0;
    }
  }

  &.footer {
    grid-row: -1;
    grid-column: 1 / -1;
    margin-top: ${rhythm(2 / 3)};
    padding-top: ${rhythm(1 / 4)};
    padding-bottom: ${rhythm(1 / 4)};
    font-weight: ${theme.fonts.body.weights.light};
    border-top: 2px solid ${theme.colors.secondary};
  }
`

const GridTable = styled.div`
  ${scale(-1 / 4)};
  margin-bottom: ${rhythm(1.5)};

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    grid-template-rows: repeat(${({ rows }) => rows}, min-content);
    grid-auto-flow: column;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: ${rhythm(2 / 3)};

  @media (min-width: 500px) {
    padding-right: 0;
    .desc {
      display: none;
    }
  }
`

export const Table = ({ children }) => {
  const cells = React.Children.toArray(children).filter(
    ({ props: { mdxType } }) => mdxType === "Cell"
  )

  const { rows, columns } = findTableDimensions(cells)
  const labelsIter = getInfIter(getLabels(cells))

  const elements = cells.map((cell) => {
    const { header, footer, label } = cell.props

    if (header || footer || label) {
      return cell
    }

    const { value: labelValue } = labelsIter.next()
    return React.cloneElement(cell, { desc: labelValue })
  })

  return (
    <GridTable role="table" rows={rows} columns={columns}>
      {elements}
    </GridTable>
  )
}

export const Cell = ({ header, footer, label, desc, children }) => {
  return (
    <GridCell role="cell" className={cx({ header, footer, label })}>
      {desc ? (
        <Flex>
          <div className="desc">{desc}</div>
          <div>{children}</div>
        </Flex>
      ) : (
        children
      )}
    </GridCell>
  )
}
