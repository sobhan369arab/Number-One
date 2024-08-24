const BasketItems = ({ Icon, number }) => {
    return (
        <div className="relative cursor-pointer">
            <Icon width="35px" />
            <div className="bg-yellowCustom/80 absolute rounded-full text-center px-1.5 text-sm -top-1.5 -right-1">{number}</div>
        </div>
    )
}

export default BasketItems