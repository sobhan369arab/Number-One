import { DateIcon } from "../../../core/icon"
import { Label } from "../../common"

const CenterBox = ({
  title,
  category,
  date,
  bio,
}) => {
  const newDate = date.split("T")

  return (
    <div className="my-2 pb-2  cursor-pointer">
      <h1 className="text-lg line-clamp-1 text-DarkBlue">{title}</h1>
      <div className="flex justify-between my-2">
        <Label variant={'bgBlue'} text={category} style='text-xs whitespace-nowrap cursor-default' />
        <div className='flex gap-2'>
          <DateIcon height={18} width={15} fill="#555555" />
          <h1 className="line-clamp-1 mediumStyle_text">{newDate[0]}</h1>
        </div>
      </div>
      <h1 className="line-clamp-2 text-gray-500 text-sm mt-3 blog-bio h-10">{bio}</h1>
    </div>
  )
}

export default CenterBox