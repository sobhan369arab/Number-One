import { appLogo, downloadBtn } from "./footerData"

const Apps = () => {
    return (
        <div className=" max-sm:mt-2 max-sm:m-auto lg:absolute lg:left-2 lg:bottom-5">
            <div className="flex gap-3 w-fit max-sm:m-auto">
                {/* Making each of the apps*/}
                {appLogo.map((item, index) => (
                    <img key={index} src={`./icons/${item.icon}`} alt="App Logo" className="lg:h-auto md:h-5 " />
                ))}
            </div>
            <div className="flex md:gap-2 gap-3  mt-5">
                {/* Making each of the download apps*/}
                {downloadBtn.map((item, index) => (
                    <img key={index} src={`./icons/${item.button}`} alt="App Download" className="lg:h-11 h-8" />
                ))}
            </div>
        </div>

    )
}

export default Apps