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
        <div className="border border-grayBorder p-5 course-item w-[300px] rounded-lg hover:shadow-lg duration-200 relative cursor-pointer">
            <BlogHeader images={images} id={id} />
            <CenterBox
                title={title}
                category={category}
                date={date}
                bio={bio}
            />
            <DownBox
                like={like}
                disLike={disLike}
                view={view}
            />
        </div>
    )
}

export default BlogCard