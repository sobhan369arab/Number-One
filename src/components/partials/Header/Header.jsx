import { menuItem } from "../../../core/constants/Header/headerData"
import MenuHeader from "./menuHeader"
import { useTranslation } from "react-i18next"
import { LogoGroup, SearchInput } from "../../common"
import { MenuIcon, CartIcon, FavoriteIcon } from "../../../core/icon"
import MediaQuery from "react-responsive"
import BasketItems from "./basketItems"
import { useSelector } from "react-redux"

const Header = () => {
  const { t } = useTranslation();
  const cartLength = useSelector(state => state.CartData.value.length)

  const baskets = [
    { icon: CartIcon, number: cartLength, href: "/cart" },
    { icon: FavoriteIcon, number: 0, href: "" },
  ];


  return (
    <div className="flex gap-x-10 items-center justify-between min-[1360px]:px-20 sm:px-10 px-3 py-4 relative">
      {/* Right Part */}
      <div className="flex gap-x-4 items-center">
        <LogoGroup color={'text-VioletBlue'} />
        <MediaQuery maxWidth={"1024px"}>
          <MenuIcon height="35px" width="35px" />
        </MediaQuery>
        {/* Making any of the Menu Items */}
        <MediaQuery minWidth={"1024px"}>
          <ul className="flex gap-x-6 mr-6">
            {menuItem.map((item, index) => <MenuHeader key={index} href={item.href} title={item.title} />)}
          </ul>
        </MediaQuery>
      </div>
      {/* Left Part */}
      <div className="h-[42px] flex gap-x-3 justify-end items-center">
        <SearchInput maxResponsiveValue="1279px" minResponsiveValue="1280px" />
        {/* Making any of the Basket Items */}
        <MediaQuery minWidth={"500px"}>
          {baskets.map((item, index) => <BasketItems key={index} href={item.href} Icon={item.icon} number={item.number} />)}
        </MediaQuery>
        {/* Login Button */}
        <button className="bg-SunshineYellow border-SunshineYellow text-sm border rounded-full text-nowrap py-2 px-4 text-[#161439]">{t('Login')}</button>
      </div>
    </div>
  )
}

export default Header