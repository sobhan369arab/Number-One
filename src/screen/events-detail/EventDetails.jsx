import { useParams } from "react-router-dom"
import { DetailsBox, EventElements, EventImage, EventOverView } from "../../components/pages/event-details";
import TitleSection from "../../components/partials/title-section/TitleSection";
import { EventData } from "../../core/constants/Events/EventData";
import { CommentSection, CustomMap, Title_details } from "../../components/common";
import { CertificationsIcon, DateIcon, QuizzesIcon, TimeIcon, TopicsIcon, TotalIcon } from "../../core/icon";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../../components/partials/title-section/BreadCrumb";
const EventDetails = () => {
  const { i18n } = useTranslation();
  const { id } = useParams();
  // Find the details of the selected event
  let SelectedEvents = EventData.find(item => item.id == id);
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
      <TitleSection title={SelectedEvents.title} >
        <BreadCrumb href={'/Events'} text={'EventsTitle'} />
        <BreadCrumb type="Div" text={SelectedEvents.title} />
      </TitleSection>
      <div className="xl:w-9/12 w-[88%]  mx-auto my-20 relative  cursor-default">
        <EventImage picture={SelectedEvents.img} />
        <Title_details
          title={SelectedEvents.title}
          creator={SelectedEvents.createBy}
          NumberStudents={SelectedEvents.students}
          Score={SelectedEvents.score}
          differentDetail={SelectedEvents.city}
          category={SelectedEvents.category}
          variant={"event-detail"}
        />
        <DetailsBox
          variant="event-detail"
          price={SelectedEvents.price}
          Detail={DetailsEvent}
          arrowColor={"#fff"}
          colorButton={"purple"}
          btnText={"Join"}
          detailInfo={"EventInfo"}
          priceInfo={"EventPrice"}
        />
        <EventOverView
          overView={SelectedEvents.overView}
          training={SelectedEvents.training}
        />
        <EventElements
          MajorElements={SelectedEvents.MajorElements}
          training={SelectedEvents.training}
        />
        <div className="w-3/5">
          <CommentSection />
        </div>
        <div className={`${i18n.language === 'fa' ? 'left-7' : 'right-7'} md:absolute m-auto mt-6 top-[1030px] Box-shadow1 p-5 w-fit bg-white rounded-lg border border-neutral-300`}>
          <CustomMap width="208px" />
        </div>

      </div>
    </>
  )
}

export default EventDetails