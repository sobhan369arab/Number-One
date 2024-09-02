import { Form, Formik } from "formik"

const FormHolder = ({ initialValues, onSubmit, style, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <Form className={style}>
                {children}
            </Form>
        </Formik>
    )
}

export default FormHolder
