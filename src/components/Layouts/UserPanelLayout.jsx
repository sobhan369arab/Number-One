import React from 'react'
import UserPanelHeader from '../partials/user-panel-header/UserPanelHeader'
import { DarkModeBtn, SidebarUserPanel } from '../pages/user-panel'
import { Link, Outlet } from 'react-router-dom'
import { HomeBtnPanelIcon } from '../../core/icon'

const UserPanelLayout = () => {
    return (
        <div dir='rtl' className='p-20 px-44 flex flex-wrap gap-y-10 font-IranSans'>
            <UserPanelHeader />
            <div className='w-full h-[813px] flex rounded-2xl overflow-hidden userPanel_holder_shadow'>
                <SidebarUserPanel />
                <div className='w-full h-full flex flex-wrap p-6'>
                    <div className='w-full h-fit flex items-center gap-x-4 justify-end'>
                        <DarkModeBtn />
                        <Link to="/" className='cursor-pointer'><HomeBtnPanelIcon width="30" height="30" fill="#5751E1" /></Link>
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
