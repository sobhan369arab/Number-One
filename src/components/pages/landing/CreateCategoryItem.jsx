const CategoryItem = ({ title, amount }) => {
    return (
        <div className="lg:w-32 flex flex-wrap gap-y-3 justify-center">
            <div className="w-full h-32 rounded-full border border-neutral-300 bg-gradient-to-t from-neutral-300 to-neutral-50"></div>
            <div className="w-full flex flex-wrap justify-center gap-y-1">
                <h2 className="w-full text-center">{title}</h2>
                <span className="text-sm text-neutral-400">({amount})</span>
            </div>
        </div>
    )
}

export default CategoryItem