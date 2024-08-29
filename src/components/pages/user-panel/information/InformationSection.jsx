import FieldSection from "./FieldSection"

const InformationSection = ({ styleSection, state, section, map = false }) => {
    const { name, nationalCode, email, dateOfBirth, gender, aboutMe, mobileNumber, telegram, linkedIn, address, longitude, latitude } = state
    const initialState = {
        sectionRight: [
            { title: "نام و نام خانوادگی :", description: name },
            { title: "کد ملی :", description: nationalCode },
            { title: "ایمیل :", description: email },
            { title: "تاریخ تولد :", description: dateOfBirth },
            { title: "جنسیت :", description: gender },
            { title: "درباره من :", description: aboutMe },
        ],
        sectionLeft: [
            { title: "شماره همراه :", description: mobileNumber },
            { title: "تلگرام :", description: telegram },
            { title: "لینکداین :", description: linkedIn },
            { title: "آدرس :", description: address },
            { title: "طول جغرافیایی :", description: longitude },
            { title: "عرض جغرافیایی :", description: latitude },
        ]
    }
    return (
        <ul className={`w-1/2 px-12 py-5 flex flex-wrap gap-y-10 relative ${styleSection}`}>
            {initialState?.[section].map((obj, index) => <FieldSection key={index} fieldTitle={obj.title} descriptionTitle={obj.description} />)}
            {map ? <div className="w-28 h-28 bg-yellowCustom rounded-full absolute bottom-2 left-12"></div> : null}
        </ul>
    )
}

export default InformationSection
