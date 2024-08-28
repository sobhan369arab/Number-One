import React from 'react'
import { MoonIcon, SunIcon } from '../../../core/icon'
import { Switch } from "@nextui-org/react";

const DarkModeBtn = () => {
    return (
        <Switch
            onValueChange={(event) => {console.log(event)}}
            defaultSelected
            size="md"
            color="primary"
            thumbIcon={({ isSelected }) =>
                isSelected ? (
                    <SunIcon />
                ) : (
                    <MoonIcon />
                )
            }
        />
    )
}

export default DarkModeBtn
