import { menuItem } from "../../../core/constants/Header/headerData"
import MenuHeader from "./menuHeader"
import { useTranslation } from "react-i18next"
import { Button, HamburgerMenu, LogoGroup, SearchInput } from "../../common"
import { CartIcon, FavoriteIcon } from "../../../core/icon"
import MediaQuery from "react-responsive"
import BasketItems from "./basketItems"
import { useSelector } from "react-redux"
import { Navbar } from "@nextui-org/react";
import SideBarMenu from "./SideBarMenu"

const Header = () => {
  const { t } = useTranslation();
  const cartLength = useSelector(state => state.CartData.value.length)

  const baskets = [
    { icon: CartIcon, number: cartLength, href: "/cart" },
    { icon: FavoriteIcon, number: 0, href: "" },
  ];

  const menuItems = menuItem.map((item, index) => {
    return (
      <MenuHeader
        key={index}
        href={item.href}
        title={item.title} />
    )
  });

  const basketItems = baskets.map((item, index) => {
    return (
      <div>
        <BasketItems key={index} href={item.href} Icon={item.icon} number={item.number} />
      </div>
    )
  });

  return (
    <Navbar
      shouldHideOnScroll
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
          <HamburgerMenu width={308} style={'bg-VioletBlue dark:bg-LightLavender p-8'}>
            <SideBarMenu basketItems={basketItems} menuItems={menuItems} />
          </HamburgerMenu >
        </MediaQuery>
      </div>
      <div className="w-fit h-[42px] flex gap-x-3 justify-end items-center ">
        <div>
          <SearchInput maxResponsiveValue="1285px" minResponsiveValue="1285px" />
        </div>
        <MediaQuery minWidth={"768px"}>
          {basketItems}
        </MediaQuery>
        <Button href={"/authorize/login"} disableArrow={'hidden'} vType={'link'} vStyle={"yellow"} style={'shadow-none !pt-2 !pb-2'} text={'Login'} />
      </div>
    </Navbar>
  )
}

export default Header