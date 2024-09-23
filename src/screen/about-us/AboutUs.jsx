import { useTranslation } from "react-i18next"
import TitleSection from "../../components/partials/title-section/TitleSection"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import { MoreInfoAboutUs, WhatWeOffer, OurTestimonials } from "../../components/pages/about-us"
import { HowToStart, InformedPoster } from "../../components/common"

const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <>
            <TitleSection title={t("aboutTitle")}>
                <BreadCrumb type="Div" text={t("aboutTitle")} />
            </TitleSection>
            <MoreInfoAboutUs />
            <WhatWeOffer />
            <InformedPoster />
            <HowToStart requestSection="hide" />
            <OurTestimonials />
        </>
    )
}

export default AboutUs
