import { useMediaQuery } from "react-responsive"
import { EventData } from "../../core/constants/Events/EventData"
import { PaginatedItems } from "../../components/common"
import TitleSection from "../../components/partials/title-section/TitleSection"

const EventList = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 530px)' })

  return (
    <>
      <TitleSection title={'EventsTitle'} />
      <div dir="ltr" className="sm:my-20 my-12 flex justify-around  flex-wrap md:w-[70%] w-11/12 gap-5 m-auto">
        <PaginatedItems itemsPerPage={isTabletOrMobile? 4 : 8} Data={EventData}/>
      </div>
    </>
  )
}

export default EventList