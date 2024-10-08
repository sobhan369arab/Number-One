import { getAllTeachers, GetCourseLevel, GetCourseType, GetTechnologies } from "../../../core/services/api/GetData";
import { setInstructorId, setLevelId, setListTech, setPriceDown, setPriceUp, setQuery, setTechCount, setTypeId } from "../../../redux/slices/filter-box-slices/FilterCourses";
import { FilterCheckBox, FilterRadio, FilterRange, FilterSearch } from "../../common/filter-box"
import { useQuery } from "@tanstack/react-query";

const FilterSide_Courses = ({
}) => {
  const { data: techData, refetch: refetchTech, isRefetching: StatusTech } = useQuery({ queryKey: ["getTech"], queryFn: GetTechnologies })
  const { data: typeData, refetch: refetchType, isRefetching: StatusType } = useQuery({ queryKey: ["getType"], queryFn: GetCourseType })
  const { data: levelData, refetch: refetchLevel, isRefetching: StatusLevel } = useQuery({ queryKey: ["getLevel"], queryFn: GetCourseLevel })
  const { data: teacherData, refetch: refetchTeacher, isRefetching: StatusTeacher } = useQuery({ queryKey: ["getTeacher"], queryFn: getAllTeachers })
  // Radio input data
  const radioInput = [
    { title: "type", setInputID: setTypeId, inputData: typeData, resetFilters: refetchType, Status: StatusType, key: 'typeName' },
    { title: "level", setInputID: setLevelId, inputData: levelData, resetFilters: refetchLevel, Status: StatusLevel, key: 'levelName' },
    { title: "instructor", setInputID: setInstructorId, inputData: teacherData, resetFilters: refetchTeacher, Status: StatusTeacher, key: 'fullName' },
  ]
  return (
    <div className="h-fit lg:w-72">
      <FilterSearch variant="Courses" setQuery={setQuery} />
      <FilterCheckBox
        labelArray={techData}
        title={"category"}
        SetFilteredData={setListTech}
        setTechCount={setTechCount}
        refetch={refetchTech}
        isRefetching={StatusTech}
      />
      {radioInput.map((filterBox, index) => (
        <FilterRadio
          key={index}
          title={filterBox.title}
          setInputID={filterBox.setInputID}
          inputData={filterBox.inputData}
          refetch={filterBox.resetFilters}
          fetchStatus={filterBox.Status}
          titleKey={filterBox.key}
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