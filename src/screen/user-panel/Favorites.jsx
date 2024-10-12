import { SearchSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount, RenderItemsList } from "../../components/common"
import { useQuery } from "@tanstack/react-query"
import { GetMyFavoriteBlogs, GetMyFavoriteCourses } from "../../core/services/api/GetData"
import { setQuery, setSortingCol } from "../../redux/slices/userPanel-filter-slices/MyFavorite"
import { useSelector } from "react-redux"
import { blogKey, courseKey, headerTableBlogs, headerTableCourses } from "../../core/constants/user-panel/HeaderTable"

const Favorites = () => {
    const sortState = useSelector(state => state.MyFavorite);

    const skeletonData = [{}, {}, {}, {}, {}, {}]


    const { data: myCoursesData, isLoading: courseLoading, isSuccess: courseSuccess, isError: courseError, refetch: courseRefetch } = useQuery({
        queryKey: ["GET_MY_COURSES"],
        queryFn: async () => {
            return GetMyFavoriteCourses();
        }
    })

    const { data: myBlogData, isLoading: blogLoading, isSuccess: blogSuccess, isError: blogError, refetch: blogRefetch } = useQuery({
        queryKey: ["GET_MY_BLOGS"],
        queryFn: async () => {
            return GetMyFavoriteBlogs();
        }
    })


    // handle search filter for myFavorite Items
    const myFavoriteData = sortState.sortingCol === 'courses' ? myCoursesData?.favoriteCourseDto
        : myBlogData?.myFavoriteNews;
    const title = sortState.sortingCol === 'courses' ? courseKey[0] : blogKey[0];
    const filteredData = myFavoriteData?.filter(item => item?.[title].indexOf(sortState.Query) != -1);


    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <SearchSection setState={setSortingCol} setQuery={setQuery} />
            <PaginateHolderItems style="justify-center h-[666px] border-t-2 border-gray-100 mt-4 pt-2">
                <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 8, setItemOffset, myFavoriteData) }} pageCount={calculatePageCount(myFavoriteData, 8)}>
                    <div className="overflow-x-auto h-[666px] w-full lg:overflow-x-hidden">
                        <Table sectionHeader={sortState.sortingCol === 'courses' ? headerTableCourses : headerTableBlogs}>
                            <RenderItemsList
                                RenderComponent={TableItem}
                                isLoading={sortState.sortingCol === 'courses' ? courseLoading : blogLoading}
                                isSuccess={sortState.sortingCol === 'courses' ? courseSuccess : blogSuccess}
                                isError={sortState.sortingCol === 'courses' ? courseError : blogError}
                                originalData={sortState.Query !== undefined ? filteredData : myFavoriteData}
                                skeletonData={skeletonData}
                                notFoundText={sortState.sortingCol === 'courses' ? 'course_NotFound' : 'blog_NotFound'}
                                refetchData={sortState.sortingCol === 'courses' ? courseRefetch : blogRefetch}
                                variant={'favorites'}
                                keyVariant={sortState.sortingCol === 'courses' ? courseKey : blogKey}
                                navigateToPage={sortState.sortingCol === 'courses' ? '/CourseDetails/' : '/BlogDetails/'}
                                paramsId={sortState.sortingCol === 'courses' ? 'courseId' : 'newsId'}
                            />
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default Favorites
