import { UnitPrice } from "../../../core/utility/SeparationPrice/SeparationPrice"


const ShopFooterCard = ({ discount, price }) => {
    return (
        <div className='w-full flex justify-between mediumStyle_text'>
            <span className='line-through font-Pop_Med'>{discount}</span>
            <div>
                <span className='text-VioletBlue text-lg ml-1'>{UnitPrice(price)}</span>
                <span>تومان</span>
            </div>
        </div>
    )
}

export default ShopFooterCard
