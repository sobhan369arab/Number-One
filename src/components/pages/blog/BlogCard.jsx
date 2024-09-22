import { Link } from "react-router-dom"
import BlogHeader from "./BlogHeader"
import CenterBox from "./CenterBox"
import DownBox from "./DownBox"

const BlogCard = ({
    id,
    title,
    images,
    category,
    date,
    like,
    disLike,
    bio,
    view,
}) => {
    return (
        <div className="border border-LightGrayish p-5 grid-item w-[300px] rounded-lg hover:shadow-lg duration-200 relative m-auto">
            <BlogHeader images={images} id={id} />
            <div className="w-full">
                <Link to={`/BlogDetails/${id}`}>
                    <CenterBox
                        title={title}
                        category={category}
                        date={date}
                        bio={bio}
                    />
                </Link >
                <DownBox
                    like={like}
                    disLike={disLike}
                    view={view}
                />
            </div>
        </div>
    )
}

export default BlogCard