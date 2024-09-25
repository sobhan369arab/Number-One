import { useState } from 'react';
import Select from 'react-select';
import "./SortStyle.css"
import { useTranslation } from 'react-i18next';

const SortBox = ({ options, placeholder, setState }) => {
    const [selectedOption, SetSelectedOption] = useState(null);

    const handleChange = (selected) => {
        SetSelectedOption(selected)
        setState(selected.value)
    }

    const { i18n } = useTranslation()

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={i18n.language == "en" ? options[1] : options[0]}
            placeholder={placeholder}
            className="text-sm min-w-[150px]"
        />
    )
}

export default SortBox