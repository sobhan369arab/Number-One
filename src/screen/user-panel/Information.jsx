import React from 'react'
import { EditIcon, UserIcon } from '../../core/icon'
import { Button } from '../../components/common'
import { InformationSection } from '../../components/pages/user-panel'

const Information = () => {
  const userState = {
    name: "محمد رضا ساداتی",
    nationalCode: 3982221548,
    email: "preator102@gmail.com",
    dateOfBirth: "۸۵ / ۰۵ / ۱۱",
    gender: "مرد",
    aboutMe: "",
    mobileNumber: "۰۹۳۹۹۹۹۹۹۹۹",
    telegram: "",
    linkedIn: "",
    address: "مازندران - ساری - میدان خزر - جاده فرح آباد",
    longitude: "",
    latitude: ""
  }
  return (
    <div className='w-[95%] h-fit flex flex-wrap justify-center pt-5 pb-10 bg-[#C8C1ED]/30 border border-[#C8C1ED]/50 shadow-md rounded-xl relative'>
      <div className='userPanel_icons -top-6 right-12'>
        <UserIcon />
      </div>
      <InformationSection section={"sectionRight"} state={userState} styleSection="border-l border-neutral-300" />
      <InformationSection section={"sectionLeft"} state={userState} map />
      <Button Icon={EditIcon} href="/userPanel/editInformation" text="ویرایش" variant="yellow" style="mt-10 w-32 justify-center" />
    </div>
  )
}

export default Information
