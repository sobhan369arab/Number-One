import { useEffect, useState } from "react";
import { BlogCard, FilterSide_Blogs, RenderBlogList } from "../../components/pages/blog"
import TitleSection from "../../components/partials/title-section/TitleSection"
import MediaQuery, { useMediaQuery } from "react-responsive";
import { Button, useDisclosure } from "@nextui-org/react";
import { ChangeView, CreateModal, PaginatedItems, PaginateHolderItems, SectionTop, SortBox, SortBoxHolder } from "../../components/common";
import { CloseIcon } from "../../core/icon";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../../components/partials/title-section/BreadCrumb";
import { sortOptionMostType } from "../../core/constants/sorts/Sort";
import { useQuery } from "@tanstack/react-query";
import GetNewsFilterPage from "../../core/services/api/GetData/GetNewsFilter";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber, setSortingCol, setRowsOfPage } from "../../redux/slices/filter-box-slices/FilterBlog";

const Blog = () => {
  const { t } = useTranslation();
  const FilterBlogObj = useSelector(state => state.FilterBlog)
  const dispatch = useDispatch()

  // MediaQueries
  const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })

  // View
  const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const [showGrid, setShowGrid] = useState(false);

  // Pagination
  const currentBlog = isTabletOrMobile ? 6 : 12
  useEffect(() => { dispatch(setRowsOfPage(currentBlog)) }, [currentBlog])

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: blogData, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['GET_BLOGS_LIST', FilterBlogObj],
    queryFn: async () => { return await GetNewsFilterPage(FilterBlogObj) },
  })

  const { data: blogLength, isSuccess: blogLengthFinished } = useQuery({
    queryKey: ['GET_BLOG-LENGTH'],
    queryFn: GetNewsFilterPage,
  })

  return (
    <>
      <TitleSection title={'BlogSection'} >
        <BreadCrumb type="Div" text="BlogSection" />
      </TitleSection>
      <div className="main-container flex gap-7 relative">
        <MediaQuery minWidth={"1024px"}><FilterSide_Blogs /></MediaQuery>
        <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
          <MediaQuery maxWidth={"1023px"}>
            <Button onPress={onOpen} className="sticky top-3 z-30">{t('openFilter')}</Button>
            <CreateModal isOpen={isOpen} onClose={onClose} header={t('filters')} size="xl" headerStyle="flex flex-col gap-1 text-white">
              <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
                <CloseIcon />
              </div>
              <FilterSide_Blogs />
            </CreateModal>
          </MediaQuery>
          <SectionTop
            lengthAllData={blogLengthFinished && blogLength.totalCount}
            lengthFilteredData={isSuccess && blogData.news.length}
            setShowGrid={setShowGrid}
          >
            <SortBoxHolder>
              <SortBox setState={setSortingCol} options={sortOptionMostType} placeholder="محبوب ترین ها" />
            </SortBoxHolder>
            <ChangeView setShowGrid={setShowGrid} />
          </SectionTop>
          <PaginateHolderItems style="justify-center">
            <PaginatedItems setPage={setPageNumber} currentData={isSuccess && blogData.totalCount} currentDataInOnePage={currentBlog}>
              <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}>
                <RenderBlogList
                  RenderComponent={BlogCard}
                  isLoading={isLoading}
                  isSuccess={isSuccess}
                  isError={isError}
                  originalData={isSuccess && blogData.news}
                  skeletonData={skeletonData}
                />
              </div>
            </PaginatedItems>
          </PaginateHolderItems>
        </div>
      </div>
    </>
  )
}

export default Blog
