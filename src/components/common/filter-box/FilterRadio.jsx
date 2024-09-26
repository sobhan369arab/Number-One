import { useState } from "react";
import { useTranslation } from "react-i18next";

const FilterRadio = ({
  title,
  setCourseID,
  labelArray,
  inputId,
}) => {
  const { t, i18n } = useTranslation();
  const [checkedData, SetCheckedData] = useState(false);
  const handleChange = (item) => {
    setCourseID(item.id);
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
            setCourseID("");
            SetCheckedData(false);
          }}
        >
          {t('removeFilters')}

        </button>
      </div>
      {labelArray.map((item, index) => (
        <div
          onChange={() => { handleChange(item) }}
          key={index}
          className="text-sm flex items-center gap-2 mediumStyle_text w-fit cursor-pointer mt-1"
        >
          {/* {checkStatus === false? defaultChecked={false}:} */}
          <input checked={item.id == inputId ? true : false} type="radio" id={title + index} name={title} className="w-4 h-4 rounded-[4px] checked:bg-[url('../icons/true.PNG')] bg-cover checked:border-none border border-gray-500 bg-white dark:bg-gray-950 appearance-none" />
          <label className="cursor-pointer" htmlFor={title + index}>{i18n.language == "en" ? item.label[1] : item.label[0]}</label>
        </div>
      ))}

    </div>
  )
}

export default FilterRadio