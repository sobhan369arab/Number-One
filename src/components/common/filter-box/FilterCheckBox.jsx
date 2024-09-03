import { useState } from "react";
import { useTranslation } from "react-i18next"

const FilterCheckBox = ({
  title,
  data,
  setData,
  labelArray,
  SetFilteredData
}) => {
  const { t } = useTranslation();

  const [checkedData, SetCheckedData] = useState(false);
  // const [checkedStatus, SetCheckedStatus] = useState(false);

  // Checkbox filtering function
  const selectBtn = (e, item) => {
    // SetCheckedStatus(null)
    if (e.target.checked) {
      item.active = true
      SetCheckedData(true);
    }
    else {
      item.active = false
    }
    let activeButton = labelArray.filter(Btn => Btn.active === true)
    let ButtonId = [...new Set(activeButton.map((Btn) => Btn.id))]


    if (activeButton.length === 0) {
      SetFilteredData(null);
      SetCheckedData(false);
    }
    else {
      SetFilteredData(ButtonId);
    }

  }
  // useEffect(() => {
  //   if(checkedStatus === false){
  //     SetCheckedStatus(null)
  //   }

  // }, [checkedStatus])



  return (
    <div className="p-5 bg-grayCustom rounded-lg mb-7 max-l">
      <div className="flex justify-between">
        <h1 className="font-semibold pb-2">{t(title)}</h1>
        {/* Remove Filter Button */}
        <button
          className={`bg-gray-200  p-1 text-xs rounded-xl text-red-500 hover:bg-gray-300 duration-100
             ${checkedData === false ? "hidden" : ""}`
          }
          onClick={() => {
            SetFilteredData(null);
            SetCheckedData(false);
            // SetCheckedStatus(false)
          }}
        // htmlFor={title + "0"}
        >
          {t('removeFilters')}

        </button>
      </div>
      {labelArray.map((item, index) => (
        <div
          onChange={(e) => selectBtn(e, item)}
          key={index}
          className="text-sm flex items-center gap-2 text-gray-500 w-fit mt-1"
        >
          {/* {checkStatus === false? defaultChecked={false}:} */}
          <input type="checkbox" id={title + index} name={title} className="w-4 h-4 rounded-[4px] checked:bg-[url('../icons/true.PNG')] bg-cover checked:border-none border border-gray-500 bg-white appearance-none " />
          <label className="cursor-pointer" htmlFor={title + index}>{item.label}</label>
        </div>
      ))}

    </div>
  )
}

export default FilterCheckBox