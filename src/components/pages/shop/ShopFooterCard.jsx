const ShopFooterCard = ({ discount, price }) => {
    return (
        <div className='w-full flex justify-between mediumStyle_text'>
            <span className='line-through font-Pop_Med'>{discount}</span>
            <div>
                <span className='text-VioletBlue text-lg ml-1'>{price} هزار</span>
                <span>تومان</span>
            </div>
        </div>
    )
}

export default ShopFooterCard
