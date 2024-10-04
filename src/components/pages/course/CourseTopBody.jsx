import { Skeleton } from "@nextui-org/react"
import { StarIcon } from "../../../core/icon"
import { Label } from "../../common"

const CourseTopBody = ({
  title,
  score,
  category,
  bio,
  isLoaded
}) => {

  const categoryList = category?.split(",")

  return (
    <div>
      <Skeleton isLoaded={!isLoaded} className="h-8">
        <h1 className='text-lg line-clamp-1 mt-2 course-title text-DarkBlue group-hover/item:text-VioletBlue duration-150'>{title && title}</h1>
      </Skeleton>
      <div className='flex justify-between my-2 '>
        <div className={`flex gap-1  ${location.search === '?V=1' ? "w-40" : ""}  ${category?.length > 2 ? "scrollBehavior" : ""}`}>
          {categoryList?.map((categoryBox, index) => (
            <Skeleton isLoaded={!isLoaded}>
              <Label key={index} variant={'bgTextGray'} text={categoryBox} style='text-xs whitespace-nowrap ' />
            </Skeleton>
          ))}
        </div>
        <Skeleton isLoaded={!isLoaded}>
          <div className="flex gap-1 items-baseline">
            <StarIcon />
            <span className="text-gray-500 text-sm">{score}</span>
          </div>
        </Skeleton>
      </div>
      <Skeleton isLoaded={!isLoaded}>
        <p className="hidden course-bio line-clamp-1 text-sm my-5 text-gray-600">{bio} </p>
      </Skeleton>

    </div>
  )
}

export default CourseTopBody