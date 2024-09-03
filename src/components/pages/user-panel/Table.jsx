import { useTranslation } from "react-i18next"

const Table = ({ sectionHeader, children, style }) => {
    const { i18n } = useTranslation()
    return (
        <div dir="rtl" className={`w-full flex flex-wrap justify-center ${style}`}>
            <div dir={i18n.language == "en" ? "ltr" : "rtl"} className="w-full flex justify-around p-1.5 text-center">
                <span className="min-w-8 ml-2 h-8 rounded-full"></span>
                {sectionHeader.map((item, index) => <span key={index} className={"font-Sahel text-titleColor text-lg w-1/" + sectionHeader.length}>{i18n.language == "en" ? item.text[1] : item.text[0]}</span>)}
                <span className="w-12 h-6"></span>
            </div>
            <div className="w-full h-1 rounded-full borderTable_header_userPanel mb-6"></div>
            {children}
        </div>
    )
}

export default Table
