import { useMediaQuery } from "react-responsive"
import { ComparisonIcon } from "../../core/icon"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import tooltipStyle from "../../core/constants/tooltip-style/tooltip"
import { Skeleton, Tooltip } from "@nextui-org/react"
import { useTranslation } from "react-i18next"

const ComparisonBtn = ({ isLoading, CourseId, comparisonId, setComparisonId }) => {
  const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
  const [selectBtn, setSelectBtn] = useState(false)
  const navigate = useNavigate()

  // Getting the ideas of the compared items
  const getId = (id) => {
    if (comparisonId) {
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
  }
  // Go to the comparison page after receiving the two selected IDs
  useEffect(() => {
    if (comparisonId) {
      if (comparisonId.length < 2) return

      navigate(`/Comparison/${comparisonId}`)
    }
  }, [comparisonId])

  const { i18n } = useTranslation()

  return (
    <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Comparison" : "مقایسه"}>
      <Skeleton isLoaded={!isLoading} className={`rounded-lg ${location.search === '?V=2' && isTabletOrLapTop ? "" : "absolute top-6 right-6 "} `}>
        <div onClick={() => { { getId(CourseId && CourseId); setSelectBtn(!selectBtn); } }} className={`${selectBtn ? "bg-SunshineYellow" : "bg-LightLavender"} w-[35px] h-[35px] flex justify-center items-center cursor-pointer  rounded-xl  comparison-btn`}>
          <ComparisonIcon width="25px" height="25px" className="stroke-[#555555] dark:stroke-[#fff]" />
        </div>
      </Skeleton>
    </Tooltip>
  )
}

export default ComparisonBtn