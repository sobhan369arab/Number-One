import { useEffect, useState } from "react"
import { CloseIcon } from "../../../../core/icon"

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
            <div onClick={() => { handleClick(src) }} className="w-28 h-28 rounded-2xl">
                <img className="max-w28 max-h-28 w-28 h-28 rounded-2xl" src={src} alt="" />
            </div>
            {
                active ?
                    <div onClick={() => { handleDelete(src) }} className="closeButton_modal bg-neutral-100 top-0 sm:-top-2 sm:-left-2">
                        <CloseIcon stroke="red" />
                    </div> : null
            }
        </div>
    )
}

export default CreateUserPicture
