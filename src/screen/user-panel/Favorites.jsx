import { SearchSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount, RenderItemsList } from "../../components/common"
import { useQuery } from "@tanstack/react-query"
import { GetMyFavoriteBlogs, GetMyFavoriteCourses } from "../../core/services/api/GetData"
import { useState } from "react"

const Favorites = () => {

    const [sortingCol, setSortingCol] = useState('courses')

    console.log(sortingCol)
    const skeletonData = [{}, {}, {}, {}, {}, {}]

    const headerTable = [
        { text: ["عنوان", "Title"] },
        { text: ["دسته بندی", "Category"] },
        { text: ["زمان انتشار", "Date"] },
        { text: ["نویسنده", "Author"] },
    ]

    const { data: myCoursesData, isLoading: courseLoading, isSuccess: courseSuccess, isError: courseError, refetch: courseRefetch } = useQuery({
        queryKey: ["GET_MY_COURSES"],
        queryFn: async () => {
            return GetMyFavoriteCourses();
        }
    })
    console.log(myCoursesData?.favoriteCourseDto)

    const { data: myBlogData, isLoading: blogLoading, isSuccess: blogSuccess, isError: blogError, refetch: blogRefetch } = useQuery({
        queryKey: ["GET_MY_BLOGS"],
        queryFn: async () => {
            return GetMyFavoriteBlogs();
        }
    })

    // Item object keys
    const courseKey = ['courseTitle', 'typeName', 'lastUpdate', 'teacheName']
    const blogKey = ['title', 'currentLikeCount', 'updateDate', 'currentView']

    const data = [
        { id: 1, courseName: "آموزش Tailwind css", category: "دوره آموزشی", date: "۱۴۰۴/۰۳/۰۲ , ۱۶:۲۷", author: "دکتر محمدحسین بحر العلومی" },
        { id: 2, courseName: "آموزش کامل کار با Figma", category: "اخبار و مقالات", date: "۱۴۰۴/۰۲/۰۸ , ۱۵:۲۸", author: "محمد رضا ساداتی" },
        { id: 3, courseName: "آموزش NextJs", category: "دوره آموزشی", date: "۱۴۰۴/۰۲/۰۸ , ۱۵:۲۸", author: "دکتر محمدحسین بحر العلومی" },
    ]
    // const [itemOffset, setItemOffset] = useState(0);
    // const endOffset = itemOffset + 8;
    // const currentItems = data.slice(itemOffset, endOffset);
    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <SearchSection setState={setSortingCol} />
            <PaginateHolderItems style="justify-center h-[666px] border-t-2 border-gray-100 mt-4 pt-2">
                <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 8, setItemOffset, data) }} pageCount={calculatePageCount(data, 8)}>
                    <div className="overflow-x-auto h-[666px] lg:overflow-x-hidden">
                        <Table sectionHeader={headerTable}>
                            <RenderItemsList
                                RenderComponent={TableItem}
                                isLoading={sortingCol === 'courses' ? courseLoading : blogLoading}
                                isSuccess={sortingCol === 'courses' ? courseSuccess : blogSuccess}
                                isError={sortingCol === 'courses' ? courseError : blogError}
                                originalData={sortingCol === 'courses' ? courseSuccess && myCoursesData?.favoriteCourseDto
                                    : blogSuccess && myBlogData?.myFavoriteNews
                                }
                                skeletonData={skeletonData}
                                notFoundText={sortingCol === 'courses' ? 'course_NotFound' : 'blog_NotFound'}
                                refetchData={sortingCol === 'courses' ? courseRefetch : blogRefetch}
                                variant={'favorites'}
                                keyVariant={sortingCol === 'courses' ? courseKey : blogKey}
                            />
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default Favorites
