import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next)
    .init({
        fallbackLng: "fa",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fa: {
                translation: {
                    // Menu Items in the Header
                    HomeSection: 'صفحه اصلی', CoursesSection: 'دوره های آموزشی', PagesSection: 'صفحات', ShopSection: 'فروشگاه', BlogSection: 'وبلاگ',
                    // Search Input in the Header
                    category: 'دسته بندی ها', PlaceHolder: 'جستجو برای دوره ..',
                    Login: 'ورود',
                    // data in the Footer
                    footerDescription: 'هنگامی که یک چاپگر ناشناخته گالری را تایپ کرده و آن را در هم می زند تا نمونه ای بسازد',
                    // Links
                    linksTitle: 'لینک های مفید', link1: 'ارزش های ما', link2: 'هیئت مشاوران ما', link3: 'شرکای ما',
                    link4: 'شریک شدن', link5: 'در Future Learn کار کنید', link6: 'Quizlet Plus',
                    // Company
                    companyTitle: 'شرکت ما', company1: 'با ما تماس بگیرید', company2: 'معلم شوید',
                    company3: 'وبلاگ', company4: 'مربی', company5: 'مناسبت ها',
                    touchTitle: 'در تماس باشید', touchDesc: 'هنگامی که یک چاپگر ناشناس گرفت نوع گالری و درهم',



                },
            },
            en: {
                translation: {
                    // Menu Items in the Header
                    HomeSection: 'Home', CoursesSection: 'Courses', PagesSection: 'Pages', ShopSection: 'Shop', BlogSection: 'Blog',
                    // Search Input in the Header
                    category: 'Categories', PlaceHolder: 'Search For Course ...',
                    Login: 'Login',
                    // Footer
                    footerDescription: 'when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.',
                    // Links
                    linksTitle: 'Useful Links', link1:'Our values', link2: 'Our advisory board', link3: 'Our partners',
                    link4: 'Become a partner', link5: 'Work at Future Learn', link6: 'Quizlet Plus',
                    // Company
                    companyTitle: 'Our Company', company1: 'Contact Us', company2: 'Become Teacher',
                    company3: 'Blog', company4: 'Instructor', company5: 'Events',
                    touchTitle: 'Get In Touch', touchDesc: 'when an unknown printer took galley type and scrambled',
                },
            },
        },
    });

export default i18n;
