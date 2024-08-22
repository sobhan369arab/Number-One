import { useTranslation } from "react-i18next"
import { BlueButton } from "../../components/common";
import TitleSection from "../../components/partials/TitleSection/titleSection";
import { Error404Icon } from "../../core/icon";

const Error404 = () => {
    const {t} = useTranslation();
    return (
        <>
        <TitleSection title={'error'}/>
        <div className="m-auto sm:my-16 my-12 w-fit font-semibold cursor-default">
            <Error404Icon className="sm:w-[420px] w-80 mx-auto " />
            <h1 className="mb-1 sm:text-3xl text-xl text-center">{t('error')}!</h1>
            <h1 className="sm:text-3xl text-xl text-center">{t('ErrorDesc')}</h1>
            <BlueButton ArrowColor={"white"} text={'GoHomePage'} Class={'bg-purpleCustom text-white mt-10 m-auto'}/>
        </div>
        </>
    )
}

export default Error404