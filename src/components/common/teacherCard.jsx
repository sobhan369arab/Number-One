import { Link } from "react-router-dom"
import {FacebookIcon} from "../../core/icon/index"
import {TwitterIcon} from "../../core/icon/index"
import {WhatsAppIcon} from "../../core/icon/index"
import {InstagramIcon} from "../../core/icon/index"

const TeacherCard = ({ name, skill, picture, href }) => {
    const socialMedia = [
        { id: 1, icon: <InstagramIcon /> },
        { id: 2, icon: <WhatsAppIcon /> },
        { id: 3, icon: <TwitterIcon /> },
        { id: 4, icon: <FacebookIcon /> },
    ]
    return (
        <div className="flex gap-x-4 items-center">
            <Link to={href} className="w-28 md:w-[140px] h-28 md:h-[150px] flex justify-center items-center overflow-hidden rounded-full bg-gradient-to-tr from-[#F7F6F9] to-[#E9F5F5]">
                <img src={picture} alt="Instructor" />
            </Link>
            <Link to={href} className="h-fit -mt-8">
                <h1 className="text-lg text-titleColor">{name}</h1>
                <span className="text-sm text-purpleCustom">{skill}</span>
                <div className="w-full flex gap-x-2">
                    {socialMedia.map(item => (
                        <div key={item.id} className="mt-2 w-8 h-8 rounded-full border border-neutral-500 flex justify-center items-center">
                            {item.icon}
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    )
}

export default TeacherCard
