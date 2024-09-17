import { useLocation } from "react-router-dom"
import { HeadingSection, ItemsCompared } from "../../components/pages/comparison"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useEffect } from "react"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa"
import { useState } from "react"
import { VsIcon } from "../../core/icon"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"

const Comparison = () => {
  const location = useLocation();
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    SetArray();

  }, [location.pathname])

  // Converting the IDs in the form Array and Set to state
  const SetArray = () => {
    const getId = location.pathname.split("/")[2]
    const ArrayId = getId.split(",");

    var CoursesFiltered = [];
    for (let Id of ArrayId) {
      CoursesFiltered.push(
        CoursesDataFa.filter(el => el.id === Id)
      )
    }
    setObjects(CoursesFiltered.flat(Infinity))
  }

  return (
    <>
      <TitleSection title={'comparisonTitle'}>
        <BreadCrumb href={'/courses'} text={'CoursesTitle'} />
        <BreadCrumb type="Div" text={'comparisonTitle'} />
      </TitleSection>
      <HeadingSection />
      <div className="md:mb-20 mt-52 sm:mx-4 md:flex gap-28 justify-evenly">
        <div className="h-fit w-fit absolute md:block hidden lg:mx-0 -mt-16">
          <VsIcon />
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