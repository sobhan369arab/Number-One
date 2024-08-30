import { Field, Formik } from "formik"
import { UserIcon } from "../../core/icon"
import { Form } from "react-router-dom"
import { CreateField } from "../../components/pages/user-panel"
import { Button } from "../../components/common"
import { informationFields } from "../../core/constants/user-panel/information"

const EditInformation = () => {
    return (
        <div className="w-[90%] border-t border-neutral-300 flex relative">
            <div className="flex items-end gap-x-3 bg-white absolute -top-8">
                <div className='userPanel_icons static'>
                    <UserIcon />
                </div>
                <h1 className="boldStyle_text text-2xl mb-1.5 pl-4">ویرایش اطلاعات کاربری</h1>
            </div>
            <Formik
                initialValues={{ firstName: "", lastName: "", nationalCode: "", gender: "مرد", birth: "", phone: "", email: "", telegram: "", linkedIn: "", address: "", profile: "", aboutMe: "" }}
                onSubmit={(event) => { console.log(event) }}
            >
                <Form className="w-full h-fit flex justify-end flex-wrap mt-10">
                    <div className="w-3/5 h-fit flex justify-between flex-wrap gap-y-3">
                        {informationFields.sectionRight.map(obj => <CreateField key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={obj.sectionName} typical={obj.typical} />)}
                    </div>
                    <div className="w-2/5 h-fit flex gap-y-3 flex-wrap justify-center px-6">
                        <div className="w-36 h-36 rounded-full bg-yellowCustom"></div>
                        {informationFields.sectionLeft.map(obj => <CreateField key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={obj.sectionName} typical={obj.typical} />)}
                    </div>
                    <div className="w-full h-fit mt-5 border-t border-neutral-300 flex py-5">
                        <div className="w-3/5 mt-3">
                            {informationFields.sectionButton.map(obj => <CreateField key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={obj.sectionName} typical={obj.typical} />)}
                        </div>
                        <div className="w-2/5 flex justify-center">
                            <div className="w-32 h-32 rounded-full bg-yellowCustom"></div>
                        </div>
                    </div>
                    <Button text="ذخیره تغییرات" variant="yellow" style="mt-4" />
                </Form>
            </Formik>
        </div>
    )
}

export default EditInformation
