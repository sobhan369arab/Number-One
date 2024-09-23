import React from 'react'
import { ImportantWord } from '../../common'
import { useTranslation } from 'react-i18next'

const RelatedProducts = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex items-center gap-x-5">
                <ImportantWord>{t("products")}</ImportantWord>
                <h1 className="boldStyle_text">{t("related")}</h1>
            </div>
            <div className="w-full h-[410px] bg-SunshineYellow"></div>
        </div>
    )
}

export default RelatedProducts
