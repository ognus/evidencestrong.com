import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { Alert } from "../components/basic"
import { ContactForm } from "../components/contact-form"
import { Page } from "../components/page"
import { theme } from "../utils/theme"
import { rhythm, scale } from "../utils/typography"
import { PAGE_TYPES } from "../components/seo/schemas"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    ${scale(1.5)};
    margin: ${rhythm(1)} 0;
  }
`

const SuccessIcon = styled(IoIosCheckmarkCircleOutline)`
  ${scale(3)};
  color: ${theme.colors.success};
`

const Back = styled.div`
  display: flex;
  align-items: center;
  margin: ${rhythm(1)};

  a {
    margin-left: ${rhythm(1 / 4)};
  }
`

const SuccessAlert = ({ show, contactName }) => {
  return (
    <Alert show={show}>
      <Content>
        <SuccessIcon />
        <h3>Thank you</h3>
        <p>
          Thank you for your message {contactName}. Will get back to you
          shortly.
        </p>
        <Back>
          <FaLongArrowAltLeft />
          <Link to="/">BACK TO HOME</Link>
        </Back>
      </Content>
    </Alert>
  )
}

const ContactPage = () => {
  return (
    <Page title="Contact" seoSchemaOrgType={PAGE_TYPES.CONTACT}>
      <ContactForm
        topContent={({ values }, { isSuccess }) => (
          <>
            {!isSuccess && (
              <p>
                If you have any suggestions or requests for the topics I cover,
                you can always contact me using the form below.
              </p>
            )}
            <SuccessAlert show={isSuccess} contactName={values.name} />
          </>
        )}
      ></ContactForm>
    </Page>
  )
}

export default ContactPage
