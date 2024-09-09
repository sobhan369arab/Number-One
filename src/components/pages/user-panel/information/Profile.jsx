import profile from "../../../../assets/images/profile.jpg"
import { Camera, CloseIcon, IncreaseIcon } from "../../../../core/icon"
import { useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react"
import CreateModal from "../../../common/CreateModal"
import CreateUserPicture from "./CreateUserPicture"
import CropProfile from "./CropProfile"

const Profile = () => {
    const [files, setFiles] = useState()
    const [previews, setPreviews] = useState()
    const [userPictures, setUserPictures] = useState([])

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (!files || userPictures.length > 4) return
        setPreviews(URL.createObjectURL(files))
    }, [files])

    useEffect(() => {
        if (!previews || userPictures.length > 4) return
        let existed = userPictures.find(image => image.src === previews)
        console.log(userPictures.length)
        if (!existed) {
            setUserPictures([...userPictures, { src: previews }])
        }
    }, [previews])

    return (
        <div className="w-56 h-56 lg:w-36 lg:h-36 rounded-full overflow-hidden relative shadow-lg">
            <img src={previews ? previews : profile} alt="" />
            <div onClick={() => { onOpen() }} className="w-full h-9 cursor-pointer bg-black/30 z-10 absolute bottom-0 left-0 flex justify-center items-center">
                <Camera />
            </div>
            <CreateModal
                isOpen={isOpen}
                onClose={onClose}
                size="4xl"
                bodyStyle="flex flex-row flex-wrap justify-center gap-y-10 py-10 sm:py-20 px-10 sm:px-32 relative"
                scroll={false}
            >
                <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-0 right-0">
                    <CloseIcon />
                </div>
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border shadow-lg flex justify-center items-center">
                    {previews ?
                        (
                            <>
                                <img src={previews} alt="No Image" />
                                <CropProfile previews={previews} setPreviews={setPreviews} />
                            </>
                        )
                        : null}
                </div>
                <div className="w-80 overflow-x-auto sm:overflow-visible sm:w-full h-28 flex gap-x-8 items-center">
                    {userPictures ? userPictures.map((item, index) => <CreateUserPicture key={index} setUserPictures={setUserPictures} userPictures={userPictures} previews={previews} setPreviews={setPreviews} src={item.src} />) : null}
                    <label htmlFor="choosePicture" className="cursor-pointer hover:scale-110">
                        <IncreaseIcon />
                        <input
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            multiple
                            id="choosePicture"
                            className="hidden"
                            onChange={(event) => { setFiles(event.target.files[0]) }}
                        />
                    </label>
                </div>
            </CreateModal>
        </div>
    )
}

export default Profile
