import { SearchSection, Table, TableItem } from '../../components/pages/user-panel'
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount } from '../../components/common'
import { useState } from 'react'

const MyCourses = () => {
    const headerTable = [
        { text: ["نام دوره", "Course Name"] },
        { text: ["مدرس دوره", "Teacher"] },
        { text: ["تاریخ شروع", "Date"] },
        { text: ["قیمت", "Price"] },
    ]
    const data = [
        { id: 1, profile: "", courseName: "آموزش Tailwind css", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 2, profile: "", courseName: "آموزش کامل کار با Figma", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 3, profile: "", courseName: "آموزش NextJs", teacher: "محمد رضا ساداتی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۲,۵۰۰,۰۰۰" },
        { id: 4, profile: "", courseName: "آموزش Tailwind css", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 5, profile: "", courseName: "آموزش کامل کار با Figma", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 6, profile: "", courseName: "آموزش NextJs", teacher: "محمد رضا ساداتی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۲,۵۰۰,۰۰۰" },
        { id: 7, profile: "", courseName: "آموزش Tailwind css", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 8, profile: "", courseName: "آموزش کامل کار با Figma", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 9, profile: "", courseName: "آموزش NextJs", teacher: "محمد رضا ساداتی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۲,۵۰۰,۰۰۰" },
        { id: 10, profile: "", courseName: "آموزش Tailwind css", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 11, profile: "", courseName: "آموزش کامل کار با Figma", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 12, profile: "", courseName: "آموزش NextJs", teacher: "محمد رضا ساداتی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۲,۵۰۰,۰۰۰" },
        { id: 13, profile: "", courseName: "آموزش Tailwind css", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
        { id: 14, profile: "", courseName: "آموزش کامل کار با Figma", teacher: "دکتر محمدحسین بحر العلومی", date: "۱۴۰۴ / ۰۳ / ۱۸", price: "۵۰۰,۰۰۰" },
    ]
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 8;
    const currentItems = data.slice(itemOffset, endOffset);

    return (
        <div className='w-full flex flex-wrap h-fit -mt-8'>
            <SearchSection />
            <PaginateHolderItems style="justify-center">
                <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 8, setItemOffset, data) }} pageCount={calculatePageCount(data, 8)}>
                    <div className='overflow-x-auto h-[590px]'>
                        <Table sectionHeader={headerTable} style="border-t mt-3 pt-5">
                            {currentItems.map((item, index) => <TableItem key={index} object={item} variant="myCourses" />)}
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default MyCourses
