import { useTranslation } from "react-i18next"
import TitleSection from "../../partials/TitleSection/titleSection"
import BlueButton from "../../components/common/BlueButton";

const Error404 = () => {
    const {t} = useTranslation();
    return (
        <>
        <TitleSection title={'error'}/>
        <div className="m-auto my-20 w-fit font-semibold cursor-default">
            <img src="./icons/Error.png" alt="Error Icon" className="sm:w-[420px] w-80 mx-auto " />
            <h1 className="mt-10 mb-1 sm:text-3xl text-xl text-center">{t('error')}!</h1>
            <h1 className="sm:text-3xl text-xl text-center">{t('ErrorDesc')}</h1>
            <BlueButton text={'GoHomePage'} clas={'w-48 mt-10 m-auto'}/>
        </div>
        </>
    )
}

export default Error404