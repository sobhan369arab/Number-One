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

  const { data: techData, refetch: refetch_Teach } = useQuery("getTech", GetTechnologies)
  const { data: typeData, refetch: refetch_Type } = useQuery("getType", GetCourseType)
  const { data: levelData, refetch: refetch_Level } = useQuery("getLevel", GetCourseLevel)
  const { data: teacherData, refetch: refetch_Teacher } = useQuery("getTeacher", getAllTeachers)
  // Radio input data
  const radioInput = [
    { title: "type", setInputID: SetTypeId, inputData: typeData },
    { title: "level", setInputID: SetLevelId, inputData: levelData },
    { title: "instructor", setInputID: setTeacherId, inputData: teacherData },
  ]
  console.log(techData)
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