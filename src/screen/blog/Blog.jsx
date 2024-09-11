import { useState } from "react";
import { FilterSide_Blogs } from "../../components/pages/blog"
import TitleSection from "../../components/partials/title-section/TitleSection"
import MediaQuery from "react-responsive";
import { Button, useDisclosure } from "@nextui-org/react";
import { CreateModal, SectionTop } from "../../components/common";
import { CloseIcon } from "../../core/icon";
import { useTranslation } from "react-i18next";
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa";

const Blog = () => {
  const { t } = useTranslation();
  const [FilteredData, SetFilteredData] = useState([]);
  const [Query, setQuery] = useState(undefined);
  const [categoryData, SetCategoryData] = useState(null);
  const [sortType, setSortType] = useState("Rate");
  const [showGrid, setShowGrid] = useState(false);


  const filterObj_Blogs = {
    SortType: sortType,
    Query: Query,
    ListCategory: categoryData,
  };
  console.log(filterObj_Blogs)

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            label={"blog"}
            AllData={CoursesDataFa}
            FilteredData={FilteredData}
            setSortType={setSortType}
            setShowGrid={setShowGrid}
          />
        </div>
      </div>
    </>
  )
}

export default Blog