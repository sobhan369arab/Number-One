const ContactField = ({ placeholder }) => {
    return (
        <input
            className="w-full sm:w-1/3 h-12 border-2 border-LightGrayish outline-none rounded-md px-4 text-DarkBlue"
            placeholder={placeholder}
            type="text"
            name="field"
        />
    )
}

export default ContactField