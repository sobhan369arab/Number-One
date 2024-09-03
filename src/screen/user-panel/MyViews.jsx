import { SearchSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount } from "../../components/common"
import { useState } from "react"

const MyViews = () => {
    const headerTable = [
        { text: ["دیدگاه در", "View in"] },
        { text: ["دسته بندی", "Category"] },
        { text: ["زمان", "Date"] },
        { text: ["وضعیت", "Status"] },
    ]
    const data = [
        { id: 1, courseName: "آموزش Tailwind css", category: "دوره آموزشی", date: "۱۴۰۴/۰۳/۰۲ , ۱۶:۲۷", status: false },
        { id: 2, courseName: "آموزش کامل کار با Figma", category: "اخبار و مقالات", date: "۱۴۰۴/۰۲/۰۸ , ۱۵:۲۸", status: true },
        { id: 3, courseName: "آموزش NextJs", category: "دوره آموزشی", date: "۱۴۰۴/۰۲/۰۸ , ۱۵:۲۸", status: false },
    ]
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 8;
    const currentItems = data.slice(itemOffset, endOffset);
    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <SearchSection />
            <Table sectionHeader={headerTable} style="border-t mt-3 pt-5">
                <PaginateHolderItems style="justify-center h-[590px]">
                    <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 8, setItemOffset, data) }} pageCount={calculatePageCount(data, 8)}>
                        <div className='itemsTable_userPanel_holder'>
                            {currentItems.map((item, index) => <TableItem key={index} object={item} variant="myViews" />)}
                        </div>
                    </PaginatedItems>
                </PaginateHolderItems>
            </Table>
        </div>
    )
}

export default MyViews
