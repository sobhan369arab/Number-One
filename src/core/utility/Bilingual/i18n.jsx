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
                    yes: 'بله', no: 'خیر',
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
                    // titlePages
                    loginTitle: 'ورود به عنوان دانش آموز', login: "ورود",
                    signUpTitle: 'ثبت نام به عنوان دانش آموز', or: "یا", EventsTitle: "همه مناسبت ها",
                    // Buttons
                    GoHomePage: "به صفحه اصلی بروید", Join: 'به رویداد بپیوندید',
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
                    EventTotalSeat: 'صندلی کل', Payment: 'پرداخت امن:', ShareCourse: 'این دوره را به اشتراک بگذارید:'





                },
            },
            en: {
                translation: {
                    // name Group
                    nameGroup: 'Number One', teamSlogan: 'ALWAYS THE BEST',
                    // Others
                    yes: 'Yes', no: 'No',
                    // Menu Items in the Header
                    HomeSection: 'Home', CoursesSection: 'Courses', PagesSection: 'Pages', ShopSection: 'Shop', BlogSection: 'Blog',
                    // Search Input in the Header
                    category: 'Categories', PlaceHolder: 'Search For Course ...',
                    Login: 'Login',
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
                    loginTitle: 'Student Login', login: "Login",
                    signUpTitle: 'Student SignUp', or: "or", EventsTitle: "All Events",
                    // Buttons
                    GoHomePage: "Go To Home Page", Join: 'Join This Event',
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
                    EventTotalSeat: 'Total Seat', Payment: 'Secure Payment:', ShareCourse: 'Share this course:'


                },
            },
        },
    });

export default i18n;
