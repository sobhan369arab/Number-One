import { StarIcon } from "../../../core/icon"

const CourseTopBody = ({
  title,
  score,
  category
}) => {
  return (
    <div>
      <h1 className='text-sm font-semibold line-clamp-1 mt-1'>{title}</h1>
      <div className='flex justify-between my-2 '>
        <div className={`flex gap-1 w-40  ${category.length > 2 ? "scrollBehavior" : ""}`}>
          {category.map((categoryBox, index) => (
            <div key={index} className='px-4 py-1 bg-gray-200 text-xs rounded-2xl whitespace-nowrap cursor-default'>{categoryBox}</div>
          ))}
        </div>
        <div className="flex gap-1 items-baseline">
          <StarIcon />
          <span className="text-gray-500 text-sm">{score}</span>
        </div>
      </div>
    </div>
  )
}

export default CourseTopBody