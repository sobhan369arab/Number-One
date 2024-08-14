import BasketItems from "./basketItems"
import { baskets, menuItem } from "../../../../src/core/constants/Header/headerData"
import MenuHeader from "./menuHeader"
import SearchInput from "./searchInput"
import { useTranslation } from "react-i18next"
import { LogoGroup } from "../../common"

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex items-center justify-between min-[1360px]:px-20 sm:px-10 px-3 py-4 relative">
      {/* Right Part */}
      <div className="flex items-center">
        <LogoGroup color={'text-purpleCustom'}/>
        <div className={`flex gap-1.5 ${i18n.language === 'fa' ? 'mr-6' : 'ml-11 mt-2'}`}>
          <img src="../icons/list.svg" alt="hamberger Icon" className="h-9 lg:hidden cursor-pointer" />
          {/* Making any of the Menu Items */}
          {menuItem.map((item, index) => {
            return (
              <MenuHeader
                key={index}
                title={item.title}
              />
            )
          })}
        </div>
      </div>
      {/* Left Part */}
      <div className="flex xl:w-[45%] items-center  gap-4">
        <SearchInput />
        <div className="flex sm:gap-3 items-center">
          <div className="flex max-sm:hidden">
            {/* Making any of the Basket Items */}
            {baskets.map((item, index) => {
              return (
                <BasketItems
                  key={index}
                  icon={item.icon}
                  number={item.number}
                />
              )
            })}
          </div>
          {/* Login Button */}
          <button className="bg-orange border border-yellow-500 h-9 px-7 rounded-3xl inline-block">{t('Login')}</button>

        </div>



      </div>
    </div>
  )
}

export default Header