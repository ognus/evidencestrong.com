import styled from "@emotion/styled"
import React from "react"
import { MdErrorOutline, MdClose } from "react-icons/md"
import { theme } from "../../utils/theme"
import { scale, rhythm } from "../../utils/typography"
import { Alert } from "../basic"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const ErrorIcon = styled(MdErrorOutline)`
  ${scale(1)};
  color: ${theme.colors.error};
`

const Message = styled.div`
  flex: 1;
  margin-left: ${rhythm(1 / 4)};
`

const CloseIcon = styled(MdClose)`
  ${scale(1)};
  color: ${theme.colors.secondary};
  cursor: pointer;
`

export const ErrorAlert = ({ show, message, onClose }) => {
  return (
    <Alert type="error" show={show}>
      <Container>
        <ErrorIcon />
        <Message>{message}</Message>
        <CloseIcon onClick={onClose} />
      </Container>
    </Alert>
  )
}
