const SidebarPictures = ({ pic, setPic, picture }) => {
    return (
        <label onClick={() => { setPic(picture) }} className="w-full sm:h-1/3 hover:cursor-pointer">
            <input readOnly checked={picture === pic ? true : false} className="hidden peer/active" type="radio" name="picture" />
            <img
                src={picture}
                alt="Picture"
                className="border-3 peer-checked/active:border-VioletBlue rounded-lg"
            />
        </label>
    )
}

export default SidebarPictures
