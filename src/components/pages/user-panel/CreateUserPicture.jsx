import { useEffect, useState } from "react"
import { CloseIcon } from "../../../core/icon"

const CreateUserPicture = ({ src, setUserPictures, userPictures, previews, setPreviews }) => {
    const [active, setActive] = useState(false)

    const handleClick = (src) => {
        setPreviews(src)
    }

    useEffect(() => {
        if (!previews) return
        if (previews == src) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [previews])

    const handleDelete = (src) => {
        try {
            setUserPictures(userPictures.filter(image => image.src != src))
            setPreviews(null)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="relative">
            <div onClick={() => { handleClick(src) }} className="w-28 h-full rounded-2xl">
                <img className="rounded-2xl" src={src} alt="" />
            </div>
            {
                active ?
                    <div onClick={() => { handleDelete(src) }} className="closeButton_modal bg-neutral-100 -top-2 -left-2">
                        <CloseIcon stroke="red" />
                    </div> : null
            }
        </div>
    )
}

export default CreateUserPicture
