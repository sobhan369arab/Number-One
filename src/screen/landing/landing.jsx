import { Fragment } from "react"
import {
  AboutUs,
  Categories,
  Faq,
  HeroSection,
  HowToStart,
  LastBlogs,
  SkilledTeachers,
  Statistics,
  TopCourses
} from "../../components/pages/landing/"
import InformedPoster from "../../components/common/informedPoster"

const Landing = () => {
  return (
    <Fragment>
      <HeroSection />
      <Categories />
      <AboutUs />
      <TopCourses />
      <InformedPoster />
      <SkilledTeachers />
      <Statistics />
      <Faq />
      <HowToStart />
      <LastBlogs />
    </Fragment>
  )
}

export default Landing
