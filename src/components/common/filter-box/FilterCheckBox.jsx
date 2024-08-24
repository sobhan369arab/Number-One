import { useTranslation } from "react-i18next"
import { CategoryFilter } from "../../../core/constants/Filters/Filters";
import { useState } from "react";
import { CoursesDataFa } from "../../../core/constants/Courses/courses-data_Fa";

const FilterCheckBox = ({
  title,
  data,
  setData,
  labelArray
}) => {
  const { t } = useTranslation();

  // Checkbox filtering function
  const selectBtn = (e, item) => {
    let newData = [];
    if (e.target.checked) {
      item.active = true
    }
    else {
      item.active = false
    }
    let activeButton = labelArray.filter(Btn => Btn.active === true)
    activeButton.map((checkedBtn) => {
      return (
        newData.push(CoursesDataFa.filter(el => el.category == checkedBtn.value
          || el.instructor == checkedBtn.value
        ))
      )
    })
    console.log(newData)
    setData(newData.flat(Infinity));
  }



  return (
    <div className="p-5 bg-blueGray rounded-lg">
      <h1 className="font-semibold pb-2">{t(title)}</h1>
      {labelArray.map((item, index) => (
        <div
          onChange={(e) => selectBtn(e, item)}
          key={index}
          className="text-sm flex gap-2 text-gray-500 w-fit cursor-pointer mt-1"
        >
          <input type="checkbox" id={title + index} name={title} className="accent-purpleCustom rounded-xl" />
          <label htmlFor={title + index}>{item.label}</label>
        </div>
      ))}

    </div>
  )
}

export default FilterCheckBox