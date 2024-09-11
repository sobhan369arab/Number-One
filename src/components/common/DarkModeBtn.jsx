import React from 'react'
import { MoonIcon, SunIcon } from '../../core/icon'
import { Switch } from "@nextui-org/react";

const DarkModeBtn = () => {
    return (
        <Switch
            onValueChange={(event) => {console.log(event)}}
            size="md"
            color="primary"
            thumbIcon={({ isSelected }) =>
                isSelected ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )
            }
        />
    )
}

export default DarkModeBtn
