import CreateStatisticsItem from "./createStatisticsItem"

const Statistics = () => {
    const statisticsItem = [
        { id: 1, name: "جایزه به دست آمده", statistics: "42 K", isBorder: true },
        { id: 2, name: "بهترین اساتید", statistics: "156 K", isBorder: true },
        { id: 3, name: "دروس دانشکده", statistics: "89 K", isBorder: true },
        { id: 4, name: "دانشجو های فعال", statistics: "45 K+", isBorder: false },
    ]
    return (
        <div className="w-full lg:px-44 sm:px-16 px-8 pb-28">
            <div className="w-full bg-[#282568] rounded-[40px] py-20 px-24 flex Statistics_shadow">
                {statisticsItem.map(item => (<CreateStatisticsItem key={item.id} Statistics={item.statistics} name={item.name} isBorder={item.isBorder} />))}
            </div>
        </div>
    )
}

export default Statistics
