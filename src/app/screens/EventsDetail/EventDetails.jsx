import { useParams } from "react-router-dom"
import TitleSection from "../../partials/TitleSection/titleSection";
import { EventData } from "../../data/EventData";
import EventImage from "../../components/EventDetails/EventImage";
const EventDetails = () => {
  const { id } = useParams();
  // Find the details of the selected course
  const SelectedCourse = EventData.find(item => item.id == id);
  // console.log(SelectedCourse)

  return (
    <>
      <TitleSection title={SelectedCourse.title}/>
      <div className="w-2/3 mx-auto my-20">
          <EventImage picture={SelectedCourse.img}/>
      </div>

    </>
  )
}

export default EventDetails