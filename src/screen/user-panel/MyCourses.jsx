import { SearchSection, Table, TableItem } from '../../components/pages/user-panel'
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount, RenderItemsList } from '../../components/common'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import GetMyCourses from '../../core/services/api/GetData/GetMyCourses'
import { setPageNumber } from '../../redux/slices/userPanel-filter-slices/MyCourses'

const MyCourses = () => {
    const headerTable = [
        { text: ["نام دوره", "Course Name"] },
        { text: ["مدرس دوره", "Teacher"] },
        { text: ["تاریخ شروع", "Date"] },
        { text: ["قیمت", "Price"] },
    ]
    const MyCoursesFilter = useSelector(state => state.MyCourses)
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]

    const { data, isSuccess, isError, isLoading } = useQuery({
        queryKey: ['MY_COURSE_LIST', MyCoursesFilter],
        queryFn: () => { return GetMyCourses(MyCoursesFilter) }
    })

    return (
        <div className='w-full flex flex-wrap h-fit -mt-8'>
            <SearchSection />
            <PaginateHolderItems style="justify-center">
                <PaginatedItems currentData={isSuccess && data.totalCount} currentDataInOnePage={8} setPage={setPageNumber} >
                    <div className='overflow-x-auto lg:overflow-x-hidden h-[590px] w-full'>
                        <Table sectionHeader={headerTable} style="border-t border-LightGrayish mt-3 pt-5">
                            <RenderItemsList
                                RenderComponent={TableItem}
                                isLoading={isLoading}
                                isSuccess={isSuccess}
                                isError={isError}
                                originalData={isSuccess && data.listOfMyCourses}
                                skeletonData={skeletonData}
                                variant="myCourses"
                            />
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default MyCourses
