import { Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount } from "../../components/common"
import { useState } from "react"

const Favorites = () => {
    const headerTable = [
        { text: ["عنوان", "Title"] },
        { text: ["دسته بندی", "Category"] },
        { text: ["زمان انتشار", "Date"] },
        { text: ["نویسنده", "Author"] },
    ]
    const data = [
        { id: 1, courseName: "آموزش Tailwind css", category: "دوره آموزشی", date: "۱۴۰۴/۰۳/۰۲ , ۱۶:۲۷", author: "دکتر محمدحسین بحر العلومی" },
        { id: 2, courseName: "آموزش کامل کار با Figma", category: "اخبار و مقالات", date: "۱۴۰۴/۰۲/۰۸ , ۱۵:۲۸", author: "محمد رضا ساداتی" },
        { id: 3, courseName: "آموزش NextJs", category: "دوره آموزشی", date: "۱۴۰۴/۰۲/۰۸ , ۱۵:۲۸", author: "دکتر محمدحسین بحر العلومی" },
    ]
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 8;
    const currentItems = data.slice(itemOffset, endOffset);
    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <PaginateHolderItems style="justify-center h-[666px]">
                <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 8, setItemOffset, data) }} pageCount={calculatePageCount(data, 8)}>
                    <div className="overflow-x-auto h-[666px]">
                        <Table sectionHeader={headerTable}>
                            {currentItems.map((item, index) => <TableItem key={index} item={item} variant="favorites" />)}
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default Favorites
