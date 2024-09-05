import { useLocation, useSearchParams } from "react-router-dom"
import { HeadingSection } from "../../components/pages/comparison"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useEffect } from "react"

const Comparison = () => {
  const [searchParams, setSearchParams] = useSearchParams({ C: [] })
  const location = useLocation();

  useEffect(() => {
    if (location.state === null) {
      console.log(location.state)
      setSearchParams({ C: location.state })
    }
  }, [location.state])

  return (
    <>
      <TitleSection title={'comparisonTitle'} />
      <HeadingSection />
    </>
  )
}

export default Comparison