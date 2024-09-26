import { useEffect, useState } from "react"
import { ArrowIcon } from "../../../core/icon"

const ScrollToUpButton = () => {
    // window.scrollTo({ top: getTop });
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) setShowButton(true)
            else setShowButton(false)
        })
    }, [])

    const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <div className="flex flex-col gap-3">
            <div onClick={handleClick} style={{ display: showButton ? "flex" : "none" }} className="bottomNav items-center justify-center">
                <ArrowIcon fill="#fff" className="w-4 h-4 rotate-180" />
            </div>
            <span className={`w-10 h-3 bottomNav_shadow ${!showButton ? "hidden" : ""}`}></span>
        </div>

    )
}

export default ScrollToUpButton
