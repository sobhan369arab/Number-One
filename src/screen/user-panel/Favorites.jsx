import { SearchSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount, RenderItemsList } from "../../components/common"
import { useMutation, useQuery } from "@tanstack/react-query"
import { GetMyFavoriteBlogs, GetMyFavoriteCourses } from "../../core/services/api/GetData"
import { setQuery, setSortingCol } from "../../redux/slices/userPanel-filter-slices/MyFavorite"
import { useSelector } from "react-redux"
import { blogKey, courseKey, headerTableBlogs, headerTableCourses } from "../../core/constants/user-panel/HeaderTable"
import { DeleteBlogFavorite, DeleteCourseFavorite } from "../../core/services/api/DeleteData"
import { sortOptionChooseList } from "../../core/constants/sorts/Sort"
import { useEffect, useState } from "react"

const Favorites = () => {

    const FavoriteState = useSelector(state => state.MyFavorite);
    const [count, setCount] = useState(0)
    const skeletonData = [{}, {}, {}, {}, {}, {}]
    
    // Pagination
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 8;

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
    // Delete Data with useMutation
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
    const myFavoriteData = FavoriteState.sortingCol === 'course' ? myCoursesData?.favoriteCourseDto.slice(itemOffset, endOffset)
        : myBlogData?.myFavoriteNews.slice(itemOffset, endOffset);
    const title = FavoriteState.sortingCol === 'course' ? courseKey[0] : blogKey[0];
    const filteredData = myFavoriteData?.filter(item => item?.[title].indexOf(FavoriteState.Query) != -1).slice(itemOffset, endOffset);

    const favoriteCoursesStatus = FavoriteState.sortingCol === 'course';
    // params Object
    const params = {
        RenderComponent: TableItem,
        skeletonData: skeletonData,
        notFoundText: favoriteCoursesStatus ? 'course_NotFound' : 'blog_NotFound',
        refetchData: favoriteCoursesStatus ? courseRefetch : blogRefetch,
        variant: 'favorites',
        action: favoriteCoursesStatus ? courseMutate : blogMutate,
        keyVariant: favoriteCoursesStatus ? courseKey : blogKey,
        navigateToPage: favoriteCoursesStatus ? '/CourseDetails/' : '/BlogDetails/',
        id: favoriteCoursesStatus ? 'courseId' : 'newsId'
    }

    useEffect(() => {
        if (favoriteCoursesStatus && courseSuccess) {
            setCount(myCoursesData.totalCount)
        } else if (!favoriteCoursesStatus && blogSuccess) {
            setCount(myBlogData.totalCount)
        }
    }, [favoriteCoursesStatus, courseSuccess, blogSuccess])

    return (
        <div className="w-full flex flex-wrap h-fit -mt-8">
            <SearchSection sortItem={sortOptionChooseList} defaultKey={1} setState={setSortingCol} query={setQuery} />
            <PaginateHolderItems style="justify-center h-[685px] border-t-2 border-gray-100 mt-3 pt-4">
                <PaginatedItems currentData={count} currentDataInOnePage={8} setState={setItemOffset} >
                    <div className="overflow-x-auto w-full lg:overflow-x-hidden">
                        <Table sectionHeader={favoriteCoursesStatus ? headerTableCourses : headerTableBlogs} itemsWidth="23">
                            <RenderItemsList
                                isLoading={favoriteCoursesStatus ? courseLoading : blogLoading}
                                isSuccess={FavoriteState.sortingCol === 'course' ? courseSuccess : blogSuccess}
                                isError={favoriteCoursesStatus ? courseError : blogError}
                                originalData={FavoriteState.Query !== undefined ? filteredData : myFavoriteData}
                                {...params}
                            />
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default Favorites
