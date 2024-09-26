import { useEffect, useState } from "react"
import { CloseIcon, MenuIcon } from "../../core/icon"
import { useTranslation } from "react-i18next"

const HamburgerMenu = ({ children, style, width }) => {
    const [visible, setVisible] = useState(false)

    const { i18n } = useTranslation()
    return (
        <div>
            <div onClick={() => { setVisible(!visible); }} className="cursor-pointer hover:scale-110 duration-200"><MenuIcon width="25" height="25px" /></div>
            <div onClick={() => { setVisible(false) }} style={{ opacity: visible ? "1" : "0", visibility: visible ? "visible" : "hidden", }} className={`w-full duration-250 h-svh fixed top-0 right-0 bg-black/55 z-[9999]`}></div>
            <div style={i18n.language != "en" ? { right: visible ? "0" : - width + "px" } : { left: visible ? "0" : - width + "px" }} className={`w-[${width + "px"}] h-svh duration-200 fixed top-0 right-0 select-none z-[9999] overflow-x-hidden overflow-y-auto ${style}`}>
                <div onClick={() => { setVisible(!visible) }} className={`${i18n.language != "en" ? "right-6" : "left-6"}  absolute top-6 cursor-pointer hover:scale-105 duration-200 w-8 h-8 bg-SunshineYellow rounded-full flex justify-center items-center`}><CloseIcon /></div>
                {children}
            </div>
        </div>
    )
}

export default HamburgerMenu
