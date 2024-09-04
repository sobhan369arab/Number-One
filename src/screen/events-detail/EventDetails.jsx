import { useParams } from "react-router-dom"
import { DetailsBox, EventElements, EventImage, EventOverView, EventTitle} from "../../components/pages/event-details";
import TitleSection from "../../components/partials/title-section/TitleSection";
import { EventData } from "../../core/constants/Events/EventData";
import { CustomMap } from "../../components/common";
const EventDetails = () => {
  const { id } = useParams();
  // Find the details of the selected event
  const SelectedEvents = EventData.find(item => item.id == id);

  return (
    <>
      <TitleSection title={SelectedEvents.title} />
      <div className="xl:w-9/12 w-[88%]  mx-auto my-20 relative lg:h-[1290px] cursor-default">
        <EventImage picture={SelectedEvents.img} />
        <EventTitle
          title={SelectedEvents.title}
          location={SelectedEvents.city}
          NumberStudents={SelectedEvents.students}
          creator={SelectedEvents.createBy}
          Score={SelectedEvents.score}
        />
        <DetailsBox
          price={SelectedEvents.price}
          date2={SelectedEvents.date2}
          startTime={SelectedEvents.startTime}
          topics={SelectedEvents.topics}
          quizzes={SelectedEvents.quizzes}
          certifications={SelectedEvents.certifications}
          totalSeat={SelectedEvents.totalSeat}
        />
        <EventOverView
          overView={SelectedEvents.overView}
          training={SelectedEvents.training}
        />
        <EventElements
          MajorElements={SelectedEvents.MajorElements}
          training={SelectedEvents.training}
        />
        <CustomMap/>

      </div>
    </>
  )
}

export default EventDetails