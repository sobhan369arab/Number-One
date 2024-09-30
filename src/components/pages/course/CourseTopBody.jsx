import { StarIcon } from "../../../core/icon"
import { Label } from "../../common"

const CourseTopBody = ({
  title,
  score,
  category,
  bio
}) => {

  const categoryList = category.split(",")

  return (
    <div>
      <h1 className='text-lg line-clamp-1 mt-2 course-title text-DarkBlue group-hover/item:text-VioletBlue duration-150'>{title}</h1>
      <div className='flex justify-between my-2 '>
        <div className={`flex gap-1  ${location.search === '?V=1' ? "w-40" : ""}  ${category.length > 2 ? "scrollBehavior" : ""}`}>
          {categoryList.map((categoryBox, index) => (
            <Label key={index} variant={'bgTextGray'} text={categoryBox} style='text-xs whitespace-nowrap ' />
          ))}
        </div>
        <div className="flex gap-1 items-baseline">
          <StarIcon />
          <span className="text-gray-500 text-sm">{score}</span>
        </div>
      </div>
      <p className="hidden course-bio line-clamp-1 text-sm my-5 text-gray-600">{bio} </p>
    </div>
  )
}

export default CourseTopBody