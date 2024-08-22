import React from 'react'

const CreateStatisticsItem = ({ Statistics, name, isBorder = false }) => {
    return (
        <>
            <div className="w-1/4 h-full flex items-center flex-wrap">
                <h1 className="w-full text-white text-5xl text-center" dir="ltr">{Statistics}</h1>
                <p className="w-full text-center text-white">{name}</p>
            </div>
            {isBorder ? <div className="w-0.5 bg-gradient-to-b from-white rounded-full"></div> : null}
        </>
    )
}

export default CreateStatisticsItem
