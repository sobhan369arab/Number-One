import { FilterSide, PaginatedItems, SortBox } from "../../components/common"
import TitleSection from "../../components/partials/TitleSection/titleSection"

const Courses = () => {
    return (
        <>
            <TitleSection title={'CoursesTitle'} />
            <div className="main-container">
                <div>
                    <SortBox/>
                    <PaginatedItems/>
                </div>
                <FilterSide/>

            </div>
        </>
    )
}

export default Courses