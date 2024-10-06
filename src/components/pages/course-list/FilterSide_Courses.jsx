import { useEffect } from "react";
import { getAllTeachers, GetCourseLevel, GetCourseType, GetTechnologies } from "../../../core/services/api/GetData";
import { FilterCheckBox, FilterRadio, FilterRange, FilterSearch, FilterStars } from "../../common/filter-box"
import { useQuery } from "react-query";

const FilterSide_Courses = ({
  setQuery,
  setListTech,
  SetTypeId,
  SetLevelId,
  setTeacherId,
  // SetRating,
  setPriceDown,
  setPriceUp,
  setTechCount,
  refetch
}) => {
  const { data: techData } = useQuery("getTech", GetTechnologies)
  const { data: typeData } = useQuery("getType", GetCourseType)
  const { data: levelData } = useQuery("getLevel", GetCourseLevel)
  const { data: teacherData } = useQuery("getTeacher", getAllTeachers)
  // Radio input data
  const radioInput = [
    { title: "type", setInputID: SetTypeId, inputData: typeData },
    { title: "level", setInputID: SetLevelId, inputData: levelData },
    { title: "instructor", setInputID: setTeacherId, inputData: teacherData },
  ]
  return (
    <div className="h-fit lg:w-72">
      <FilterSearch variant="Courses" setQuery={setQuery} refetch={refetch} />
      <FilterCheckBox
        labelArray={techData}
        title={"category"}
        SetFilteredData={setListTech}
        setTechCount={setTechCount}
        refetch={refetch}
      />
      {radioInput.map((filterBox, index) => (
        <FilterRadio
          key={index}
          title={filterBox.title}
          setInputID={filterBox.setInputID}
          inputData={filterBox.inputData}
          refetch={refetch}
        />
      ))}
      <FilterStars
        title={"rating"}
      // SetRating={SetRating}
      />
      <FilterRange
        title={"price"}
        setPriceDown={setPriceDown}
        setPriceUp={setPriceUp}
        refetch={refetch}
      />
    </div>
  )
}

export default FilterSide_Courses