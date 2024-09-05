import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';
import Event from '../pages/event/Event';
import { useLocation } from 'react-router-dom';
import Course from '../pages/course/Course';
import { useMediaQuery } from 'react-responsive';

function Items({ currentItems }) {
  const [comparisonId, setComparisonId] = useState([])

    const location = useLocation();
    return (
        <>
            {currentItems &&
                currentItems.map((item, index) => (
                    location.pathname === '/Events' || location.pathname === '/events' ?
                        <Event
                            key={index}
                            id={item.id}
                            title={item.title}
                            date={item.date}
                            location={item.city}
                            images={item.img}
                        />
                        : location.pathname == '/Courses' || location.pathname == '/courses' ?
                            <Course
                                key={index}
                                id={item.id}
                                title={item.title}
                                images={item.img}
                                instructor={item.instructor}
                                score={item.score}
                                category={item.category}
                                level={item.level}
                                price={item.price}
                                date={item.date}
                                studentsNumber={item.students}
                                like={item.like}
                                disLike={item.disLike}
                                bio={item.bio}
                                comparisonId={comparisonId}
                                setComparisonId={setComparisonId}
                            /> : ""
                ))}
        </>
    );
}

export function PaginatedItems({ showGrid, itemsPerPage, Data }) {
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })

    const { i18n } = useTranslation();
    const [itemOffset, setItemOffset] = useState(0);
    // Simulate fetching items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Data.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Data.length;
        setItemOffset(newOffset);

    };
    return (
        <>
            <div dir={i18n.language === "fa" ? 'rtl' : 'ltr'} className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}> <Items currentItems={currentItems} /></div>
            <ReactPaginate className="flex flex-wrap  gap-3 justify-center items-center sm:my-16 my-6 "
                breakLabel="..."
                onPageChange={handlePageClick}
                nextLabel=""
                previousLabel=""
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                activeClassName='!bg-purpleCustom text-white'
                pageClassName="bg-slate-300  sm:!w-12 !w-10 sm:!py-2.5 !py-1.5 rounded-full text-center text-lg"
            />
        </>
    );
}
