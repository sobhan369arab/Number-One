import { useTranslation } from "react-i18next"
import { EyeIcon, TrashCan } from "../../../core/icon"
import { Skeleton, Tooltip } from "@nextui-org/react"
import tooltipStyle from "../../../core/constants/tooltip-style/tooltip"
import { UnitPrice } from "../../../core/utility/SeparationPrice/SeparationPrice"
import ChangeMoment from "../../../core/utility/moment/ChangeMoment"

const TableItem = ({ item, variant, isLoading }) => {
    const { i18n } = useTranslation()
    const differentSection = {
        myCourses: {
            pic: item.tumbImageAddress,
            sections: [
                { section: item.courseTitle },
                { section: item.fullName },
                { section: ChangeMoment(item.lastUpdate), dir: "ltr" },
                { section: `${UnitPrice(item.cost)} تومان` }
            ],
            width: "auto",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"] },
            ]
        },
        reserved: {
            sections: [
                { section: item.courseName },
                { section: item.teacher },
                { section: item.date, dir: "ltr" },
                { section: item.price },
                { section: i18n.language == "en" ? (item.status ? "Confirmed" : "Waiting") : (item.status ? "تایید شده" : "در انتظار تایید"), color: item.status ? "#128E5A" : "#DE5204" },
            ],
            width: "w-1/5",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"] },
                { Icon: TrashCan, tooltip: ["حذف", "Delete"] },
            ]
        },
        myViews: {
            sections: [
                { section: item.courseName },
                { section: item.category },
                { section: item.date, dir: "ltr" },
                { section: i18n.language == "en" ? (item.status ? "Confirmed" : "Waiting") : (item.status ? "تایید شده" : "در انتظار تایید"), color: item.status ? "#128E5A" : "#DE5204" },
            ],
            width: "w-1/4",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"] },
                { Icon: TrashCan, tooltip: ["حذف", "Delete"] },
            ]
        },
        favorites: {
            sections: [
                { section: item.courseName },
                { section: item.category },
                { section: item.date, dir: "ltr" },
                { section: item.author },
            ],
            width: "w-1/4",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"] },
                { Icon: TrashCan, tooltip: ["حذف", "Delete"] },
            ]
        }
    }

    return (
        <tr className="min-w-[830px] w-full h-fit text-center text-sm flex items-center odd:bg-[#C8C1ED]/30 dark:odd:bg-[#C8C1ED]/10 justify-around p-1.5 rounded-lg shadow-md hover:scale-95 duration-200">
            <Skeleton isLoaded={!isLoading}>
                <td className="min-w-8 w-8 h-8 rounded-full bg-VioletBlue ml-2 overflow-hidden">
                    <img src={differentSection?.[variant].pic} className="w-full h-full" alt="" />
                </td>
            </Skeleton>
            {differentSection?.[variant].sections.map((item, index) => (
                <Skeleton isLoaded={!isLoading} key={index}>
                    <td className={`line-clamp-1 h-fit text-DarkBlue`} dir={item.dir} style={{ color: item.color, width: differentSection?.[variant].width }}>
                        {item.section}
                    </td>
                </Skeleton>
            ))}
            <Skeleton isLoaded={!isLoading}>
                <td className="w-12 h-6 flex items-center justify-between">
                    {differentSection?.[variant].actions.map((item, index) => (
                        <Tooltip key={index} {...tooltipStyle} content={i18n.language == "en" ? item.tooltip[1] : item.tooltip[0]}>
                            <div className="cursor-pointer bg-re hover:scale-110">
                                <item.Icon stroke="#5751E1" />
                            </div>
                        </Tooltip>
                    ))}
                </td>
            </Skeleton>
        </tr>
    )
}

export default TableItem
