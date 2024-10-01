import { useState } from "react";
import { useTranslation } from "react-i18next";

const FilterRadio = ({
  title,
  setInputID,
  inputData,
}) => {
  const { t, i18n } = useTranslation();
  const [checkedData, SetCheckedData] = useState(false);
  const handleChange = (item) => {
    setInputID(item.id == undefined ? item.teacherId : item.id);
    SetCheckedData(true);
  }
  return (
    <div className="filter-box">
      <div className="flex justify-between">
        <h1 className="font-semibold pb-2">{t(title)}</h1>
        {/* Remove Filter Button */}
        <button
          className={`bg-gray-200  p-1 text-xs rounded-xl text-red-500 hover:bg-gray-300 duration-100
             ${checkedData === false ? "hidden" : ""}`
          }
          onClick={() => {
            setInputID("");
            SetCheckedData(false);
          }}
        >
          {t('removeFilters')}

        </button>
      </div>
      {inputData && inputData.map((item, index) => (
        <div
          onChange={() => { handleChange(item) }}
          key={index}
          className="text-sm flex items-center gap-2 mediumStyle_text w-fit cursor-pointer mt-1"
        >
          <input type="radio" id={title + index} name={title} className="w-4 h-4 rounded-[4px] checked:bg-[url('../icons/true.PNG')] bg-cover checked:border-none border border-gray-500 bg-white dark:bg-gray-950 appearance-none" />
          <label className="cursor-pointer" htmlFor={title + index}>{item.typeName ? item.typeName : item.levelName ? item.levelName : item.fullName}</label>
        </div>
      ))}

    </div>
  )
}

export default FilterRadio