import { CategoryFilter, InstructorFilter, LevelFilter, TypeFilter } from "../../core/constants/Filters/Filters"
import { FilterCheckBox, FilterRadio, FilterRange, FilterStars } from "./filter-box"

const FilterSide = ({
  coursesData,
  SetCoursesData,
  SetCategoryData,
  SetInstructorData,
  SetLevelId,
  SetTypeId,
  SetRating,
  setPriceDown,
  setPriceUp,
 
}) => {

  return (
    <div className=" w-72 ">
      <FilterCheckBox
        data={coursesData}
        setData={SetCoursesData}
        labelArray={CategoryFilter}
        title={"category"}
        SetFilteredData={SetCategoryData}

      />
      <FilterRadio
        title={"type"}
        setCourseID={SetTypeId}
        labelArray={TypeFilter}
      />
      <FilterRadio
        title={"level"}
        setCourseID={SetLevelId}
        labelArray={LevelFilter}
      />
      <FilterCheckBox
        data={coursesData}
        setData={SetCoursesData}
        labelArray={InstructorFilter}
        title={"instructor"}
        SetFilteredData={SetInstructorData}
      />
      <FilterStars
        title={"rating"}
        SetRating={SetRating}

      />
      <FilterRange
        title={"price"}
        setPriceDown={setPriceDown}
        setPriceUp={setPriceUp}
      />
    </div>
  )
}

export default FilterSide