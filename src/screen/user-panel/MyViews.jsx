import { SearchSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, RenderItemsList } from "../../components/common"
import { useQuery } from "@tanstack/react-query"
import { sortOptionChooseList } from "../../core/constants/sorts/Sort"
import { useEffect, useState } from "react"
import { GetMyBlogViews, GetMyCourseViews } from "../../core/services/api/GetData"

const MyViews = () => {
    const headerTable = [
        { text: ["دیدگاه در", "View in"] },
        { text: ["عنوان دیدگاه", "View Title"] },
        { text: ["وضعیت", "Status"] },
        { text: ["زمان", "Date"] },
    ]

    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]
    const [sortValue, setSortValue] = useState("course")
    const [count, setCount] = useState(0)
    const params = { RenderComponent: TableItem, skeletonData: skeletonData, variant: "myViews" }

    const {
        data: courseViews,
        isSuccess: courseSuccess,
        isLoading: courseLoading,
        isError: courseError
    } = useQuery({
        queryKey: ['GET_MY_COURSE_VIEWS'],
        queryFn: GetMyCourseViews
    })

    const {
        data: blogViews,
        isSuccess: blogSuccess,
        isLoading: blogLoading,
        isError: blogError
    } = useQuery({
        queryKey: ['GET_MY_BLOG_VIEWS'],
        queryFn: GetMyBlogViews
    })

    useEffect(() => {
        if (sortValue == "course" && courseSuccess) {
            setCount(courseViews.totalCount)
        } else if (sortValue == "course" && blogSuccess) {
            setCount(blogViews.totalCount)
        }
    }, [sortValue, courseSuccess, blogSuccess])


    // Pagination
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 8;

    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <SearchSection defaultKey={1} sortItem={sortOptionChooseList} setState={setSortValue} />
            <PaginateHolderItems style="justify-center">
                <PaginatedItems currentData={count} currentDataInOnePage={8} setState={setItemOffset} >
                    <div className='overflow-x-auto lg:overflow-x-hidden h-[590px] w-full'>
                        <Table sectionHeader={headerTable} itemsWidth="23" style="border-t border-LightGrayish mt-3 pt-5">
                            {
                                sortValue == "course" ? (
                                    <RenderItemsList
                                        isError={courseError}
                                        isLoading={courseLoading}
                                        isSuccess={courseSuccess}
                                        originalData={courseSuccess && courseViews.myCommentsDtos.slice(itemOffset, endOffset)}
                                        {...params}
                                    />
                                ) : (
                                    <RenderItemsList
                                        isError={blogError}
                                        isLoading={blogLoading}
                                        isSuccess={blogSuccess}
                                        originalData={blogSuccess && blogViews.myNewsCommetDtos.slice(itemOffset, endOffset)}
                                        {...params}
                                    />
                                )
                            }
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default MyViews
