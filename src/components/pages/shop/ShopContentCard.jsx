import { StarIcon } from '../../../core/icon'

const ShopContentCard = ({ title, score, category, exist }) => {
    return (
        <div className='w-full border-b border-grayBorder pb-4 flex flex-wrap gap-y-4'>
            <h1 className='text-titleColor text-xl'>{title}</h1>
            <div className='w-full flex justify-between'>
                <div className='px-6 py-1 text-white bg-purpleCustom rounded-full'>{category}</div>
                <div className='flex gap-x-2 items-center h-full'>
                    <div className='mediumStyle_text flex gap-1'>
                        <span className='text-purpleCustom'>{exist}</span>
                        <span>موجود</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <StarIcon />
                        <span className="text-gray-500 text-sm h-[15px]">{score}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopContentCard
