import { useEffect } from "react";
import { getAllTeachers, GetCourseLevel, GetCourseType, GetTechnologies } from "../../../core/services/api/GetData";
import { FilterCheckBox, FilterRadio, FilterRange, FilterSearch} from "../../common/filter-box"
import { useQuery } from "react-query";

const FilterSide_Courses = ({
  setQuery,
  setListTech,
  SetTypeId,
  SetLevelId,
  setTeacherId,
  setPriceDown,
  setPriceUp,
  setTechCount,
}) => {
  const { data: techData, remove: removeTech } = useQuery("getTech", GetTechnologies)
  const { data: typeData, remove: removeType } = useQuery("getType", GetCourseType)
  const { data: levelData, remove: removeLevel } = useQuery("getLevel", GetCourseLevel)
  const { data: teacherData, remove: removeTeachers } = useQuery("getTeacher", getAllTeachers)
  // Radio input data
  const radioInput = [
    { title: "type", setInputID: SetTypeId, inputData: typeData, resetFilters: removeType },
    { title: "level", setInputID: SetLevelId, inputData: levelData, resetFilters: removeLevel },
    { title: "instructor", setInputID: setTeacherId, inputData: teacherData, resetFilters: removeTeachers },
  ]
  return (
    <div className="h-fit lg:w-72">
      <FilterSearch variant="Courses" setQuery={setQuery}/>
      <FilterCheckBox
        labelArray={techData}
        title={"category"}
        SetFilteredData={setListTech}
        setTechCount={setTechCount}
        removeTech={removeTech}
      />
      {radioInput.map((filterBox, index) => (
        <FilterRadio
          key={index}
          title={filterBox.title}
          setInputID={filterBox.setInputID}
          inputData={filterBox.inputData}
          resetFilters={filterBox.resetFilters}
        />
      ))}
      <FilterRange
        title={"price"}
        setPriceDown={setPriceDown}
        setPriceUp={setPriceUp}
      />
    </div>
  )
}

export default FilterSide_Courses