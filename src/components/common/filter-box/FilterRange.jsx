// import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const FilterRange = ({
  title,
  setPriceDown,
  setPriceUp,

}) => {
  const { t } = useTranslation();
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(1000000);
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
          label={false}
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
      {/* price information */}
      <div className=" bottom-9 right-5 text-gray-600">
        <h1 className="text-gray-500">{t('from')} :<span className="text-purpleCustom mx-2">{minValue} {t('priceCount')}</span></h1>     
        <h1 className="text-gray-500 mt-2">{t('upTo')} :<span className="text-purpleCustom mx-2">{maxValue} {t('priceCount')}</span></h1>
      </div>
    </div>
  )
}

export default FilterRange