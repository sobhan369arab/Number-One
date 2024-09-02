import { useState } from "react"
import { Field } from "formik"
import { UnEyeIcon, EyeIcon } from "../../../core/icon"

const FormInput = ({ sectionName, certificate, type, options, fullSize, dir, style, variants }) => {
    const [visible, setVisible] = useState(false)
    const fieldVariants = {
        password: (
            <div className="relative">
                <Field dir={dir} type={visible ? "text" : "password"} name={certificate} id={certificate} className="w-full h-10 bg-neutral-50 text-purpleCustom outline-none border-2 focus:border-yellowCustom shadow-inner py-1.5 px-3 rounded-md" />
                <div onClick={() => { setVisible(!visible) }} className="w-6 h-4 absolute bottom-3 right-4">
                    {visible ? <EyeIcon /> : <UnEyeIcon width="20" />}
                </div>
            </div>
        ),
        simple: (
            <Field dir={dir} type={type} name={certificate} id={certificate} className="w-full h-10 bg-neutral-50 text-purpleCustom outline-none border-2 focus:border-yellowCustom shadow-inner py-1.5 px-3 rounded-md" />
        ),
        select: (
            <Field as="select" name={certificate} id={certificate} className="w-full min-h-10 max-h-40 bg-neutral-50 text-purpleCustom outline-none border-2 focus:border-yellowCustom shadow-inner py-1.5 px-3 rounded-md">
                {options != undefined ? options.map((item, index) => (<option key={index} value={item}>{item}</option>)) : null}
            </Field>
        ),
        area: (
            <Field as="textarea" name={certificate} id={certificate} className="w-full min-h-10 max-h-40 bg-neutral-50 text-purpleCustom outline-none border-2 focus:border-yellowCustom shadow-inner py-1.5 px-3 rounded-md" />
        )
    }
    return (
        <div className={`flex flex-wrap h-fit ${fullSize ? "w-full" : "w-[45%]"} ${style}`}>
            <label htmlFor={certificate} className="w-full pr-3 text-neutral-400">{sectionName}</label>
            {fieldVariants?.[variants]}
        </div>
    )
}

export default FormInput
