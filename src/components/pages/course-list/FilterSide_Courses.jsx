import { useEffect, useState } from "react"
import { InstructorFilter, LevelFilter, TypeFilter } from "../../../core/constants/Filters/Filters"
import { FilterCheckBox, FilterRadio, FilterRange, FilterSearch, FilterStars } from "../../common/filter-box"
import GetTechnologies from "../../../core/services/api/GetData/GetTechnologies";
import getAllTeachers from "../../../core/services/api/GetData/GetAllTeachers";
import GetCourseType from "../../../core/services/api/GetData/GetCourseType";
import GetCourseLevel from "../../../core/services/api/GetData/GetCourseLevel";

const FilterSide_Courses = ({
  setQuery,
  setListTech,
  SetTypeId,
  SetLevelId,
  setTeacherId,
  // SetRating,
  setPriceDown,
  setPriceUp,
  setTechCount
}) => {

  // State filters
  const [categoryData, setCategoryData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [levelData, setLevelData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);

  // Getting filter data from api
  const getFiltersData = async (api, setState) => {

    const result = await api;

    setState(result)
  }

  useEffect(() => {
    getFiltersData(GetTechnologies(), setCategoryData),
      getFiltersData(GetCourseType(), setTypeData),
      getFiltersData(GetCourseLevel(), setLevelData),
      getFiltersData(getAllTeachers(), setTeacherData)
  }, [])


  return (
    <div className="h-fit lg:w-72">
      <FilterSearch variant="Courses" setQuery={setQuery} />
      <FilterCheckBox
        labelArray={categoryData}
        title={"category"}
        SetFilteredData={setListTech}
        setTechCount={setTechCount}
      />
      <FilterRadio
        title={"type"}
        setInputID={SetTypeId}
        inputData={typeData}
      />
      <FilterRadio
        title={"level"}
        setInputID={SetLevelId}
        inputData={levelData}
      />
      <FilterRadio
        title={"instructor"}
        setInputID={setTeacherId}
        inputData={teacherData}
      />
      <FilterStars
        title={"rating"}
        // SetRating={SetRating}
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