import ReactPaginate from 'react-paginate';

function PaginatedItems({ handlePageClick, children, pageCount }) {
    return (
        <>
            {children}
            <ReactPaginate
                className="flex flex-wrap gap-3 justify-center items-end sm:my-10 my-6"
                breakLabel="..."
                onPageChange={handlePageClick}
                nextLabel=""
                previousLabel=""
                pageCount={pageCount != undefined ? pageCount : 0}
                renderOnZeroPageCount={null}
                activeLinkClassName='!bg-purpleCustom text-white'
                pageLinkClassName="bg-slate-300 !px-5 !py-2.5 rounded-full bg-red-500 text-center text-lg"
            />
        </>
    );
}

export default PaginatedItems;