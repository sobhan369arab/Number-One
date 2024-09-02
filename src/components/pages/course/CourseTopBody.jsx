import { StarIcon } from "../../../core/icon"

const CourseTopBody = ({
  title,
  score,
  category,
  bio
}) => {
  return (
    <div>
      <h1 className='text-sm font-semibold line-clamp-1 mt-1'>{title}</h1>
      <div className='flex justify-between my-2 '>
        <div className={`flex gap-1 w-40  ${category.length > 2 ? "scrollBehavior" : ""}`}>
          {category.map((categoryBox, index) => (
            <div key={index} className='px-4 py-1 bg-grayCustom text-xs text-gray-600 rounded-2xl whitespace-nowrap cursor-default'>{categoryBox}</div>
          ))}
        </div>
        <div className="flex gap-1 items-baseline">
          <StarIcon />
          <span className="text-gray-500 text-sm">{score}</span>
        </div>
      </div>
      <h1 className="hidden course-bio line-clamp-1 text-sm my-5 text-gray-600">{bio}</h1>
    </div>
  )
}

export default CourseTopBody