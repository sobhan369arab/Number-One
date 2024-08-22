import { BlueButton } from "../../common"

const CreateRequestCard = ({ title, picture, paragraph, buttonValue }) => {
    return (
        <div className="w-1/2 min-h-52 flex flex-wrap bg-white rounded-2xl relative overflow-hidden pr-60 pl-10 py-8 gap-y-2">
            <div className="w-[224px] h-[200px] rotate-[25deg] absolute -bottom-20 -right-8 specialRadius bg-orange">
                <img className="rotate-[-25deg] h-44 absolute bottom-16 right-20" src={picture} alt="mannequin" />
            </div>
            <h1 className="title-text">{title}</h1>
            <p className="description-text w-full">
                {paragraph}
            </p>
            <BlueButton text={buttonValue} Class="text-white bg-purpleCustom h-fit" ArrowColor="#fff" />
        </div>
    )
}

export default CreateRequestCard
