const FieldSection = ({ fieldTitle, descriptionTitle }) => {
    return (
        <li className='w-full flex flex-wrap md:justify-start justify-center'>
            <span className='text-DarkBlue text-nowrap'>{fieldTitle}</span>
            <span className='mx-2 text-VioletBlue text-center'>{descriptionTitle ? descriptionTitle : "--"}</span>
        </li>
    )
}

export default FieldSection
