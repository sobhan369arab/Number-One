import { useMediaQuery } from "react-responsive"
import { ComparisonIcon } from "../../core/icon"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

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

  const theme = useSelector(state => state.DarkMode)

  return (
    <div onClick={() => { { getId(CourseId); setSelectBtn(!selectBtn); } }} className={`${location.search === '?V=2' && isTabletOrLapTop ? "" : "absolute"} ${selectBtn ? "bg-SunshineYellow" : "bg-LightLavender"} p-1 cursor-pointer  rounded-xl top-6 right-6  comparison-btn`}>
      <ComparisonIcon className={"h-7"} />
    </div>
  )
}

export default ComparisonBtn