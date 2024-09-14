import SidebarPictures from "./SidebarPictures"

const PictureSection = ({ img, activePic, setActivePic }) => {
    return (
        <div className="w-full xl:w-1/2 overflow-hidden flex flex-wrap sm:flex-nowrap gap-4 justify-center xl:justify-start">
            <div className="w-11/12 sm:w-[124px] h-fit flex sm:flex-wrap gap-4 order-2 sm:order-none">
                {img.map((pic, index) => <SidebarPictures setPic={setActivePic} pic={activePic} picture={pic} key={index} />)}
            </div>
            <img className="w-full sm:w-[436px] xl:w-3/4 h-[436px] rounded-lg" src={activePic} alt="Photo" />
        </div>
    )
}

export default PictureSection
