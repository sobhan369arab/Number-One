import { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from 'react-select';
import { sortCal, sortMostType, sortType } from "../../core/constants/sorts/Sort";

const SortBox = ({
  label,
  setSortCal,
  setSortType
}) => {
  const { t} = useTranslation();
  const [selectedOptionCal, SetSelectedOptionCal] = useState(null);
  const [selectedOptionType, SetSelectedOptionCalType] = useState(null);

  // Filtering the trend of courses by sort
  const CalhandleChange = (selectedOption) => {
    SetSelectedOptionCal(selectedOption)
    setSortCal(selectedOption.value)
  }

  // Filtering the type of courses by sort
  const TypehandleChange = (selectedOption) => {
    SetSelectedOptionCalType(selectedOption)
    setSortType(selectedOption.value)
  }

  return (
    <div className="flex gap-3 items-center mx-auto">
      <h1 className="text-gray-600 text-sm">{t('sortBy')}</h1>
      {label === 'course' ?
        <>
          <Select
            value={selectedOptionType}
            onChange={TypehandleChange}
            options={sortType}
            placeholder={"محبوبیت"}
            className="text-sm w-32"
          />
          <Select
            value={selectedOptionCal}
            onChange={CalhandleChange}
            options={sortCal}
            placeholder={"نزولی"}
            className="text-sm w-24"
          />
        </>
        :
        <Select
          value={selectedOptionType}
          onChange={TypehandleChange}
          options={sortMostType}
          placeholder={"محبوب ترین"}
          className="text-sm w-40"
        />
      }
    </div>
  )
}

export default SortBox