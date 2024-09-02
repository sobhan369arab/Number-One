import profile from "../../../../assets/images/profile.jpg"
import { Camera, CloseIcon, IncreaseIcon } from "../../../../core/icon"
import { useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react"
import CreateModal from "../CreateModal"
import CreateUserPicture from "../CreateUserPicture"
import CropProfile from "./CropProfile"

const Profile = () => {
    const [files, setFiles] = useState()
    const [previews, setPreviews] = useState()
    const [userPictures, setUserPictures] = useState([])

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (!files) return
        setPreviews(URL.createObjectURL(files))
    }, [files])

    useEffect(() => {
        if (!previews) return
        let existed = userPictures.find(image => image.src === previews)
        console.log(userPictures)
        if (!existed) {
            setUserPictures([...userPictures, { src: previews }])
        }
    }, [previews])

    return (
        <div className="w-36 h-36 rounded-full overflow-hidden relative shadow-lg">
            <img src={previews ? previews : profile} alt="" />
            <div onClick={() => { onOpen() }} className="w-full h-9 cursor-pointer bg-black/30 z-10 absolute bottom-0 left-0 flex justify-center items-center">
                <Camera />
            </div>
            <CreateModal isOpen={isOpen} onClose={onClose}>
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
                <div className="w-full h-28 flex gap-x-8 items-center">
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
