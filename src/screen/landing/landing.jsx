import { Fragment } from "react"
import {
  AboutUs,
  Categories,
  Faq,
  HeroSection,
  LastBlogs,
  SkilledTeachers,
  Statistics,
  TopCourses
} from "../../components/pages/landing/"
import { InformedPoster, HowToStart } from "../../components/common"

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
