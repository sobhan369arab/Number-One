import { UserIcon } from "../../core/icon"
import { Profile, TitleSectionPanel } from "../../components/pages/user-panel"
import { Button, FormHolder, FormInput } from "../../components/common"
import { informationFields } from "../../core/constants/user-panel/information"
import { useTranslation } from "react-i18next"

const EditInformation = () => {
    const { t, i18n } = useTranslation()
    const initialValues = {
        firstName: "",
        lastName: "",
        nationalCode: "",
        gender: "مرد",
        birth: "",
        phone: "",
        email: "",
        telegram: "",
        linkedIn: "",
        address: "",
        profile: "",
        aboutMe: ""
    }
    return (
        <div className="w-[90%] border-t border-neutral-300 flex relative">
            <TitleSectionPanel Icon={UserIcon} name={t("editInformationTitle")} />
            <FormHolder
                initialValues={initialValues}
                onSubmit={(event) => { console.log(event) }}
                style="w-full h-fit flex justify-end flex-wrap mt-10"
            >
                <div className="w-3/5 h-fit flex justify-between flex-wrap gap-y-3">
                    {informationFields.sectionRight.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
                </div>
                <div className="w-2/5 h-fit flex gap-y-3 flex-wrap justify-center px-6">
                    <Profile />
                    {informationFields.sectionLeft.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
                </div>
                <div className="w-full h-fit mt-5 border-t border-neutral-300 flex py-5">
                    <div className="w-3/5 mt-3">
                        {informationFields.sectionButton.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
                    </div>
                    <div className="w-2/5 flex justify-center">
                        <div className="w-32 h-32 rounded-full bg-yellowCustom"></div>
                    </div>
                </div>
                <Button text="ذخیره تغییرات" variant="yellow" style="mt-4" />
            </FormHolder>
        </div>
    )
}

export default EditInformation
