import { useMediaQuery } from "react-responsive"
import { ComparisonIcon } from "../../core/icon"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import tooltipStyle from "../../core/constants/tooltip-style/tooltip"
import { Tooltip } from "@nextui-org/react"
import { useTranslation } from "react-i18next"

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

  const { i18n } = useTranslation()

  return (
    <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Comparison" : "مقایسه"}>
      <div onClick={() => { { getId(CourseId); setSelectBtn(!selectBtn); } }} className={`${location.search === '?V=2' && isTabletOrLapTop ? "" : "absolute"} ${selectBtn ? "bg-SunshineYellow" : "bg-LightLavender"} w-[35px] h-[35px] flex justify-center items-center cursor-pointer  rounded-xl top-6 right-6  comparison-btn`}>
        <ComparisonIcon width="25px" height="25px" />
      </div>
    </Tooltip>
  )
}

export default ComparisonBtn