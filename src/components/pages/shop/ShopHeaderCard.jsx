const ShopHeaderCard = ({ image, specialSale }) => {
    return (
        <div className='w-full relative rounded-md overflow-hidden'>
            <img className='w-full h-64' src={image} alt='Photo' />
            {
                specialSale && <div className='absolute top-0 left-0 px-2 py-1 bg-purpleCustom text-white rounded-md'>فروش ویژه</div>
            }
        </div>
    )
}

export default ShopHeaderCard
