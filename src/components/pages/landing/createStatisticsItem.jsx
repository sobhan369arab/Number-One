import React from 'react'
import MediaQuery from 'react-responsive'

const CreateStatisticsItem = ({ Statistics, name, isBorder = false }) => {
    return (
        <>
            <div className="w-1/2 md:w-1/4 h-full flex items-center flex-wrap">
                <h1 className="w-full text-white sm:text-5xl mobile:text-3xl text-center" dir="ltr">{Statistics}</h1>
                <p className="w-full text-center mobile:text-sm text-white">{name}</p>
            </div>
            <MediaQuery minWidth={"768px"}>
                {isBorder ? <div className="w-0.5 bg-gradient-to-b from-white rounded-full"></div> : null}
            </MediaQuery>
        </>
    )
}

export default CreateStatisticsItem
