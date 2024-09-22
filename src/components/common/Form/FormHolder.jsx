import { Form, Formik } from "formik"

const FormHolder = ({ initialValues, onSubmit, style, children, validations }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validations && validations}
        >
            <Form className={style}>
                {children}
            </Form>
        </Formik>
    )
}

export default FormHolder
