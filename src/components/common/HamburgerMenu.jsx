import { useState } from "react"
import { CloseIcon, MenuIcon } from "../../core/icon"

const HamburgerMenu = ({children, style, width}) => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <div onClick={() => {setVisible(!visible)}} className="cursor-pointer hover:scale-110 duration-200"><MenuIcon width="25" height="25px" /></div>
            <div onClick={() => {setVisible(!visible)}} style={{opacity: visible ? "1" : "0", visibility: visible ? "visible" : "hidden"}} className="w-full duration-250 h-svh fixed top-0 right-0 bg-black/55 z-40"></div>
            <div style={{right: visible ? "0" : - width + "px"}} className={`w-[${width + "px"}] h-svh duration-200 z-50 fixed top-0 ${style}`}>
                <div onClick={() => {setVisible(!visible)}} className="absolute top-6 right-6 cursor-pointer hover:scale-105 duration-200 w-8 h-8 bg-yellowCustom rounded-full flex justify-center items-center"><CloseIcon /></div>
                {children}
            </div>
        </div>
    )
}

export default HamburgerMenu
