const Table = ({ sectionHeader, children, style }) => {
    return (
        <div dir="rtl" className={`w-full flex flex-wrap justify-center ${style}`}>
            <div className="w-full flex justify-around p-1.5 text-center">
                <span className="min-w-8 ml-2 h-8 rounded-full"></span>
                {sectionHeader.map((item, index) => <span key={index} className={"font-Sahel text-titleColor text-lg w-1/" + sectionHeader.length}>{item}</span>)}
                <span className="w-12 h-6"></span>
            </div>
            <div className="w-full h-1 rounded-full borderTable_header_userPanel mb-6"></div>
            {children}
        </div>
    )
}

export default Table
