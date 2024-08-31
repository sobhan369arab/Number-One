import { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from 'react-select';
import { sortCal, sortType } from "../../core/constants/sorts/Sort";

const SortBox = ({
  data,
  allDataNumber,
  setSortCal,
  setSortType
}) => {
  const { t } = useTranslation();
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
    <div className="w-[87%] flex items-center justify-between mr-2">
      <h1 className="text-gray-600">{t('show')} <span className="text-blue-600">{data.length}</span>  {t('result')} {allDataNumber}</h1>
      <div className="flex gap-3 items-center">
        <h1 className="text-gray-600 text-sm">{t('sortBy')}</h1>
        <div >
          <Select
            value={selectedOptionType}
            onChange={TypehandleChange}
            options={sortType}
            placeholder={"محبوبیت"}
            className="text-sm w-32 "
          />
        </div>
        <Select
          value={selectedOptionCal}
          onChange={CalhandleChange}
          options={sortCal}
          placeholder={"نزولی"}
          className="text-sm   w-24"
        />

      </div>
    </div>
  )
}

export default SortBox