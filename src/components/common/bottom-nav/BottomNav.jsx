import React from 'react'
import LanguageButton from './LanguageButton'
import ThemeButton from './ThemeButton'
import ScrollToUpButton from './ScrollToUpButton'

const BottomNav = () => {
    return (
        <>
            <div className="flex flex-col flex-wrap gap-3 fixed left-5 bottom-20 z-50">
                <ThemeButton />
                <LanguageButton />
                <span className='w-10 h-3 bottomNav_shadow'></span>
            </div>
            <div className='fixed right-6 bottom-24 z-50'>
                <ScrollToUpButton />
            </div>
        </>
    )
}

export default BottomNav
