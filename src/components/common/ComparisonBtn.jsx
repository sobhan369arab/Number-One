import { ComparisonIcon } from "../../core/icon"

const ComparisonBtn = () => {
  return (
    <div className={`${location.search === '?V=1'? "absolute":""} p-1  bg-white rounded-xl top-5 right-5  comparison-btn`}> 
        <ComparisonIcon  className={"h-8"}/>
    </div>
  )
}

export default ComparisonBtn