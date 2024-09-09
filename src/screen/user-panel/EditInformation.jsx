import { CancelIcon, SaveIcon, UserIcon } from "../../core/icon"
import { Profile, TitleSectionPanel } from "../../components/pages/user-panel"
import { Button, FormHolder, FormInput } from "../../components/common"
import { informationFields } from "../../core/constants/user-panel/information"
import { useTranslation } from "react-i18next"
import { NationalCode } from "../../core/validations/validations"

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
                style="w-full h-fit flex justify-center lg:justify-end flex-wrap gap-y-16 lg:gap-y-0 mt-10"
                validations={NationalCode}
            >
                <div className="w-full lg:w-3/5 h-fit flex justify-center sm:justify-between flex-wrap gap-y-3">
                    {informationFields.sectionRight.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
                </div>
                <div className="w-full lg:w-2/5 h-fit border-t lg:border-none flex gap-y-3 flex-wrap justify-center pt-6 lg:px-6">
                    <Profile />
                    {informationFields.sectionLeft.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
                </div>
                <div className="w-full h-fit lg:mt-5 border-t border-neutral-300 flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-y-8 py-5">
                    <div className="w-full lg:w-3/5 mt-3">
                        {informationFields.sectionButton.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
                    </div>
                    <div className="lg:w-2/5 flex justify-center">
                        <div className="w-44 h-44 lg:w-32 lg:h-32 rounded-full bg-yellowCustom"></div>
                    </div>
                </div>
                <div className="flex gap-x-4 mt-4 mobile:flex-wrap mobile:justify-center mobile:gap-y-4">
                    <Button Icon={SaveIcon} vStyle="yellow" vType="button" text="saveChanges" />
                    <Button Icon={CancelIcon} vType="link" text="cancel" style="bg-neutral-200" href="/userPanel/information" />
                </div>
            </FormHolder>
        </div>
    )
}

export default EditInformation
