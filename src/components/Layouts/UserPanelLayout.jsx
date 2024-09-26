import React from 'react'
import UserPanelHeader from '../partials/user-panel-header/UserPanelHeader'
import { SidebarUserPanel } from '../pages/user-panel'
import { Link, Outlet } from 'react-router-dom'
import { HomeBtnPanelIcon } from '../../core/icon'
import MediaQuery from 'react-responsive'
import { HamburgerMenu, DarkModeBtn } from '../common'
import { Tooltip } from '@nextui-org/react'
import tooltipStyle from '../../core/constants/tooltip-style/tooltip'
import { useTranslation } from 'react-i18next'

const UserPanelLayout = () => {
    const { i18n } = useTranslation()

    return (
        <div className='py-20 flex flex-wrap gap-y-10 sm:px-16 px-8'>
            <UserPanelHeader />
            <div className='relative w-full lg:h-[813px] flex rounded-2xl overflow-hidden sm:userPanel_holder_shadow'>
                <MediaQuery minWidth="1280px">
                    <div className='min-w-[308px] w-[308px] bg-VioletBlue dark:bg-[#1B1B2A] flex justify-center flex-wrap py-12'>
                        <SidebarUserPanel />
                    </div>
                </MediaQuery>
                <div className='w-full h-full flex flex-wrap sm:p-6'>
                    <div className='w-full h-fit flex items-center justify-between xl:justify-end'>
                        <MediaQuery maxWidth="1279px">
                            <HamburgerMenu width={308} style="bg-VioletBlue dark:bg-LightLavender flex justify-center flex-wrap pt-12 pb-20">
                                <SidebarUserPanel />
                            </HamburgerMenu>
                        </MediaQuery>
                        <div className='flex gap-x-4 items-center'>
                            <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Home" : "خانه"}>
                                <Link to="/" className='cursor-pointer hover:scale-110 duration-200'>
                                    <HomeBtnPanelIcon width="30" height="30" fill="#5751E1" />
                                </Link>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='w-full h-full py-14 flex justify-center'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPanelLayout
