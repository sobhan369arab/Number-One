import { SearchSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount, RenderItemsList } from "../../components/common"
import { useMutation, useQuery } from "@tanstack/react-query"
import { GetMyFavoriteBlogs, GetMyFavoriteCourses } from "../../core/services/api/GetData"
import { setQuery, setSortingCol } from "../../redux/slices/userPanel-filter-slices/MyFavorite"
import { useSelector } from "react-redux"
import { blogKey, courseKey, headerTableBlogs, headerTableCourses } from "../../core/constants/user-panel/HeaderTable"
import { DeleteBlogFavorite, DeleteCourseFavorite } from "../../core/services/api/DeleteData"

const Favorites = () => {

    const FavoriteState = useSelector(state => state.MyFavorite);

    const skeletonData = [{}, {}, {}, {}, {}, {}]

    // Get Data with useQuery
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
    // Get Data with useMutation
    const { mutate: courseMutate } = useMutation({
        mutationKey: ['DELETE_COURSE_FAVORITE'],
        mutationFn: (id) => { return DeleteCourseFavorite(id) },
        onSuccess: courseRefetch()
    })
    const { mutate: blogMutate } = useMutation({
        mutationKey: ['DELETE_BLOG_FAVORITE'],
        mutationFn: (id) => { return DeleteBlogFavorite(id) },
        onSuccess: blogRefetch()
    })

    // handle search filter for myFavorite Items
    const myFavoriteData = FavoriteState.sortingCol === 'courses' ? myCoursesData?.favoriteCourseDto
        : myBlogData?.myFavoriteNews;
    const title = FavoriteState.sortingCol === 'courses' ? courseKey[0] : blogKey[0];
    const filteredData = myFavoriteData?.filter(item => item?.[title].indexOf(FavoriteState.Query) != -1);


    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <SearchSection setState={setSortingCol} setQuery={setQuery} />
            <PaginateHolderItems style="justify-center h-[666px] border-t-2 border-gray-100 mt-4 pt-2">
                <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 8, setItemOffset, myFavoriteData) }} pageCount={calculatePageCount(myFavoriteData, 8)}>
                    <div className="overflow-x-auto h-[666px] w-full lg:overflow-x-hidden">
                        <Table sectionHeader={FavoriteState.sortingCol === 'courses' ? headerTableCourses : headerTableBlogs}>
                            <RenderItemsList
                                RenderComponent={TableItem}
                                isLoading={FavoriteState.sortingCol === 'courses' ? courseLoading : blogLoading}
                                isSuccess={FavoriteState.sortingCol === 'courses' ? courseSuccess : blogSuccess}
                                isError={FavoriteState.sortingCol === 'courses' ? courseError : blogError}
                                originalData={FavoriteState.Query !== undefined ? filteredData : myFavoriteData}
                                skeletonData={skeletonData}
                                notFoundText={FavoriteState.sortingCol === 'courses' ? 'course_NotFound' : 'blog_NotFound'}
                                refetchData={FavoriteState.sortingCol === 'courses' ? courseRefetch : blogRefetch}
                                variant={'favorites'}
                                action={FavoriteState.sortingCol === 'courses' ? courseMutate : blogMutate}
                                keyVariant={FavoriteState.sortingCol === 'courses' ? courseKey : blogKey}
                                navigateToPage={FavoriteState.sortingCol === 'courses' ? '/CourseDetails/' : '/BlogDetails/'}
                                paramsId={FavoriteState.sortingCol === 'courses' ? 'courseId' : 'newsId'}
                            />
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default Favorites
