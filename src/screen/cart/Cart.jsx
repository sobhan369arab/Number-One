import { CreateCartItems } from "../../components/pages/cart"
import { useSelector, useDispatch } from "react-redux"
import { clearCartAction } from "../../redux/slices/CartData"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { Button, calculatePageCount, DetailsBox, FilterSearch, handlePageClick, PaginatedItems, PaginateHolderItems, SectionTop } from "../../components/common"
import { useEffect, useState } from "react"
import { LevelIcon, TrashCan, } from "../../core/icon"
import { setItem } from "../../core/services/local-storage/LocalStorage"
import MediaQuery, { useMediaQuery } from "react-responsive"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"

const Cart = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 430px)' })

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.CartData.value)
    // get total sum and item
    const [totalItems, setTotalItems] = useState(0)
    const [totalSum, setTotalSum] = useState(0)
    // filter
    const [query, setQuery] = useState(undefined)
    const [FilteredData, SetFilteredData] = useState([]);

    const filterObj_cart = { Query: query, }

    // console.log(filterObj_cart)

    // Paginate
    const currentCart = 6;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + currentCart;
    const currentItems = FilteredData.slice(itemOffset, endOffset);

    useEffect(() => {
        SetFilteredData(cartItems);
        totalNumberOfItems(cartItems)
        if (cartItems.length > 0) {
            setItem("cartItems", cartItems)
        }
    }, [cartItems])

    const totalNumberOfItems = (list) => {
        let totalAmount = 0
        let totalPrice = 0
        list.forEach(value => {
            totalAmount = totalAmount + value.amount
            totalPrice = totalPrice + (value.price * value.amount)
        });
        setTotalSum(totalPrice)
        setTotalItems(totalAmount)
    }

    const detailsCart = [{ titleDetail: "numberOfItemsInCart", countDetail: totalItems, iconDetail: LevelIcon }]

    return (
        <>
            <TitleSection title={"cartTitle"}>
                <BreadCrumb type="Div" text={'cartTitle'} />
            </TitleSection>
            <div className="main-container flex gap-7 relative">
                <MediaQuery minWidth="750px">
                    <div className="w-72 h-fit">
                        <FilterSearch variant="Shop" setQuery={setQuery} />
                        <DetailsBox
                            variant="cart"
                            price={totalSum}
                            Detail={detailsCart}
                            arrowColor={"#fff"}
                            colorButton={"purple"}
                            btnText={"cartButton"}
                            shareBox={false}
                        />
                    </div>
                </MediaQuery>
                <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                    <SectionTop
                        AllData={cartItems}
                        FilteredData={FilteredData}
                        showViewBtn={false}
                    >
                        <div className="flex gap-x-4 h-fit justify-between sm:justify-start items-center w-full sm:w-auto">
                            <Button isClick={() => { dispatch(clearCartAction()) }} vType="button" vStyle="purple" text={!isMobile ? "clearBtn" : ""} Icon={TrashCan} style="order-2" />
                            <MediaQuery maxWidth="749px">
                                <FilterSearch variant="Shop" setQuery={setQuery} Style="mt-5" />
                            </MediaQuery>
                        </div>
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems handlePageClick={(event) => { handlePageClick(event, currentCart, setItemOffset, FilteredData) }} pageCount={calculatePageCount(FilteredData, currentCart)}>
                            <div className="flex flex-wrap relative gap-x-1 justify-center gap-y-5 w-full m-auto my-2">
                                {cartItems.length > 0 ? currentItems.map(item => (
                                    <CreateCartItems
                                        key={item.id}
                                        amount={item.amount}
                                        description={item.bio}
                                        picture={item.img[0]}
                                        price={item.price}
                                        title={item.title}
                                        id={item.id}
                                    />
                                )) : <h1 className="text-gray-600 text-xl mt-40">سبد خرید خالی است</h1>}
                            </div>
                        </PaginatedItems>
                    </PaginateHolderItems>
                    <MediaQuery maxWidth="749px">
                        <div className="mt-4">
                            <DetailsBox
                                variant="cart"
                                price={totalSum}
                                Detail={detailsCart}
                                arrowColor={"#fff"}
                                colorButton={"purple"}
                                btnText={"cartButton"}
                                shareBox={false}
                            />
                        </div>
                    </MediaQuery>
                </div>
            </div>
        </>
    )
}

export default Cart
