import styled from "@emotion/styled"
import { ErrorMessage, Field as FormikField } from "formik"
import React, { memo } from "react"
import { theme } from "../../utils/theme"
import { scale } from "../../utils/typography"

const Container = styled.div`
  grid-area: ${({ name }) => name};
  display: flex;
  flex-direction: column;
`

const FieldDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledField = styled(FormikField)`
  ${scale(-1 / 4)};
`

const ErrorBlock = styled.div`
  ${scale(-1 / 4)};
  color: ${theme.colors.secondary};

  span::before {
    content: "*";
    color: ${theme.colors.primary};
  }
`

export const Field = memo(props => {
  const { name, label } = props

  return (
    <Container name={name}>
      <FieldDetails>
        <label htmlFor={name}>{label}</label>
        <ErrorBlock>
          <ErrorMessage name={name} component="span" />
        </ErrorBlock>
      </FieldDetails>
      <StyledField {...props} />
    </Container>
  )
})
