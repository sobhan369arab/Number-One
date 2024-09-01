import { EyeIcon, TrashCan } from "../../../core/icon"

const TableItem = ({ object, variant }) => {
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
                {Icon: EyeIcon},
            ]
        },
        reserved: {
            sections: [
                { section: object.courseName },
                { section: object.teacher },
                { section: object.date, dir: "ltr" },
                { section: object.price },
                { section: object.status ? "تایید شده" : "در انتظار تایید", color: object.status ? "#128E5A" : "#DE5204" },
            ],
            width: "w-1/5",
            actions: [
                {Icon: EyeIcon},
                {Icon: TrashCan},
            ]
        },
        myViews: {
            sections: [
                { section: object.courseName },
                { section: object.category },
                { section: object.date, dir: "ltr" },
                { section: object.status ? "تایید شده" : "در انتظار تایید", color: object.status ? "#128E5A" : "#DE5204" },
            ],
            width: "w-1/4",
            actions: [
                {Icon: EyeIcon},
                {Icon: TrashCan},
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
                {Icon: EyeIcon},
                {Icon: TrashCan},
            ]
        }
    }
    return (
        <div className="w-full h-fit text-center text-sm flex item-center odd:bg-[#C8C1ED]/30 justify-around p-1.5 rounded-lg shadow-md">
            <span className="min-w-8 h-8 rounded-full bg-purpleCustom ml-2"></span>
            {differentSection?.[variant].sections.map((item, index) => <span key={index} className={`line-clamp-1 h-fit ${differentSection?.[variant].width}`} dir={item.dir} style={{color: item.color}}>{item.section}</span>)}
            <span className="w-12 h-6 flex items-center justify-between">
                {differentSection?.[variant].actions.map((item, index) => <div key={index} className="cursor-pointer hover:scale-110"><item.Icon /></div>)}
            </span>
        </div>
    )
}

export default TableItem
