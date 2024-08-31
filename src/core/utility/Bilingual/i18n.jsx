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
                    // name Group
                    nameGroup: 'نامبر وان', teamSlogan: 'همیشه بهترین',
                    // Others
                    yes: 'بله', no: 'خیر', Reviews: 'امتیاز', student: 'دانشجو', Development: 'توسعه', By: 'توسط', map: 'نقشه',
                    test: 'این یک پیام تستی است',priceCount:'تومان',show:'نمایش',result:'نتیجه از',sortBy:'مرتب سازی بر اساس:',
                    // Menu Items in the Header
                    HomeSection: 'صفحه اصلی', CoursesSection: 'دوره های آموزشی', Events: 'ایونت ها', ShopSection: 'فروشگاه', BlogSection: 'وبلاگ',
                    // Search Input in the Header
                    category: 'دسته بندی ها', PlaceHolder: 'جستجو برای دوره ..',
                    Login: 'حساب کاربری',
                    // data in the Footer
                    footerDescription: 'هنگامی که یک چاپگر ناشناخته گالری را تایپ کرده و آن را در هم می زند تا نمونه ای بسازد',
                    // Links
                    linksTitle: 'لینک های مفید', link1: 'ارزش های ما', link2: 'هیئت مشاوران ما', link3: 'شرکای ما',
                    link4: 'شریک شدن', link5: 'در Future Learn کار کنید', link6: 'Quizlet Plus',
                    // Company
                    companyTitle: 'شرکت ما', company1: 'با ما تماس بگیرید', company2: 'معلم شوید',
                    company3: 'وبلاگ', company4: 'مربی', company5: 'مناسبت ها',
                    touchTitle: 'در تماس باشید', touchDesc: 'هنگامی که یک چاپگر ناشناس گرفت نوع گالری و درهم',
                    // titlePages
                    loginTitle: 'ورود به عنوان دانش آموز', login: "ورود", CoursesTitle: 'همه دوره ها',
                    signUpTitle: 'ثبت نام به عنوان دانش آموز', or: "یا", EventsTitle: "همه مناسبت ها", contactUsTitle: "تماس با ما",
                    // Buttons
                    GoHomePage: "به صفحه اصلی بروید", Join: 'به رویداد بپیوندید', submit: "ارسال کنید",
                    // LoginForm
                    LoginCaption: "خوش برگشتی!",
                    LoginDesc: " سلام! آماده ورود به سیستم هستید؟ فقط نام کاربری و رمز عبور خود را در زیر وارد کنید و شما در کمترین زمان به عمل خواهید رسید. بیا بریم!",
                    RememberMe: "مرا به خاطر بسپار", ForgetPassword: "رمز عبور را فراموش کرده اید؟", loginBtn: "ورود",
                    HaveAccount2: "حساب کاربری ندارید؟",
                    // SignUpForm
                    SignUpCaption: "حساب کاربری برای خود بسازید",
                    SignUpDesc: "سلام! برای پیوستن به حزب آماده اید؟ برای دریافت فقط به چند جزئیات از شما نیاز داریم آغاز شده. بیا انجامش بدیم!",
                    SignUpBtn: "ثبت نام", HaveAccount1: "از قبل حساب کاربری دارید؟",
                    // ErrorPage
                    error: "صفحه خطا", ErrorDesc: "متاسفم! این صفحه در دسترس نیست!",
                    // EventsPage
                    EventTitle1: "آموزش جاوا اسکریپت با خیال پردازی", EventDate: "14تیر، 1403", EventCity1: "توکیو",
                    EventTitle2: " ایجاد آینده از طریق فناوری Aewe", EventCity2: "نیویورک",
                    EventPrice: 'هزینه رویداد', EventInfo: 'اطلاعات رویداد', eventDate: 'تاریخ', StartTime: 'زمان شروع',
                    EventTopics: 'موضوعات', EventQuizzes: 'آزمون ها', EventCertifications: 'گواهینامه ها',
                    EventTotalSeat: 'صندلی کل', Payment: 'پرداخت امن:', ShareCourse: 'این دوره را به اشتراک بگذارید:',
                    EventOverview: 'نمای کلی رویداد', LearnEvent: 'در این رویداد چه خواهید آموخت؟',
                    EventElements: 'چهار عنصر اصلی که ما ارائه می دهیم برای این رویداد',
                    EventElement1: 'با رنگ و گرادیان و شبکه کار کنید', EventElement2: 'تمام میانبرهای مفید',
                    EventElement3: 'قادر به ایجاد بروشور، بروشور، تبلیغات باشید',
                    EventElement4: 'نحوه کار با تصاویر و متن',
                    // Contact us page
                    contactUsCaption: "برای ما پیام ارسال کنید", contactUsDescription: "آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند *",
                    // Filters Name
                    price: 'قیمت', level: 'سطح مهارت', instructor: 'مربیان', rating: 'رتبه بندی ها',type:'نحوه برگذاری',
                    removeFilters:'حذف فیلترها',
                },
            },
            en: {
                translation: {
                    // name Group
                    nameGroup: 'Number One', teamSlogan: 'ALWAYS THE BEST',
                    // Others
                    yes: 'Yes', no: 'No', Reviews: 'Reviews', student: 'Students', Development: 'Development', By: 'By', map: 'Map',
                    test: 'This is a test message',priceCount:'$',show:'Showing',result:'Result of',sortBy:'Sort By:',
                    // Menu Items in the Header
                    HomeSection: 'Home', CoursesSection: 'Courses', Events: 'Events', ShopSection: 'Shop', BlogSection: 'Blog',
                    // Search Input in the Header
                    category: 'Categories', PlaceHolder: 'Search For Course ...',
                    Login: 'User Account',
                    // Footer
                    footerDescription: 'when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.',
                    // Links
                    linksTitle: 'Useful Links', link1: 'Our values', link2: 'Our advisory board', link3: 'Our partners',
                    link4: 'Become a partner', link5: 'Work at Future Learn', link6: 'Quizlet Plus',
                    // Company
                    companyTitle: 'Our Company', company1: 'Contact Us', company2: 'Become Teacher',
                    company3: 'Blog', company4: 'Instructor', company5: 'Events',
                    touchTitle: 'Get In Touch', touchDesc: 'when an unknown printer took galley type and scrambled',
                    // titlePages
                    loginTitle: 'Student Login', login: "Login", CoursesTitle: 'All Courses',
                    signUpTitle: 'Student SignUp', or: "or", EventsTitle: "All Events", contactUsTitle: "Contact With Us",
                    // Buttons
                    GoHomePage: "Go To Home Page", Join: 'Join This Event', submit: "Submit Now",
                    // LoginForm
                    LoginCaption: "Welcome back!",
                    LoginDesc: "Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!",
                    RememberMe: "Remember me", ForgetPassword: "Forget Password?", loginBtn: "Sign In",
                    HaveAccount2: "Don't have an account?",
                    // SignUpForm
                    SignUpCaption: "Create Your Account",
                    SignUpDesc: "Hey there! Ready to join the party? We just need a few details from you to get started. Let's do this!",
                    SignUpBtn: "Sign Up", HaveAccount1: "Already have an account?",
                    // ErrorPage
                    error: "Error Page", ErrorDesc: "Sorry! This Page is Not Available!",
                    // EventsPage
                    EventTitle1: "Learning JavaScript With Imagination", EventDate: "25 June, 2024", EventCity1: "Tokyo",
                    EventTitle2: "Aewe Creating Futures Through Technology", EventCity2: "New Work",
                    EventPrice: 'Event Fee', EventInfo: 'Event Infomation', eventDate: 'Date', StartTime: 'Start Time',
                    EventTopics: 'Topics', EventQuizzes: 'Quizzes', EventCertifications: 'Certifications',
                    EventTotalSeat: 'Total Seat', Payment: 'Secure Payment:', ShareCourse: 'Share this course:',
                    EventOverview: 'Event Overview', LearnEvent: 'What youll learn in this event?',
                    EventElements: 'Four major elements that we offer for this event',
                    EventElement1: 'Work with color & Gradients & Grids', EventElement2: 'All the useful shortcuts',
                    EventElement3: 'Be able to create Flyers, Brochures, Advertisements',
                    EventElement4: 'How to work with Images & Text',
                    // Contact us page
                    contactUsCaption: "Send Us Message", contactUsDescription: "Your email address will not be published. Required fields are marked *",
                    // Filters Name
                    price: 'Price', level: 'Skill Level', instructor: 'Instructors', rating: 'Ratings',type:'How to put',
                    removeFilters:'Remove Filters',
                },
            },
        },
    });

export default i18n;
