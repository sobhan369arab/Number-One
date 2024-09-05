import { useParams } from "react-router-dom"
import { DetailsBox, EventElements, EventImage, EventOverView, EventTitle } from "../../components/pages/event-details";
import TitleSection from "../../components/partials/title-section/TitleSection";
import { EventData } from "../../core/constants/Events/EventData";
import { CustomMap } from "../../components/common";
import { CertificationsIcon, DateIcon, QuizzesIcon, TimeIcon, TopicsIcon, TotalIcon } from "../../core/icon";
const EventDetails = () => {
  const { id } = useParams();
  // Find the details of the selected event
  const SelectedEvents = EventData.find(item => item.id == id);
  const DetailsEvent = [
    { titleDetail: "eventDate", countDetail: SelectedEvents.date2, iconDetail: DateIcon },
    { titleDetail: "StartTime", countDetail: SelectedEvents.startTime, iconDetail: TimeIcon },
    { titleDetail: "EventTopics", countDetail: SelectedEvents.topics, iconDetail: TopicsIcon },
    { titleDetail: "EventQuizzes", countDetail: SelectedEvents.quizzes, iconDetail: QuizzesIcon },
    { titleDetail: "EventCertifications", countDetail: SelectedEvents.certifications, iconDetail: CertificationsIcon },
    { titleDetail: "EventTotalSeat", countDetail: SelectedEvents.totalSeat, iconDetail: TotalIcon }
  ]

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
          variant="event-detail"
          price={SelectedEvents.price}
          Detail={DetailsEvent}
          arrowColor={"#fff"}
          colorButton={"purple"}
          btnText={"Join"}
        />
        <EventOverView
          overView={SelectedEvents.overView}
          training={SelectedEvents.training}
        />
        <EventElements
          MajorElements={SelectedEvents.MajorElements}
          training={SelectedEvents.training}
        />
        <CustomMap />

      </div>
    </>
  )
}

export default EventDetails