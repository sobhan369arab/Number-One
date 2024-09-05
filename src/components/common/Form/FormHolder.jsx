import { Form, Formik } from "formik"
import { validations } from "../../../core/validations/validations"

const FormHolder = ({ initialValues, onSubmit, style, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validations}
        >
            <Form className={style}>
                {children}
            </Form>
        </Formik>
    )
}

export default FormHolder
