
const EventImage = ({picture}) => {
    console.log(picture)
  return (
    <img src={`../images/Events/${picture}`} className="w-full md:h-[450px]"/>
  )
}

export default EventImage