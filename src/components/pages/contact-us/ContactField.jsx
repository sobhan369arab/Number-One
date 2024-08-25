const ContactField = ({ placeholder }) => {
    return (
        <input
            className="w-full sm:w-1/3 h-12 border-2 border-neutral-200 outline-none rounded-md px-4"
            placeholder={placeholder}
            type="text"
            name="field"
        />
    )
}

export default ContactField