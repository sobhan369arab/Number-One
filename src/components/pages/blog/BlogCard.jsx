import { Link } from "react-router-dom"
import CenterBox from "./CenterBox"
import DownBox from "./DownBox"
import { Skeleton } from "@nextui-org/react"

const BlogCard = ({ item, isLoading ,refetch}) => {
    const {
        id,
        title,
        currentImageAddressTumb: images,
        newsCatregoryName: category,
        updateDate: date,
        currentView: view,
        miniDescribe: bio,
        currentLikeCount,
        currentDissLikeCount,
    } = item;

    return (
        <div className="border border-LightGrayish p-5 grid-item w-[300px] rounded-lg hover:shadow-lg duration-200 relative m-auto">
            <Skeleton  isLoaded={!isLoading} className="rounded-xl">
                <img src={images} className="rounded-xl max-w-[258px] min-w-[258px] h-[224px]" />
            </Skeleton>
            <div className="w-full">
                <Link to={`/BlogDetails/${id}`}>
                    <CenterBox
                        title={title}
                        category={category}
                        date={date}
                        bio={bio}
                        isLoading={isLoading}
                    />
                </Link >
                <DownBox
                    like={currentLikeCount}
                    disLike={currentDissLikeCount}
                    view={view}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default BlogCard