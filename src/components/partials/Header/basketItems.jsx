
const BasketItems = ({ icon, number }) => {
    return (
        <div className="relative w-11 h-12 ">
            <img src={`../icons/${icon}`} alt="Icon Basket" className="m-auto my-2 h-8" />
            <div className="bg-orange absolute rounded-full text-center px-1.5 text-sm top-0 right-0">{number}</div>
        </div>
    )
}

export default BasketItems