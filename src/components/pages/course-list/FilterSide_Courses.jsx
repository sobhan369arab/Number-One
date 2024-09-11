import { CategoryFilter, InstructorFilter, LevelFilter, TypeFilter } from "../../../core/constants/Filters/Filters"
import { FilterCheckBox, FilterRadio, FilterRange, FilterSearch, FilterStars } from "../../common/filter-box"

const FilterSide_Courses = ({
  SetCategoryData,
  SetInstructorData,
  SetLevelId,
  SetTypeId,
  SetRating,
  setPriceDown,
  setPriceUp,
  setQuery,
  typeId,
  levelId,
  categoryData,
  instructorData,
}) => {

  return (
    <div className="h-fit lg:w-72">
      <FilterSearch variant="Courses" setQuery={setQuery} />
      <FilterCheckBox
        labelArray={CategoryFilter}
        title={"category"}
        SetFilteredData={SetCategoryData}
        filteredData={categoryData}
      />
      <FilterRadio
        title={"type"}
        setCourseID={SetTypeId}
        inputId={typeId}
        labelArray={TypeFilter}
      />
      <FilterRadio
        title={"level"}
        setCourseID={SetLevelId}
        inputId={levelId}
        labelArray={LevelFilter}
      />
      <FilterCheckBox
        labelArray={InstructorFilter}
        title={"instructor"}
        SetFilteredData={SetInstructorData}
        filteredData={instructorData}
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

export default FilterSide_Courses