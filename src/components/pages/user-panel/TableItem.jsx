import { useTranslation } from "react-i18next"
import { EyeIcon, TrashCan } from "../../../core/icon"

const TableItem = ({ object, variant }) => {
    const { i18n } = useTranslation()
    const differentSection = {
        myCourses: {
            sections: [
                { section: object.courseName },
                { section: object.teacher },
                { section: object.date, dir: "ltr" },
                { section: object.price }
            ],
            width: "w-1/4",
            actions: [
                { Icon: EyeIcon },
            ]
        },
        reserved: {
            sections: [
                { section: object.courseName },
                { section: object.teacher },
                { section: object.date, dir: "ltr" },
                { section: object.price },
                { section: i18n.language == "en" ? (object.status ? "Confirmed" : "Waiting") : (object.status ? "تایید شده" : "در انتظار تایید"), color: object.status ? "#128E5A" : "#DE5204" },
            ],
            width: "w-1/5",
            actions: [
                { Icon: EyeIcon },
                { Icon: TrashCan },
            ]
        },
        myViews: {
            sections: [
                { section: object.courseName },
                { section: object.category },
                { section: object.date, dir: "ltr" },
                { section: i18n.language == "en" ? (object.status ? "Confirmed" : "Waiting") : (object.status ? "تایید شده" : "در انتظار تایید"), color: object.status ? "#128E5A" : "#DE5204" },
            ],
            width: "w-1/4",
            actions: [
                { Icon: EyeIcon },
                { Icon: TrashCan },
            ]
        },
        favorites: {
            sections: [
                { section: object.courseName },
                { section: object.category },
                { section: object.date, dir: "ltr" },
                { section: object.author },
            ],
            width: "w-1/4",
            actions: [
                { Icon: EyeIcon },
                { Icon: TrashCan },
            ]
        }
    }
    return (
        <tr className="min-w-[830px] w-full h-fit text-center text-sm flex item-center odd:bg-[#C8C1ED]/30 dark:odd:bg-[#C8C1ED]/10 justify-around p-1.5 rounded-lg shadow-md">
            <td className="min-w-8 h-8 rounded-full bg-VioletBlue ml-2"></td>
            {differentSection?.[variant].sections.map((item, index) => <td key={index} className={`line-clamp-1 h-fit text-DarkBlue ${differentSection?.[variant].width}`} dir={item.dir} style={{ color: item.color }}>{item.section}</td>)}
            <td className="w-12 h-6 flex items-center justify-between">
                {differentSection?.[variant].actions.map((item, index) => <div key={index} className="cursor-pointer bg-re hover:scale-110"><item.Icon stroke="#5751E1" /></div>)}
            </td>
        </tr>
    )
}

export default TableItem
