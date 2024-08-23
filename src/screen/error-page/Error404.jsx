import { useTranslation } from "react-i18next"
import { Button } from "../../components/common";
import TitleSection from "../../components/partials/title-section/TitleSection";
import { Error404Icon } from "../../core/icon";

const Error404 = () => {
    const {t} = useTranslation();
    return (
        <>
        <TitleSection title={'error'}/>
<<<<<<< HEAD
        <div className="m-auto sm:my-16 my-12 w-fit font-semibold cursor-default">
            <Error404Icon className="sm:w-[420px] w-80 mx-auto " />
            <h1 className="mb-1 sm:text-3xl text-xl text-center">{t('error')}!</h1>
            <h1 className="sm:text-3xl text-xl text-center">{t('ErrorDesc')}</h1>
            <BlueButton ArrowColor={"white"} text={'GoHomePage'} Class={'bg-purpleCustom text-white mt-10 m-auto'}/>
=======
        <div className="m-auto sm:my-16 my-12 w-fit flex flex-wrap  text-titleColor gap-y-4 justify-center font-semibold cursor-default">
            <Error404Icon className="sm:w-[420px] w-80" />
            <h1 className="w-full sm:text-3xl text-xl text-center">{t('error')}!</h1>
            <h1 className="w-full sm:text-3xl text-xl text-center">{t('ErrorDesc')}</h1>
            <Button arrowColor={"#fff"} variant="purple" text={'GoHomePage'}/>
>>>>>>> 2c23e377654e3d1626e00dccf231f84aa45aa792
        </div>
        </>
    )
}

export default Error404