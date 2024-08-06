import { useTranslation } from "react-i18next"
import Form_box from "./form_box";

const Form_Wrapper = ({ title, description }) => {
    const { t } = useTranslation();
    return (
        <div className="px-8 py-6 m-auto bg-BlueGray sm:w-[480px] w-11/12 my-20 rounded-md border ">
            <h1 className="text-2xl font-bold mb-2">{t(title)}</h1>
            <h1 className="text-gray-500 text-sm !leading-6">{t(description)}</h1>
            {/* google button */}
            <button className="border bg-white flex w-full justify-center gap-2 rounded-md py-1.5 mt-4 ">
                <span className="text-gray-600 text-sm">Continue with google</span>
                <img src="./icons/google.png" alt="Google Icon" className="h-5" />
            </button>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                <div className="border w-[45%] h-0"></div><span>{t("or")}</span><div className="border w-[45%] h-0"></div>
            </div>
            <Form_box/>
        </div>
    )
}

export default Form_Wrapper