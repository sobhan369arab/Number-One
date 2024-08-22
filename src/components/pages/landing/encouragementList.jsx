const Encouragement = ({ title, description, icon }) => {
    return (
        <li className="w-1/4 h-fit py-4 px-8 flex justify-center flex-wrap gap-y-4">
            <div className="w-20 h-20 bg-yellow-500">{icon}</div>
            <h1 className="w-full text-center text-white text-xl">{title}</h1>
            <p className="description-text w-full text-center">{description}</p>
        </li>
    )
}

export default Encouragement