const PercentageSkills = ({skillName, percentage}) => {
    return (
        <div className='w-full sm:w-1/2 px-2 flex flex-wrap'>
            <div className='w-full flex justify-between px-1 mb-1'>
                <span>{skillName}</span>
                <span>{percentage}</span>
            </div>
            <div className='w-full h-2 rounded-full bg-[#EBEBEB] overflow-hidden'>
                <div style={{width: percentage}} className="h-full bg-yellowCustom"></div>
            </div>
        </div>
    )
}

export default PercentageSkills
