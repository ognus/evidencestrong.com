import styled from "@emotion/styled"
import { Form, Formik } from "formik"
import React, { useState } from "react"
import { MdSend } from "react-icons/md"
import * as yup from "yup"
import { rhythm } from "../utils/typography"
import { Button } from "./basic"
import { ErrorAlert } from "./form/error-alert"
import { Field } from "./form/field"

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  message: yup.string().required(),
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const StyledForm = styled(Form)`
  display: grid;
  grid-template-areas:
    "message message"
    "name email"
    "actions actions";
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: ${rhythm(1)};
`

const FormActions = styled.div`
  grid-area: actions;
  display: flex;
  justify-content: flex-end;
`

export const ContactForm = ({ name = "contact", topContent = () => {} }) => {
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setError] = useState(false)

  const onSubmit = async values => {
    setError(false)
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": name, ...values }),
      })

      setSuccess(true)
    } catch (err) {
      console.error(err)
      setError(true)
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {context => (
        <>
          {topContent(context, { isError, isSuccess })}

          {!isSuccess && (
            <>
              <ErrorAlert
                show={isError}
                onClose={() => setError(false)}
                message="There was an error sending your message. Please try again later."
              />

              <StyledForm
                name={name}
                data-netlify="true"
                data-netlify-honeypot="bot"
              >
                <Field name="name" label="Name" />
                <Field name="email" label="Email" />
                <Field name="message" label="Message" component="textarea" />

                <FormActions>
                  <Button type="submit" icon={MdSend}>
                    Send
                  </Button>
                </FormActions>
              </StyledForm>
            </>
          )}
        </>
      )}
    </Formik>
  )
}
