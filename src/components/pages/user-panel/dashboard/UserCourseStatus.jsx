const UserCourseStatus = ({amount, Icon, description}) => {
    return (
        <div className='w-44 h-20 bg-neutral-100 rounded-md heroSection_box_shadow py-2 px-4 relative'>
            <h1 className='w-full text-2xl text-purpleCustom'>{amount} دوره</h1>
            <span className='w-full text-[#A7A7A7]'>{description}</span>
            <div className='w-14 h-14 rounded-full bg-purpleCustom absolute -top-7 left-4 flex justify-center items-center'>
                <Icon />
            </div>
        </div>
    )
}

export default UserCourseStatus
