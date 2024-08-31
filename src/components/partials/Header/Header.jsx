import { baskets, menuItem } from "../../../core/constants/Header/headerData"
import MenuHeader from "./MenuHeader"
import SearchInput from "./SearchInput"
import { useTranslation } from "react-i18next"
import { LogoGroup } from "../../common"
import { MenuIcon } from "../../../core/icon"
import MediaQuery from "react-responsive"
import BasketItems from "./BasketItems"

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex gap-x-10 items-center justify-between min-[1360px]:px-20 sm:px-10 px-3 py-4 relative">
      {/* Right Part */}
      <div className="flex gap-x-4 items-center">
        <LogoGroup color={'text-purpleCustom'} />
        <MediaQuery maxWidth={"1024px"}>
          <MenuIcon height="35px" width="35px" />
        </MediaQuery>
        {/* Making any of the Menu Items */}
        <MediaQuery minWidth={"1024px"}>
          <ul className="flex gap-x-4">
            {menuItem.map((item, index) => <MenuHeader key={index} href={item.href} title={item.title} />)}
          </ul>
        </MediaQuery>
      </div>
      {/* Left Part */}
      <div className="h-[42px] flex gap-x-3 justify-end items-center">
        <SearchInput />
        {/* Making any of the Basket Items */}
        <MediaQuery minWidth={"500px"}>
          {baskets.map((item, index) => <BasketItems key={index} Icon={item.icon} number={item.number} />)}
        </MediaQuery>
        {/* Login Button */}
        <button className="bg-yellowCustom border-yellowCustom text-sm border rounded-full text-nowrap py-2 px-4">{t('Login')}</button>
      </div>
    </div>
  )
}

export default Header