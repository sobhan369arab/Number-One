import { useState } from "react";
import { useTranslation } from "react-i18next"

const FilterCheckBox = ({
  title,
  labelArray,
  SetFilteredData,
  filteredData
}) => {
  const { t, i18n } = useTranslation();

  const [checkedData, SetCheckedData] = useState(false);

  // Checkbox filtering function
  const selectBtn = (e, item) => {
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
            SetFilteredData(null);
            SetCheckedData(false);
          }}
        >
          {t('removeFilters')}

        </button>
      </div>
      {labelArray.map((item, index) => (
        <div
          onChange={(e) => selectBtn(e, item)}
          key={index}
          className="text-sm flex items-center gap-2 mediumStyle_text w-fit mt-1"
        >
          <input type="checkbox" id={title + index} name={title} className="w-4 h-4 rounded-[4px] checked:bg-[url('../icons/true.PNG')] bg-cover checked:border-none border border-gray-500 bg-white dark:bg-gray-950 appearance-none " />
          <label className="cursor-pointer" htmlFor={title + index}>{i18n.language == "en" ? item.label[1] : item.label[0]}</label>
        </div>
      ))}

    </div>
  )
}

export default FilterCheckBox