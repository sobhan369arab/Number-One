import { useParams } from "react-router-dom"
import { DetailsBox, EventImage } from "../../components/pages/EventDetails";
import TitleSection from "../../components/common/partials/TitleSection/titleSection";
import { EventData } from "../../core/constants/Events/EventData";
const EventDetails = () => {
  const { id } = useParams();
  // Find the details of the selected course
  const SelectedCourse = EventData.find(item => item.id == id);
  // console.log(SelectedCourse)

  return (
    <>
      <TitleSection title={SelectedCourse.title}/>
      <div className="w-2/3 mx-auto my-20 relative">
          <EventImage picture={SelectedCourse.img}/>
          <DetailsBox
          price={SelectedCourse.price}
          date2={SelectedCourse.date2}
          startTime={SelectedCourse.startTime}
          topics={SelectedCourse.topics}
          quizzes={SelectedCourse.quizzes}
          certifications={SelectedCourse.certifications}
          totalSeat={SelectedCourse.totalSeat}
          />
      </div>

    </>
  )
}

export default EventDetails