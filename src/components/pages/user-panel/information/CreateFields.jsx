import { Field } from "formik"
import { useState } from "react"

const CreateField = ({ sectionName, certificate, type, options, fullSize, dir, typical }) => {
    return (
        <div className={`flex flex-wrap h-fit w-52 ${fullSize ? "w-full" : "w-1/2"}`}>
            <label htmlFor={certificate} className="w-full pr-3 text-neutral-400">{sectionName}</label>
            {
                typical ? <Field dir={dir} type={type} name={certificate} id={certificate} className="w-full h-10 bg-neutral-50 text-purpleCustom outline-none border-2 focus:border-yellowCustom shadow-inner py-1.5 px-3 rounded-md" />
                    : <Field as={type} name={certificate} id={certificate} className="w-full min-h-10 max-h-40 bg-neutral-50 text-purpleCustom outline-none border-2 focus:border-yellowCustom shadow-inner py-1.5 px-3 rounded-md">
                        {options != undefined ? options.map((item, index) => (<option key={index} value={item}>{item}</option>)) : null}
                    </Field>
            }
        </div>
    )
}

export default CreateField