import { OptionIcon } from "../../core/icon";

const OptionParts = ({text}) => {
    return (
        <li className="w-full flex gap-x-2 items-center">
            <div className="w-8 h-8 border-2 border-darkPurple rounded-full bg-[#FFC224] flex justify-center items-center OptionIcon_shadow">
                <OptionIcon fill="#1c1A4A" />
            </div>
            <h4 className="title-text text-lg">{text}</h4>
        </li>
    )
}

export default OptionParts;
