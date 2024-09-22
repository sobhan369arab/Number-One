import ShopHeaderCard from './ShopHeaderCard'
import ShopContentCard from './ShopContentCard'
import ShopFooterCard from './ShopFooterCard'
import { Link } from 'react-router-dom'

const ShopCard = ({ item }) => {
    const { img, category, exist, score, title, discount, price, specialSale } = item
    return (
        <Link to={"/shopDetails/" + item.id} className='w-[300px] h-fit flex flex-wrap gap-y-4 p-5 border border-LightGrayish rounded-lg hover:shadow-lg duration-200 relative cursor-pointer'>
            <ShopHeaderCard image={img[0]} specialSale={specialSale} />
            <ShopContentCard
                category={category}
                exist={exist}
                score={score}
                title={title}
            />
            <ShopFooterCard discount={discount} price={price} />
        </Link>
    )
}

export default ShopCard
