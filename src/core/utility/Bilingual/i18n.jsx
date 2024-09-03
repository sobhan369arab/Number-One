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
                    yes: 'بله', no: 'خیر', Reviews: 'امتیاز', student: 'دانشجو', Development: 'توسعه', By: 'توسط', map: 'نقشه', from: 'از',
                    test: 'این یک پیام تستی است', priceCount: 'تومان', show: 'نمایش', result: 'نتیجه از', sortBy: 'مرتب سازی بر اساس:', upTo: 'تا',
                    // Menu Items in the Header
                    HomeSection: 'صفحه اصلی', CoursesSection: 'دوره های آموزشی', Events: 'ایونت ها', ShopSection: 'فروشگاه', BlogSection: 'وبلاگ',
                    // Search Input in the Header
                    category: 'دسته بندی ها',
                    Login: 'حساب کاربری',
                    // PlaceHolder in search input Pages
                    PlaceHolder_Courses: 'جستجو برای دوره ...', PlaceHolder_Blogs: 'جستجو برای وبلاگ ...',
                    PlaceHolder_Shop: 'جستجو برای محصول ...',
                    // data in the Footer
                    footerDescription: 'هنگامی که یک چاپگر ناشناخته گالری را تایپ کرده و آن را در هم می زند تا نمونه ای بسازد',
                    // Links
                    linksTitle: 'لینک های مفید', link1: 'ارزش های ما', link2: 'هیئت مشاوران ما', link3: 'شرکای ما',
                    link4: 'شریک شدن', link5: 'در Future Learn کار کنید', link6: 'Quizlet Plus',
                    // Landing
                    // heroSection
                    heroSectionDescription: "هر سفر آموزشی و یادگیری دنبال کردن منحصر به فرد است ما به شما کمک خواهیم کرد", heroSectionTitle1: "هرگز از",
                    heroSectionTitle2: "دست نکشید زندگی هرگز از آموزش دست نمی کشد", heroSectionBtn: "رایگان آزمایش کنید",
                    // category
                    categoryLabel: "دسته بندی های پرطرفدار", categoryTitle: "دسته بندی های برتر", categoryDescription: "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است",
                    // aboutUs
                    aboutLabel: "درباره ما بیشتر بدانید", aboutTitle1: "هزاران", aboutTitle2: "برتر اکنون در یک مکان",
                    aboutDescription: "صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم در مورد پایه پلتفرم وب.",
                    aboutBtn: "رایگان آزمایش کنید", aboutImportantWord: "دوره های", boardText: "بیش از 36 هزار دانشجوی ثبت نام شده",
                    // topCourses
                    topCoursesLabel: "دوره های کلاس برتر", topCoursesTitle: "بهترین دوره های آموزشی جهان ما را کاوش کنید", topCoursesDescription: "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است",
                    // skilledTeachers
                    skilledTeachersLabel: "معلم های ماهر", skilledTeachersTitle: "کلاس برتر ما و مربیان خبره در یک مکان",
                    skilledTeachersDesc: "هنگامی که یک چاپگر ناشناس یک گالری از نوع و کتاب نمونه درهم درست شده باقی نمانده است فقط پنج قرن", skilledTeachersBtn: "همه مربیان را ببینید",
                    // faq
                    faqLabel: "سوالات متداول", faqTitle: "شروع به تمرین از مربیان حرفه ای جهان", faqDescription: "صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند دهی، اولویت بندی و.در این قسمت.",
                    // howToStart
                    howToStartLabel: "چگونه سفر را شروع می کنیم", howToStartTitle: "سفر یادگیری خود را از همین امروز شروع کنید!", howToStartDesc: "اعضای شهودی Groove make team ورودی را با هم به تقسیم سازماندهی، اولویت بندی و.در این قسمت.",
                    // lastBlogs
                    lastBlogsLabel: "اخبار و وبلاگ ها", lastBlogsTitle: "آخرین خبر ما", lastBlogsDesc: "هنگامی که چاپگر شناخته شده یک گالری از نوع scrambl edmake گرفت",
                    // informedPoster
                    informedPlaceholder: "ایمیل خود را تایپ کنید", informedWord1: "میخواهید در مورد", informedWord3: "جدید",
                    informedImportantWord1: "دوره های", informedImportantWord2: "مطلع باشید", informedBtn: "اکنون مشترک شوید",
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
                    price: 'قیمت', level: 'سطح مهارت', instructor: 'مربیان', rating: 'رتبه بندی ها', type: 'نحوه برگذاری',
                    removeFilters: 'حذف فیلترها',openFilter:'فیلتر ها',filters:'فیلتر ها',
                },
            },
            en: {
                translation: {
                    // name Group
                    nameGroup: 'Number One', teamSlogan: 'ALWAYS THE BEST',
                    // Others
                    yes: 'Yes', no: 'No', Reviews: 'Reviews', student: 'Students', Development: 'Development', By: 'By', map: 'Map',
                    test: 'This is a test message', priceCount: '$', show: 'Showing', result: 'Result of', sortBy: 'Sort By:', from: 'from', upTo: 'up To',

                    // Menu Items in the Header
                    HomeSection: 'Home', CoursesSection: 'Courses', Events: 'Events', ShopSection: 'Shop', BlogSection: 'Blog',
                    // Search Input in the Header
                    category: 'Categories',
                    Login: 'User Account',
                    // PalceHolder in search input Pages
                    PlaceHolder_Courses: 'Search For Course ...', PlaceHolder_Blogs: 'Search For Blog ...',
                    PlaceHolder_Shop: 'Search For Product ...',
                    // Footer
                    footerDescription: 'when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.',
                    // Links
                    linksTitle: 'Useful Links', link1: 'Our values', link2: 'Our advisory board', link3: 'Our partners',
                    link4: 'Become a partner', link5: 'Work at Future Learn', link6: 'Quizlet Plus',
                    // Landing
                    // heroSection
                    heroSectionDescription: "Every teaching and learning journey is unique Following We'll help guide your way.", heroSectionTitle1: "Never Stop",
                    heroSectionTitle2: "Life Never Stop Teaching", heroSectionBtn: "Start Free Trial",
                    // category
                    categoryLabel: "Trending Categories", categoryTitle: "Top Category We Have", categoryDescription: "when known printer took a galley of type scrambl edmake",
                    // aboutUs
                    aboutLabel: "Get More About Us", aboutTitle1: "Thousand Of Top", aboutTitle2: "Now in One Place",
                    aboutDescription: "Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this episode of the Smashing Pod we’re alking about Web Platform Baseline.",
                    aboutBtn: "Start Free Trial", aboutImportantWord: "Courses", boardText: "36K+ Enrolled Students",
                    // topCourses
                    topCoursesLabel: "Top Class Courses", topCoursesTitle: "Explore Our World's Best Courses", topCoursesDescription: "When known printer took a galley of type scrambl edmake",
                    //skilledTeachers
                    skilledTeachersLabel: "Skilled Introduce", skilledTeachersTitle: "Our Top Class & Expert Instructors in One Place",
                    skilledTeachersDesc: "when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries", skilledTeachersBtn: "See All Instructors",
                    // faq
                    faqLabel: "Faq’s", faqTitle: "Start Learning From World’s Pro Instructors", faqDescription: "Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this episode.",
                    // howToStart
                    howToStartLabel: "How We Start Journey", howToStartTitle: "Start your Learning Journey Today!", howToStartDesc: "Groove’s intuitive shared inbox makesteam members together organize, prioritize and.In this episode.",
                    // lastBlogs
                    lastBlogsLabel: "News & Blogs", lastBlogsTitle: "Our Latest News Feed", lastBlogsDesc: "when known printer took a galley of type scrambl edmake",
                    // informedPoster
                    informedPlaceholder: "Type your e-mail", informedWord1: "Want To Stay About", informedWord3: "New",
                    informedImportantWord1: "Informed", informedImportantWord2: "Courses & Study?", informedBtn: "Subscribe Now",
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
                    price: 'Price', level: 'Skill Level', instructor: 'Instructors', rating: 'Ratings', type: 'How to put',
                    removeFilters: 'Remove Filters',openFilter:'Open Filters',filters:'Filters',
                },
            },
        },
    });

export default i18n;
