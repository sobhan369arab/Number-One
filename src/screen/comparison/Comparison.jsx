import { useLocation, useSearchParams } from "react-router-dom"
import { HeadingSection, ItemsCompared } from "../../components/pages/comparison"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useEffect } from "react"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa"
import { useState } from "react"
import { StarIcon, VsIcon } from "../../core/icon"

const Comparison = () => {
  const [searchParams, setSearchParams] = useSearchParams({ C: [] })
  const location = useLocation();
  const [objects, setObjects] = useState([]);

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
    setObjects(CoursesFiltered.flat(Infinity))
  }
  console.log(objects)

  return (
    <>
      <TitleSection title={'comparisonTitle'} />
      <HeadingSection />
      <div className="md:mb-20 mt-52 sm:mx-4 md:flex gap-28 justify-evenly">
        <div className="h-fit w-fit absolute md:block hidden lg:mx-0 -mt-16">
          <VsIcon/>
        </div>
        {objects.map((item) => {
          return (
            <ItemsCompared
              key={item.id}
              images={item.img}
              title={item.title}
              score={item.score}
              level={item.level}
              date={item.date}
              lessons={item.lessons}
              quizzes={item.quizzes}
              duration={item.duration}
              certifications={item.certifications}
              students={item.students}
              instructor={item.instructor}
              price={item.price}
            />
          )
        })}
      </div>
    </>
  )
}

export default Comparison