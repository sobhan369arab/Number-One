import { useState } from "react"
import { ErrorMessage, Field } from "formik"
import { UnEyeIcon, EyeIcon } from "../../../core/icon"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker from "react-multi-date-picker"
import "./FormDate.css"
import { useTranslation } from "react-i18next"

const FormInput = ({ sectionName, certificate, type, options, fullSize, dir, style, variants }) => {
    const [visible, setVisible] = useState(false)
    const { i18n } = useTranslation()
    const fieldVariants = {
        password: (
            <div className="w-full relative">
                <Field dir={dir} type={visible ? "text" : "password"} name={certificate} id={certificate} className="fieldsStyle" />
                <div onClick={() => { setVisible(!visible) }} className="w-6 h-4 absolute bottom-3 right-4">
                    {visible ? <EyeIcon /> : <UnEyeIcon width="20" />}
                </div>
            </div>
        ),
        simple: (
            <Field dir={dir} type={type} name={certificate} id={certificate} className="fieldsStyle" />
        ),
        select: (
            <Field as="select" name={certificate} id={certificate} className="fieldsStyle w-full min-h-10 max-h-40">
                {options != undefined ? i18n.language == "en" ? options[1].map((item, index) => (<option key={index} value={item}>{item}</option>)) : options[0].map((item, index) => (<option key={index} value={item}>{item}</option>)) : null}
            </Field>
        ),
        area: (
            <Field as="textarea" name={certificate} id={certificate} className="fieldsStyle w-full min-h-10 max-h-40 h-40" />
        ),
        date: (
            <DatePicker
                calendar={persian}
                locale={persian_fa}
                containerStyle={{ width: "100%", direction: i18n.language == "en" ? "ltr" : "ltr" }}
            />
        )
    }
    return (
        <div className={`flex flex-wrap h-fit ${fullSize ? "w-full" : style ? style : "w-full sm:w-[45%]"}`}>
            <div className="relative w-full text-nowrap px-3 flex items-end gap-x-2 justify-between text-sm text-red-600">
                <label htmlFor={certificate} className="text-base text-neutral-400">{sectionName}</label>
                <span className="w-full bg-white absolute top-1 right-3">
                    <ErrorMessage name={certificate} />
                </span>
            </div>
            {fieldVariants?.[variants]}
        </div>
    )
}

export default FormInput
