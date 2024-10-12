import { useTranslation } from "react-i18next"
import { EyeIcon, TrashCan } from "../../../core/icon"
import { Skeleton, Tooltip } from "@nextui-org/react"
import tooltipStyle from "../../../core/constants/tooltip-style/tooltip"
import { UnitPrice } from "../../../core/utility/SeparationPrice/SeparationPrice"
import ChangeMoment from "../../../core/utility/moment/ChangeMoment"
import { useNavigate } from "react-router-dom"
import ChangeTime from "../../../core/utility/time/ChangeTime"

const TableItem = ({ item, variant, isLoading, action, keyVariant, navigateToPage, paramsId }) => {
    const Navigate = useNavigate();
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
            width: "25",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"] },
            ]
        },
        reserved: {
            pic: null,
            sections: [
                { section: item.courseName },
                { section: ChangeMoment(item.reserverDate), dir: "ltr" },
                { section: i18n.language == "en" ? (item.accept ? "Confirmed" : "Waiting") : (item.accept ? "تایید شده" : "در انتظار تایید"), color: item.accept ? "#128E5A" : "#DE5204" },
            ],
            width: "33",
            actions: [
                { Icon: TrashCan, tooltip: ["حذف", "Delete"], function: () => { action(item.reserveId) }, accept: item.accept },
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"], function: () => { alert('Details') } },
            ]
        },
        myViews: {
            id: ++id,
            sections: [
                { section: item.courseTitle },
                { section: item.title },
                { section: i18n.language == "en" ? (item.accept ? "Confirmed" : "Waiting") : (item.accept ? "تایید شده" : "در انتظار تایید"), color: item.accept ? "#128E5A" : "#DE5204" },
                { section: [ChangeMoment(item.insertDate), " , ", ChangeTime(item.insertDate)], dir: "ltr" },
            ],
            width: "25",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"], function: () => { alert('Details') } },
                { Icon: TrashCan, tooltip: ["حذف", "Delete"], function: () => { action(item.reserveId) }, accept: item.accept },
            ]
        },
        favorites: {
            sections: [
                { section: item?.[keyVariant && keyVariant[0]] },
                { section: item?.[keyVariant && keyVariant[1]] },
                { section: item?.[keyVariant && keyVariant[2]]?.replace("T", " , "), dir: "ltr" },
                { section: item?.[keyVariant && keyVariant[3]] },
            ],
            width: "25",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"], function: () => { Navigate(navigateToPage.concat(item?.[paramsId])) } },
                { Icon: TrashCan, tooltip: ["حذف", "Delete"], function: () => { action(item.favoriteId) } },
            ]
        }
    }

    return (
        <tr className="min-w-[830px] w-full h-fit text-center text-sm flex items-center odd:bg-[#C8C1ED]/30 dark:odd:bg-[#C8C1ED]/10 justify-around p-1.5 rounded-lg shadow-md hover:shadow-xl duration-200">
            <Skeleton isLoaded={!isLoading}>
                {!differentSection?.[variant].id ? (
                    <td className="min-w-8 w-8 h-8 rounded-full bg-VioletBlue ml-2 overflow-hidden">
                        <img src={differentSection?.[variant].pic} className="w-full h-full" alt="" />
                    </td>
                ) : (
                    <td className="min-w-8 w-8 h-8 flex gap-x-1 flex-row-reverse items-center text-DarkBlue text-lg">
                        <span>#</span>
                        <span className="font-Number text-xl">{differentSection?.[variant].id}</span>
                    </td>
                )}
            </Skeleton>
            {differentSection?.[variant].sections.map((item, index) => (
                <Skeleton style={{ width: differentSection?.[variant].width + "%" }} isLoaded={!isLoading} key={index}>
                    <td className={`line-clamp-1 h-fit text-DarkBlue`} dir={item.dir} style={{ color: item.color }}>
                        {item.section}
                    </td>
                </Skeleton>
            ))}
            <Skeleton isLoaded={!isLoading}>
                <td className="w-12 h-6 flex items-center justify-end gap-x-3">
                    {differentSection?.[variant].actions.map((item, index) => (
                        <Tooltip key={index} {...tooltipStyle} content={i18n.language == "en" ? item.tooltip[1] : item.tooltip[0]}>
                            <div style={{ display: !item.accept ? "block" : "none" }} onClick={item.function} className="cursor-pointer bg-re hover:scale-110">
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
