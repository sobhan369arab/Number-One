export const informationFields = {
    sectionRight: [
        {id: 1, type: "text", certificate: "firstName", sectionName: ["نام", "First name"], dir: "rtl", variant: "simple"},
        {id: 2, type: "text", certificate: "lastName", sectionName: ["نام خانوادگی", "Last name"], dir: "rtl", variant: "simple"},
        {id: 3, type: "text", certificate: "nationalCode", sectionName: ["کد ملی", "National code"], dir: "ltr", variant: "simple"},
        {id: 4, certificate: "gender", sectionName: ["جنسیت", "Gender"], dir: "rtl", options: [["مرد", "زن"], ["man", "women"]], variant: "select"},
        {id: 5, certificate: "birth", sectionName: ["تاریخ تولد", "Date of birth"], dir: "ltr", variant: "date"},
        {id: 6, type: "text", certificate: "phone", sectionName: ["شماره همراه", "Mobile number"], dir: "ltr", variant: "simple"},
        {id: 7, type: "email", certificate: "email", sectionName: ["ایمیل", "Email"], dir: "ltr", variant: "simple"},
        {id: 8, type: "tel", certificate: "telegram", sectionName: ["تلگرام", "Telegram"], dir: "ltr", variant: "simple"},
        {id: 9, type: "url", certificate: "linkedIn", sectionName: ["لینکداین", "LinkedIn"], dir: "ltr", fullSize: true, variant: "simple"},
    ],
    sectionLeft: [
        {id: 1, certificate: "aboutMe", sectionName: ["درباره من", "About me"], dir: "rtl", fullSize: true, variant: "area"},
    ],
    sectionButton: [
        {id: 1, type: "text", certificate: "address", sectionName: ["آدرس", "Address"], dir: "rtl", fullSize: true, variant: "simple"},
    ]
}