import { CategoryFilter, InstructorFilter } from "../../core/constants/Filters/Filters"
import { FilterCheckBox, FilterRadio, FilterRange } from "./filter-box"

const FilterSide = ({
  coursesData,
  SetCoursesData,
}) => {
  return (
    <div className="h-[1000px] w-72">
      <FilterCheckBox
        data={coursesData}
        setData={SetCoursesData}
        labelArray={CategoryFilter}
        title={"category"}
      />
      <FilterRadio
        data={coursesData}
        setData={SetCoursesData}
        title={"level"}
      />
      <FilterCheckBox
        data={coursesData}
        setData={SetCoursesData}
        labelArray={InstructorFilter}
        title={"instructor"}
      />
      <FilterRange
        data={coursesData}
        setData={SetCoursesData}
        title={"price"}
      />
    </div>
  )
}

export default FilterSide