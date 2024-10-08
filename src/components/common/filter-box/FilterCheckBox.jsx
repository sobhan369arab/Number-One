import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux";

const FilterCheckBox = ({
  title,
  labelArray,
  SetFilteredData,
  setTechCount,
  refetch,
  isRefetching
}) => {
  const { t } = useTranslation();

  const Dispatch = useDispatch();

  const [checkedData, SetCheckedData] = useState(false);

  // Checkbox filtering function
  const selectBtn = (e, item) => {
    item.id.toString();
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
      Dispatch(SetFilteredData(null))
      Dispatch(setTechCount(null))
      SetCheckedData(false);
    }
    else {
      console.log(activeButton)
      Dispatch(SetFilteredData(ButtonId.toString()));
      Dispatch(setTechCount(1));
    }

  }

  return (
    <div className="filter-box max-l">
      <div className="flex justify-between">
        <h1 className="font-semibold pb-2">{t(title)}</h1>
        {/* Remove Filter Button */}
        <button
          className={`bg-gray-200  p-1 text-xs rounded-xl text-red-500 hover:bg-gray-300 duration-100
             ${checkedData === false ? "hidden" : ""}`
          }
          onClick={() => {
            Dispatch(SetFilteredData(null))
            SetCheckedData(false);
            Dispatch(setTechCount(null))
            refetch()
          }}
        >
          {t('removeFilters')}

        </button>
      </div>
      {labelArray && labelArray.map((item, index) => (
        <div
          onChange={(e) => selectBtn(e, item)}
          key={index}
          className="text-sm flex items-center gap-2 mediumStyle_text w-fit mt-1"
        >
          <input type="checkbox" checked={isRefetching ? false : null} id={title + index} name={title} className="w-4 h-4 rounded-[4px] checked:bg-[url('../icons/true.PNG')] bg-cover checked:border-none border border-gray-500 bg-white dark:bg-gray-950 appearance-none " />
          <label className="cursor-pointer" htmlFor={title + index}>{item.techName}</label>
        </div>
      ))}

    </div>
  )
}

export default FilterCheckBox