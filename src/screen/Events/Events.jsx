import { useMediaQuery } from "react-responsive"
import { EventData } from "../../core/constants/Events/EventData"
import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount } from "../../components/common"
import TitleSection from "../../components/partials/title-section/TitleSection"
import Event from "../../components/pages/event/Event"
import { useState } from "react"

const EventList = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 530px)' })

  const [itemOffset, setItemOffset] = useState(0);
  
  const endOffset = itemOffset + 8;
  const currentItems = EventData.slice(itemOffset, endOffset);

  return (
    <>
      <TitleSection title={'EventsTitle'} />
      <div dir="ltr" className="sm:my-20 my-12 flex justify-around flex-wrap md:w-[70%] w-11/12 gap-5 m-auto">
        <PaginateHolderItems style="justify-center">
          <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 8, setItemOffset, EventData) }} pageCount={calculatePageCount(EventData, 8)}>
            <div className="flex flex-wrap gap-x-2 justify-around gap-y-8 w-full">
              {currentItems.map((item, index) => <Event key={index} id={item.id} title={item.title} date={item.date} location={item.city} images={item.img} />)}
            </div>
          </PaginatedItems>
        </PaginateHolderItems>
      </div>
    </>
  )
}

export default EventList