import { DateIcon } from "../../../core/icon"

const CenterBox = ({
  title,
  category,
  date,
  bio,
}) => {
  return (
    <div className="my-2 pb-2">
      <h1 className="text-lg font-bold line-clamp-1">{title}</h1>
      <div className="flex justify-between my-2">
        <div className="px-4 py-1 bg-purpleCustom text-xs text-white rounded-2xl whitespace-nowrap cursor-default">{category}</div>
        <div className='flex gap-2'>
          <DateIcon height={18} width={15} />
          <h1 className="line-clamp-1 text-gray-500">{date}</h1>
        </div>
      </div>
      <h1 className="line-clamp-2 text-gray-500 text-sm mt-3">{bio}</h1>
    </div>
  )
}

export default CenterBox