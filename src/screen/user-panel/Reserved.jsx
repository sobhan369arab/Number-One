import { SearchSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, RenderItemsList } from "../../components/common"
import { useMutation, useQuery } from "@tanstack/react-query"
import GetMyCoursesReserve from "../../core/services/api/GetData/GetMyCoursesReserve"
import DeleteReserveCourse from "../../core/services/api/DeleteData/DeleteReserveCourse"

const Reserved = () => {
    const headerTable = [
        { text: ["نام دوره", "Course Name"] },
        { text: ["تاریخ شروع", "Date"] },
        { text: ["وضعیت", "Status"] },
    ]
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]

    const { data, isLoading, isError, isSuccess, refetch } = useQuery({
        queryKey: ['MY_RESERVED_LIST',],
        queryFn: GetMyCoursesReserve
    })

    const { mutate } = useMutation({
        mutationKey: ['DELETE_RESERVED_COURSE'],
        mutationFn: (id) => { return DeleteReserveCourse(id) },
        onSuccess: () => { refetch() }
    })

    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <SearchSection />
            <PaginateHolderItems style="justify-center">
                <PaginatedItems currentData={isSuccess && data.length} currentDataInOnePage={8} setPage={1} >
                    <div className='overflow-x-auto lg:overflow-x-hidden w-full h-[590px]'>
                        <Table sectionHeader={headerTable} style="border-t border-LightGrayish mt-3 pt-5">
                            <RenderItemsList
                                RenderComponent={TableItem}
                                isLoading={isLoading}
                                isSuccess={isSuccess}
                                isError={isError}
                                originalData={isSuccess && data}
                                skeletonData={skeletonData}
                                variant="reserved"
                                action={mutate}
                            />
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default Reserved
