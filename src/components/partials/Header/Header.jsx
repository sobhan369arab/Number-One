import { menuItem } from "../../../core/constants/Header/headerData"
import MenuHeader from "./menuHeader"
import { useTranslation } from "react-i18next"
import { HamburgerMenu, LogoGroup, SearchInput } from "../../common"
import { CartIcon, FavoriteIcon } from "../../../core/icon"
import MediaQuery from "react-responsive"
import BasketItems from "./basketItems"
import { useSelector, useDispatch } from "react-redux"
import { Navbar } from "@nextui-org/react";
import SideBarMenu from "./SideBarMenu"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import GetProfileInfo from "../../../core/services/api/GetData/GetProfileInfo"
import { setInfoAction } from "../../../redux/slices/UserInfo"
import { getItem } from "../../../core/services/local-storage/LocalStorage"
import HeaderButtons from "./HeaderButtons"
import { GetMyFavoriteCourses } from "../../../core/services/api/GetData"
import { useQuery } from "@tanstack/react-query"
import GetMyCoursesReserve from "../../../core/services/api/GetData/GetMyCoursesReserve"

const Header = () => {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const { i18n } = useTranslation();
  // const cartLength = useSelector(state => state.CartData.value.length)
  const userInfo = useSelector(state => state.UserInfo.info)
  const dispatch = useDispatch()
  const location = useLocation()

  // basket and favoriteBox number
  const { data: myFavoriteData } = useQuery({ queryKey: ["GET_MY_COURSES"], queryFn: GetMyFavoriteCourses })
  const { data: myCourseReserve } = useQuery({ queryKey: ['MY_RESERVED_LIST'], queryFn: GetMyCoursesReserve })
  const baskets = [
    { icon: CartIcon, number: myCourseReserve?.length, href: "/cart", tooltip: ["سبد خرید", "Cart"] },
    { icon: FavoriteIcon, number: myFavoriteData?.favoriteCourseDto.length, href: userInfo !== false && "/userPanel/favorites", tooltip: ["لیست علاقه مندی", "Favorite List"] },
  ];

  const menuItems = menuItem.map((item, index) => {
    return (
      <MenuHeader
        key={index}
        href={item.href}
        title={item.title} />
    )
  });

  const basketItems = baskets.map((item, index) => <BasketItems key={index} item={item} />);

  const getUserProfile = async () => {
    const info = await GetProfileInfo()
    dispatch(setInfoAction(info))
  }

  useEffect(() => {
    const token = getItem("token")
    if (!token) return
    getUserProfile()
  }, [location])

  return (
    <Navbar
      shouldHideOnScroll={visibleMenu || visibleSearch ? false : true}
      className="flex gap-x-10 items-center justify-between min-[1360px]:px-20 sm:px-10 px-3 py-3"
      maxWidth="full"
    >
      <div className="w-fit flex gap-x-6 items-center">
        <LogoGroup color={'text-VioletBlue'} />
        <MediaQuery minWidth={"1024px"}>
          <div className="w-fit flex gap-x-6 items-center">
            {menuItems}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={"1024px"}>
          <HamburgerMenu setVisible={setVisibleMenu} visible={visibleMenu} style={'bg-VioletBlue dark:bg-LightLavender z-50 p-8'}>
            <SideBarMenu basketItems={basketItems} menuItems={menuItems} />
          </HamburgerMenu >
        </MediaQuery>
      </div>
      <div className="w-fit h-[42px] flex gap-x-3 justify-end items-center ">
        <MediaQuery minWidth={"1285px"}>
          <SearchInput />
        </MediaQuery>
        <HeaderButtons
          setVisibleSearch={setVisibleSearch}
          visibleSearch={visibleSearch}
          basketItems={basketItems}
        />
      </div>
    </Navbar>
  )
}

export default Header