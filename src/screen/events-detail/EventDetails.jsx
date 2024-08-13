import { useParams } from "react-router-dom"
import { DetailsBox, EventElements, EventImage, EventOverView, EventTitle, Map } from "../../components/pages/event-details";
import TitleSection from "../../components/partials/TitleSection/titleSection";
import { EventData } from "../../core/constants/Events/EventData";
const EventDetails = () => {
  const { id } = useParams();
  // Find the details of the selected course
  const SelectedCourse = EventData.find(item => item.id == id);
  // console.log(SelectedCourse)

  return (
    <>
      <TitleSection title={SelectedCourse.title} />
      <div className="xl:w-9/12 w-[88%]  mx-auto my-20 relative lg:h-[1290px] cursor-default">
        <EventImage picture={SelectedCourse.img} />
        <EventTitle
          title={SelectedCourse.title}
          location={SelectedCourse.city}
          NumberStudents={SelectedCourse.students}
          creator={SelectedCourse.createBy}
          Score={SelectedCourse.score}
        />
        <DetailsBox
          price={SelectedCourse.price}
          date2={SelectedCourse.date2}
          startTime={SelectedCourse.startTime}
          topics={SelectedCourse.topics}
          quizzes={SelectedCourse.quizzes}
          certifications={SelectedCourse.certifications}
          totalSeat={SelectedCourse.totalSeat}
        />
        <EventOverView
          overView={SelectedCourse.overView}
          training={SelectedCourse.training}
        />
        <EventElements
          MajorElements={SelectedCourse.MajorElements}
          training={SelectedCourse.training}
        />
        <Map />

      </div>
    </>
  )
}

export default EventDetails