import { useMediaQuery } from "react-responsive"
import { ComparisonIcon } from "../../core/icon"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const ComparisonBtn = ({ CourseId, comparisonId, setComparisonId }) => {
  const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
  const [selectBtn, setSelectBtn] = useState(false)
  const navigate = useNavigate()

  // Getting the ideas of the compared items
  const getId = (id) => {
    if (!selectBtn) {
      let ArrayId = comparisonId.find(Id => Id == id)
      if (ArrayId != undefined) return
      if (comparisonId.length < 2) {
        setComparisonId([...comparisonId, id])
      }
    }
    else {
      setComparisonId([])
    }
  }
  // Go to the comparison page after receiving the two selected IDs
  useEffect(() => {
    if (comparisonId.length < 2) return

    navigate(`/Comparison/${comparisonId}`)

  }, [comparisonId])

  return (
    <div onClick={() => { { getId(CourseId); setSelectBtn(!selectBtn); } }} className={`${location.search === '?V=2' && isTabletOrLapTop ? "" : "absolute"} ${selectBtn ? "bg-yellow-300" : "bg-white"} p-1   rounded-xl top-5 right-5  comparison-btn`}>
      <ComparisonIcon className={"h-7"} />
    </div>
  )
}

export default ComparisonBtn