import React from 'react'
import { ImportantWord } from '../../common'

const RelatedProducts = () => {
    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex items-center gap-x-5">
                <ImportantWord>محصولات</ImportantWord>
                <h1 className="boldStyle_text">مرتبط</h1>
            </div>
            <div className="w-full h-[410px] bg-yellowCustom"></div>
        </div>
    )
}

export default RelatedProducts
