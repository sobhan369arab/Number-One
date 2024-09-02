export const informationFields = {
    sectionRight: [
        {id: 1, type: "text", certificate: "firstName", sectionName: "نام", dir: "rtl", variant: "simple"},
        {id: 2, type: "text", certificate: "lastName", sectionName: "نام خانوادگی", dir: "rtl", variant: "simple"},
        {id: 3, type: "text", certificate: "nationalCode", sectionName: "کد ملی", dir: "ltr", variant: "simple"},
        {id: 4, certificate: "gender", sectionName: "جنسیت", dir: "rtl", options: ["مرد", "زن"], variant: "select"},
        {id: 5, type: "date", certificate: "birth", sectionName: "تاریخ تولد", dir: "ltr", variant: "simple"},
        {id: 6, type: "text", certificate: "phone", sectionName: "شماره همراه", dir: "ltr", variant: "simple"},
        {id: 7, type: "email", certificate: "email", sectionName: "ایمیل", dir: "ltr", variant: "simple"},
        {id: 8, type: "tel", certificate: "telegram", sectionName: "تلگرام", dir: "ltr", variant: "simple"},
        {id: 9, type: "url", certificate: "linkedIn", sectionName: "لینکداین", dir: "ltr", fullSize: true, variant: "simple"},
    ],
    sectionLeft: [
        {id: 1, certificate: "aboutMe", sectionName: "درباره من", dir: "rtl", fullSize: true, variant: "area"},
    ],
    sectionButton: [
        {id: 1, type: "text", certificate: "address", sectionName: "آدرس", dir: "rtl", fullSize: true, variant: "simple"},
    ]
}