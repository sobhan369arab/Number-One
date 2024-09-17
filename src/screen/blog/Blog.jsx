import { useEffect, useState } from "react";
import { BlogCard, FilterSide_Blogs } from "../../components/pages/blog"
import TitleSection from "../../components/partials/title-section/TitleSection"
import MediaQuery, { useMediaQuery } from "react-responsive";
import { Button, useDisclosure } from "@nextui-org/react";
import { calculatePageCount, CreateModal, handlePageClick, PaginatedItems, PaginateHolderItems, SectionTop, SortBox } from "../../components/common";
import { CloseIcon } from "../../core/icon";
import { useTranslation } from "react-i18next";
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa";
import { Blogs_data } from "../../core/constants/blogs/blogs-data";

const Blog = () => {
  const { t } = useTranslation();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })

  const [FilteredData, SetFilteredData] = useState([]);
  const [Query, setQuery] = useState(undefined);
  const [categoryData, SetCategoryData] = useState(null);
  const [sortType, setSortType] = useState("Rate");
  const [showGrid, setShowGrid] = useState(false);


  useEffect(() => {
    if (FilteredData.length === 0) {
      SetFilteredData(Blogs_data);
    }

  }, [FilteredData])



  const filterObj_Blogs = {
    SortType: sortType,
    Query: Query,
    ListCategory: categoryData,
  };
  console.log(filterObj_Blogs)

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Paginate
  const currentBlog = isTabletOrMobile ? 6 : 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + currentBlog;
  const currentItems = FilteredData.slice(itemOffset, endOffset);

  return (
    <>
      <TitleSection title={'BlogSection'} />
      <div className="main-container flex gap-7 relative">
        <MediaQuery minWidth={"1024px"}>
          <FilterSide_Blogs setQuery={setQuery} SetCategoryData={SetCategoryData} />
        </MediaQuery>
        <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
          <MediaQuery maxWidth={"1023px"}>
            <Button onPress={onOpen} className="sticky top-3 z-50">{t('openFilter')}</Button>
            <CreateModal isOpen={isOpen} onClose={onClose} header={t('filters')} size="xl" headerStyle="flex flex-col gap-1 text-white">
              <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
                <CloseIcon />
              </div>
              <FilterSide_Blogs setQuery={setQuery} SetCategoryData={SetCategoryData} />
            </CreateModal>
          </MediaQuery>
          <SectionTop
            AllData={CoursesDataFa}
            FilteredData={FilteredData}
            setShowGrid={setShowGrid}
          >
            <SortBox setSortType={setSortType} label={"blog"} />
          </SectionTop>
          <PaginateHolderItems style="justify-center">
            <PaginatedItems handlePageClick={(event) => { handlePageClick(event, currentBlog, setItemOffset, FilteredData) }} pageCount={calculatePageCount(FilteredData, currentBlog)}>
              <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}>
                {currentItems.map((item, index) => (
                  <BlogCard
                    key={index}
                    id={item.id}
                    title={item.title}
                    images={item.img}
                    category={item.category}
                    date={item.date}
                    like={item.like}
                    disLike={item.disLike}
                    view={item.view}
                    bio={item.bio}
                  />
                ))}
              </div>
            </PaginatedItems>
          </PaginateHolderItems>
        </div>
      </div>
    </>
  )
}

export default Blog