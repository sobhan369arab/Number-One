import { menuItem } from "../../../core/constants/Header/headerData"
import MenuHeader from "./menuHeader"
import { useTranslation } from "react-i18next"
import { LogoGroup, SearchInput } from "../../common"
import { MenuIcon, CartIcon, FavoriteIcon } from "../../../core/icon"
import MediaQuery from "react-responsive"
import BasketItems from "./basketItems"
import { useSelector } from "react-redux"
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

const Header = () => {
  const { t } = useTranslation();
  const cartLength = useSelector(state => state.CartData.value.length)

  const baskets = [
    { icon: CartIcon, number: cartLength, href: "/cart" },
    { icon: FavoriteIcon, number: 0, href: "" },
  ];


  return (
    <Navbar
      shouldHideOnScroll
      className="flex gap-x-10 items-center justify-between min-[1360px]:px-20 sm:px-10 px-3 py-3"
      maxWidth="full"
    >
      <div className="w-fit flex gap-x-6 items-center">
        <LogoGroup color={'text-VioletBlue'} />
        <MediaQuery maxWidth={"1024px"} minWidth={"768px"}>
          <MenuIcon height="35px" width="35px" />
        </MediaQuery>
        <MediaQuery minWidth={"1024px"}>
          {menuItem.map((item, index) => (
            <div>
              <MenuHeader key={index} href={item.href} title={item.title} />
            </div>
          ))}
        </MediaQuery>
      </div>
      <div className="w-fit h-[42px] flex gap-x-3 justify-end items-center">
        <div>
          <SearchInput maxResponsiveValue="1285px" minResponsiveValue="1285px" />
        </div>
        <MediaQuery minWidth={"768px"}>
          {baskets.map((item, index) => (
            <div>
              <BasketItems key={index} href={item.href} Icon={item.icon} number={item.number} />
            </div>
          ))}
        </MediaQuery>
        <MediaQuery maxWidth={"767px"}>
          <MenuIcon height="35px" width="35px" />
        </MediaQuery>
        <button className="bg-SunshineYellow max-md:hidden border-SunshineYellow text-sm border rounded-full text-nowrap py-2 px-4 text-[#161439]">{t('Login')}</button>
      </div>
    </Navbar>
  )
}

export default Header