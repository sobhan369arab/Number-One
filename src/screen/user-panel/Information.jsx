import React from 'react'
import { EditIcon, UserIcon } from '../../core/icon'
import { Button } from '../../components/common'
import { InformationSection } from '../../components/pages/user-panel'
import { useTranslation } from 'react-i18next'

const Information = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className='w-full sm:w-[95%] h-fit flex flex-wrap justify-center pt-5 pb-10 bg-[#C8C1ED]/30 dark:bg-[#C8C1ED]/10 border border-[#C8C1ED]/50 dark:border-[#C8C1ED]/20 shadow-md rounded-xl relative'>
      <div className={`userPanel_icons -top-6 left-[50%] translate-x-[-50%] ${i18n.language != "en" ? "md:right-12" : "md:left-12"}`}>
        <UserIcon />
      </div>
      <InformationSection section={"sectionRight"} styleSection="border-l border-LightGrayish" />
      <InformationSection section={"sectionLeft"} map />
      <Button Icon={EditIcon} href="/userPanel/editInformation" text={t("edit")} vStyle="yellow" vType={"link"} style="mt-10 w-32 justify-center" />
    </div>
  )
}

export default Information
