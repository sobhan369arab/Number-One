const FieldSection = ({ fieldTitle, descriptionTitle }) => {
    return (
        <li className='w-full'>
            <span className='text-[#161439]'>{fieldTitle}</span>
            <span className='mx-2 text-purpleCustom'>{descriptionTitle ? descriptionTitle : "--"}</span>
        </li>
    )
}

export default FieldSection
