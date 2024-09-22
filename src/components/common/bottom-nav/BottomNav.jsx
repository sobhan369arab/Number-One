import React from 'react'
import LanguageButton from './LanguageButton'
import ThemeButton from './ThemeButton'

const BottomNav = () => {
    return (
        <div className="flex flex-col flex-wrap gap-3 fixed left-4 bottom-20 z-50">
            <ThemeButton />
            <LanguageButton />
            <span className='w-10 h-3 bottomNav_shadow'></span>
        </div>
    )
}

export default BottomNav
