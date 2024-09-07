import { useLocation, useSearchParams } from "react-router-dom"
import { HeadingSection, ItemsCompared } from "../../components/pages/comparison"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useEffect } from "react"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa"
import { useState } from "react"

const Comparison = () => {
  const [searchParams, setSearchParams] = useSearchParams({ C: [] })
  const location = useLocation();
  const [object, setObject] = useState();

  useEffect(() => {
    if (location.state === null) {
      setSearchParams({ C: location.state })
    }
    getObj();
  }, [location.state])

  const getObj = () => {
    var CoursesFiltered = [];
    for (let Id of location.state) {
      CoursesFiltered.push(
        CoursesDataFa.filter(el => el.id === Id)
      )
    }
    setObject(CoursesFiltered.flat(Infinity))
  }

  return (
    <>
      <TitleSection title={'comparisonTitle'} />
      <HeadingSection />
      <ItemsCompared/>
    </>
  )
}

export default Comparison