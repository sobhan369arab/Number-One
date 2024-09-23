const variants = {
    "section": "bg-LavenderMist text-VioletBlue rounded-full text-sm sm:text-base",
}

const Label = ({ text, variant, style }) => {
    return (
        <span className={`py-1 px-4 ${variants?.[variant]} ${style}`}>
            {text}
        </span>
    )
}

export default Label
