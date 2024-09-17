import { useEffect, useState } from "react"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { ShopCard, FilterSide_Shop } from "../../components/pages/shop";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { Button, useDisclosure } from "@nextui-org/react";
import { calculatePageCount, CreateModal, handlePageClick, PaginatedItems, PaginateHolderItems, SectionTop } from "../../components/common"
import { useTranslation } from "react-i18next";
import { CloseIcon } from "../../core/icon";
import { shopData } from "../../core/constants/shop/ShopData"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb";

const Shop = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })

  const { t } = useTranslation()

  const [FilteredData, SetFilteredData] = useState([]);
  const [Query, setQuery] = useState(undefined)
  const [priceDown, setPriceDown] = useState(0);
  const [priceUp, setPriceUp] = useState(1000000);
  const [rating, SetRating] = useState(0);
  const [categoryData, SetCategoryData] = useState(null);
  const [sortType, setSortType] = useState("Rate");
  const [handleExist, setHandleExist] = useState(undefined)
  const [exist, setExist] = useState(false);

  useEffect(() => {
    if (!handleExist) return
    if (handleExist === 1) setExist(false)
    if (handleExist === 2) setExist(true)
  }, [handleExist])

  const filterObj_shop = {
    Query: Query,
    courseRating: rating,
    CostDown: priceDown,
    CostUp: priceUp,
    ListCategory: categoryData,
    SortType: sortType,
    ItemExist: exist,
  }

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Paginate
  const currentShop = isTabletOrMobile ? 6 : 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + currentShop;
  const currentItems = FilteredData.slice(itemOffset, endOffset);

  useEffect(() => {
    if (FilteredData.length === 0) {
      SetFilteredData(shopData);
    }

  }, [shopData])

  return (
    <>
      <TitleSection title={'ShopSection'}>
        <BreadCrumb type="Div" text="ShopSection"/>
      </TitleSection>
      <div className="main-container flex gap-7 relative">
        <MediaQuery minWidth="1024px">
          <FilterSide_Shop
            setQuery={setQuery}
            setCategoryData={SetCategoryData}
            setRating={SetRating}
            setPriceDown={setPriceDown}
            setPriceUp={setPriceUp}
            exist={handleExist}
            setExist={setHandleExist}
          />
        </MediaQuery>
        <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
          <MediaQuery maxWidth={"1023px"}>
            <Button onPress={onOpen} className="sticky top-3 z-50">{t('openFilter')}</Button>
            <CreateModal isOpen={isOpen} onClose={onClose} header={t('filters')} size="xl" headerStyle="flex flex-col gap-1 text-white">
              <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
                <CloseIcon />
              </div>
              <FilterSide_Shop
                setQuery={setQuery}
                setCategoryData={SetCategoryData}
                setRating={SetRating}
                setPriceDown={setPriceDown}
                setPriceUp={setPriceUp}
                exist={handleExist}
                setExist={setHandleExist}
              />
            </CreateModal>
          </MediaQuery>
          <SectionTop
            label={"shop"}
            AllData={shopData}
            FilteredData={FilteredData}
            setSortType={setSortType}
            showViewBtn={false}
          />
          <PaginateHolderItems style="justify-center">
            <PaginatedItems handlePageClick={(event) => { handlePageClick(event, currentShop, setItemOffset, FilteredData) }} pageCount={calculatePageCount(FilteredData, currentShop)}>
              <div className="flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2">
                {currentItems.map((item, index) => (
                  <ShopCard item={item} key={index} />
                ))}
              </div>
            </PaginatedItems>
          </PaginateHolderItems>
        </div>
      </div>
    </>
  )
}

export default Shop
