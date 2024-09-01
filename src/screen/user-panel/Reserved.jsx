import { Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount } from "../../components/common"
import { useState } from "react"

const Reserved = () => {
    const headerTable = ["نام دوره", "مدرس دوره", "تاریخ شروع", "قیمت", "وضعیت"]
    const data = [
        { id: 1, profile: "", courseName: "آموزش Tailwind css", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰", status: false },
        { id: 2, profile: "", courseName: "آموزش کامل کار با Figma", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰", status: true },
        { id: 3, profile: "", courseName: "آموزش NextJs", teacher: "محمد رضا ساداتی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۲,۵۰۰,۰۰۰", status: false },
        { id: 4, profile: "", courseName: "آموزش Tailwind css", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰", status: false },
        { id: 5, profile: "", courseName: "آموزش کامل کار با Figma", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰", status: true },
    ]
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 8;
    const currentItems = data.slice(itemOffset, endOffset);
    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <Table sectionHeader={headerTable} style="border-t mt-3 pt-5">
                <PaginateHolderItems style="justify-center h-[633px]">
                    <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 8, setItemOffset, data) }} pageCount={calculatePageCount(data, 8)}>
                        <div className='itemsTable_userPanel_holder'>
                            {currentItems.map((item, index) => <TableItem key={index} object={item} variant="reserved" />)}
                        </div>
                    </PaginatedItems>
                </PaginateHolderItems>
            </Table>
        </div>
    )
}

export default Reserved
