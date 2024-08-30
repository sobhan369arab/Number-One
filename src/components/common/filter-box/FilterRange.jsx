// import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const FilterRange = ({
  title,
  setPriceDown,
  setPriceUp,
  // minValue,
  // maxValue

}) => {
  const { t } = useTranslation();
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(1000000);
  console.log(maxValue)
  const handleInput = () => {
    setPriceDown(minValue)
    setPriceUp(maxValue);
  };
  return (
    <div className="p-5 bg-grayCustom rounded-lg mb-7 relative">
      <h1 className="font-semibold pb-2">{t(title)}</h1>
      <div dir="ltr">
        <MultiRangeSlider
          min={0}
          max={1000000}
          step={5000}
          minValue={minValue}
          maxValue={maxValue}
          ruler={false}
          barInnerColor="#5751E1"
          thumbLeftColor="#5751E1"
          thumbRightColor="#5751E1"
          className="border-none shadow-none py-3 mb-5"
          onInput={(e) => {
            set_minValue(e.minValue)
            set_maxValue(e.maxValue)
            handleInput();
          }}
        />
      </div>
      <div className="absolute bottom-9 right-5 text-gray-600">
        <h1>از:</h1>
        <h1>تا:</h1>
      </div>
    </div>
  )
}

export default FilterRange