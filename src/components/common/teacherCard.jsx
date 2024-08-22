import {FacebookIcon} from "../../core/icon/index"
import {TwitterIcon} from "../../core/icon/index"
import {WhatsAppIcon} from "../../core/icon/index"
import {InstagramIcon} from "../../core/icon/index"

const TeacherCard = ({ name, skill, picture }) => {
    const socialMedia = [
        { id: 1, icon: <InstagramIcon /> },
        { id: 2, icon: <WhatsAppIcon /> },
        { id: 3, icon: <TwitterIcon /> },
        { id: 4, icon: <FacebookIcon /> },
    ]
    return (
        <div className="flex gap-x-4 items-center">
            <div className="w-[140px] h-[150px] rounded-full bg-yellow-500"></div>
            <div className="h-fit ">
                <h1>اولیویا میا</h1>
                <span>طراحی وب سایت</span>
                <div className="w-full flex gap-x-2">
                    {socialMedia.map(item => (
                        <div key={item.id} className="mt-2 w-8 h-8 rounded-full border border-neutral-500 flex justify-center items-center">
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeacherCard
