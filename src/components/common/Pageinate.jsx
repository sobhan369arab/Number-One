import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';
import { Event } from '../pages/Event';

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item, index) => (
                    <Event
                        key={index}
                        id={item.id}
                        title={item.title}
                        date={item.date}
                        location={item.city}
                        images={item.img}
                    />
                ))}
        </>
    );
}

export function PaginatedItems({ itemsPerPage, Data }) {
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
            <div dir={i18n.language === "fa" ? 'rtl' : 'ltr'} className='flex flex-wrap gap-x-2 justify-around gap-y-8 w-full'> <Items currentItems={currentItems} /></div>
            <ReactPaginate className="flex flex-wrap  gap-3 justify-center items-center SM:my-10 my-6 "
                breakLabel="..."
                onPageChange={handlePageClick}
                nextLabel=""
                previousLabel=""
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                activeClassName='!bg-Purple text-white'
                pageClassName="bg-slate-300  sm:!w-12 !w-10 sm:!py-2.5 !py-1.5 rounded-full text-center text-lg"
            />
        </>
    );
}
