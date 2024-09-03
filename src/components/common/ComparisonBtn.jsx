import { useMediaQuery } from "react-responsive"
import { ComparisonIcon } from "../../core/icon"

const ComparisonBtn = () => {
  const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <div className={`${location.search === '?V=2' && isTabletOrLapTop ?  "":"absolute"} p-1  bg-white rounded-xl top-5 right-5  comparison-btn`}> 
        <ComparisonIcon  className={"h-8"}/>
    </div>
  )
}

export default ComparisonBtn