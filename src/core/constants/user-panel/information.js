export const informationFields = {
    sectionRight: [
        {id: 1, type: "text", certificate: "firstName", sectionName: "نام", dir: "rtl", fullSize: false, typical: true},
        {id: 2, type: "text", certificate: "lastName", sectionName: "نام خانوادگی", dir: "rtl", fullSize: false, typical: true},
        {id: 3, type: "text", certificate: "nationalCode", sectionName: "کد ملی", dir: "ltr", fullSize: false, typical: true},
        {id: 4, type: "select", certificate: "gender", sectionName: "جنسیت", dir: "rtl", options: ["مرد", "زن"], fullSize: false, typical: false},
        {id: 5, type: "date", certificate: "birth", sectionName: "تاریخ تولد", dir: "ltr", fullSize: false, typical: true},
        {id: 6, type: "text", certificate: "phone", sectionName: "شماره همراه", dir: "ltr", fullSize: false, typical: true},
        {id: 7, type: "email", certificate: "email", sectionName: "ایمیل", dir: "ltr", fullSize: false, typical: true},
        {id: 8, type: "tel", certificate: "telegram", sectionName: "تلگرام", dir: "ltr", fullSize: false, typical: true},
        {id: 9, type: "url", certificate: "linkedIn", sectionName: "لینکداین", dir: "ltr", fullSize: true, typical: true},
    ],
    sectionLeft: [
        {id: 1, type: "textarea", certificate: "aboutMe", sectionName: "درباره من", dir: "rtl", fullSize: true, typical: false},
    ],
    sectionButton: [
        {id: 1, type: "text", certificate: "address", sectionName: "آدرس", dir: "rtl", fullSize: true, typical: true},
    ]
}