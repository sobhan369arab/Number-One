import { useState } from 'react';
import "./SortStyle.css"
import { useTranslation } from 'react-i18next';
import { Select, SelectItem } from '@nextui-org/react';

const SortBox = ({ options, placeholder, setState }) => {
    const [selectedOption, SetSelectedOption] = useState(null);

    const handleChange = (selected) => {
        let findKey = options.find(obj => obj.id == selected)
        SetSelectedOption(findKey)
        setState(findKey.value)
    }

    const { i18n, t } = useTranslation()

    return (
        <Select
            radius='sm'
            aria-label="select"
            items={options}
            placeholder={placeholder}
            className="w-[150px]"
            onChange={(e) => { handleChange(e.target.value) }}
            classNames={{
                trigger: "bg-transparent border border-LightGrayish hover:!bg-transparent duration-500",
                selectorIcon: "stroke-[#5751E1]",
                value: `${i18n.language != "en" ? "border-l" : "border-r"} border-LightGrayish`,
                listboxWrapper: `font-IranSans ${i18n.language != "en" && "select_dir"}`
            }}
        >
            {(options) => <SelectItem>{t(options.label)}</SelectItem>}
        </Select>
    )
}

export default SortBox