import { useTranslation } from "react-i18next";

export const Map = () => {
    const { t,i18n } = useTranslation();

    return (
        <div className={`${i18n.language==='fa'?'md:left-7 left-1':'md:right-7 right-1'} sm:absolute max-sm:mt-3 -bottom-6 tom-0 Box-shadow1 max-sm:w-11/12 w-68 p-5 bg-white rounded-lg border border-grayCustom`}>
            <h1 className="mb-2">{t('map')}</h1>
            <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.8201084617891!2d53.06614349167832!3d36.59749142671776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8515a7cb36f467%3A0x8a63125684473844!2z2b7amNmI2YfYtNqv2KfZhyDYs9m-2YfYsQ!5e0!3m2!1sfa!2s!4v1723564497018!5m2!1sfa!2s"
                width="208" 
                className="max-sm:w-4/5 mx-auto"
                height="200"> </iframe>
            </div>
        </div>
    )
}
