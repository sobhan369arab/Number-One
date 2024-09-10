import { useState } from "react";
import { useTranslation } from "react-i18next";

const FilterRadio = ({
  title,
  setCourseID,
  labelArray,
  inputId
}) => {
  const { t } = useTranslation();
  const [checkedData, SetCheckedData] = useState(false);
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
          onChange={() => { setCourseID(item.id); SetCheckedData(true); }}
          key={index}
          className="text-sm flex items-center gap-2 text-gray-500 w-fit cursor-pointer mt-1"
        >
          {/* {checkStatus === false? defaultChecked={false}:} */}
          <input checked={item.id == inputId ? true : false} type="radio" id={title + index} name={title} className="w-4 h-4 rounded-[4px] checked:bg-[url('../icons/true.PNG')] bg-cover checked:border-none border border-gray-500 bg-white appearance-none" />
          <label className="cursor-pointer" htmlFor={title + index}>{item.label}</label>
        </div>
      ))}

    </div>
  )
}

export default FilterRadio