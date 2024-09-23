import { menuItem } from "../../../core/constants/Header/headerData"
import MenuHeader from "./menuHeader"
import { useTranslation } from "react-i18next"
import { LogoGroup, SearchInput } from "../../common"
import { MenuIcon, CartIcon, FavoriteIcon } from "../../../core/icon"
import MediaQuery from "react-responsive"
import BasketItems from "./basketItems"
import { useSelector } from "react-redux"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

const Header = () => {
  const { t } = useTranslation();
  const cartLength = useSelector(state => state.CartData.value.length)

  const baskets = [
    { icon: CartIcon, number: cartLength, href: "/cart" },
    { icon: FavoriteIcon, number: 0, href: "" },
  ];


  return (
    <Navbar
      // style={{ padding: 0 }}
      shouldHideOnScroll
      className="flex gap-x-10 items-center justify-between min-[1360px]:px-20 sm:px-10 px-3 py-3"
      maxWidth="full"
    >
      <NavbarContent className="flex gap-x-6">
        <LogoGroup color={'text-VioletBlue'} />
        <MediaQuery maxWidth={"1024px"}>
          <MenuIcon height="35px" width="35px" />
        </MediaQuery>
        <MediaQuery minWidth={"1024px"}>
          {menuItem.map((item, index) => (
            <NavbarItem>
              <MenuHeader key={index} href={item.href} title={item.title} />
            </NavbarItem>
          ))}
        </MediaQuery>
      </NavbarContent>
      <NavbarContent className="h-[42px] flex gap-x-3 justify-end items-center" justify="end">
        <NavbarItem>
          <SearchInput maxResponsiveValue="1279px" minResponsiveValue="1280px" />
        </NavbarItem>
        <MediaQuery minWidth={"500px"}>
          {baskets.map((item, index) => (
            <NavbarItem>
              <BasketItems key={index} href={item.href} Icon={item.icon} number={item.number} />
            </NavbarItem>
          ))}
        </MediaQuery>
        <NavbarItem>
          <button className="bg-SunshineYellow border-SunshineYellow text-sm border rounded-full text-nowrap py-2 px-4 text-[#161439]">{t('Login')}</button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header