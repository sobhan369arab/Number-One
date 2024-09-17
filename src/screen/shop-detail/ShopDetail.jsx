import TitleSection from "../../components/partials/title-section/TitleSection"
import { shopData } from "../../core/constants/shop/ShopData"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { RelatedProducts, TabSection, Details, PictureSection } from "../../components/pages/shop-detail"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"

const ShopDetail = () => {
    // Get the desired item
    const { id } = useParams()
    const [item, setItem] = useState(null)
    const getItem = (id) => { setItem(shopData.find(obj => obj.id == id)) }
    useEffect(() => { getItem(id) }, [])
    // Set active picture
    const [activePic, setActivePic] = useState()
    useEffect(() => { if (item != null) setActivePic(item.img[0]) }, [item])

    return (
        // if item is not null
        item != null && (
            <>
                <TitleSection title={'shopDetail'} >
                    <BreadCrumb href={'/shop'} text="ShopSection"/>
                    <BreadCrumb type="Div" text={item.title}/>
                </TitleSection>
                <div className="lg:px-44 sm:px-16 px-8 w-full flex flex-wrap gap-y-20 my-20">
                    <div className="w-full flex xl:flex-nowrap flex-wrap gap-8">
                        <PictureSection 
                            activePic={activePic}
                            setActivePic={setActivePic}
                            img={item.img}
                        />
                        <Details item={item} />
                    </div>
                    <TabSection bio={item.bio} />
                    <RelatedProducts />
                </div>
            </>
        )
    )
}

export default ShopDetail