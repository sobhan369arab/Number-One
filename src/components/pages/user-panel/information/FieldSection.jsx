const FieldSection = ({ fieldTitle, descriptionTitle }) => {
    return (
        <li className='w-full flex flex-wrap md:justify-start justify-center'>
            <span className='text-[#161439] text-nowrap'>{fieldTitle}</span>
            <span className='mx-2 text-purpleCustom text-center'>{descriptionTitle ? descriptionTitle : "--"}</span>
        </li>
    )
}

export default FieldSection
