import BreadCrumb from "./breadCrumb"
import TitlePage from "./titlePage"

const TitleSection = ({title}) => {
  return (
    <div className="bg-[url(./images/Section.png)] bg-cover ">
      <div className="py-20 mx-44">
        <TitlePage title={title} />
        <BreadCrumb />
      </div>
    </div>
  )
}

export default TitleSection