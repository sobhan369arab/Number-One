import React from 'react'
import { TitleSectionPanel, ChangePassword, TwoStep, EmailRecovery } from '../../components/pages/user-panel'
import { SecurityIcon } from '../../core/icon'
import { Accordion, AccordionItem } from "@nextui-org/react";

const Security = () => {
    const itemClasses = {
        title: "font-normal text-medium w-fit px-4 mt-1 -mr-4 bg-white",
        trigger: "px-2 flex h-1 items-center border-b w-full",
        indicator: "-ml-4 mt-3 bg-white pl-2",
    };
    return (
        <div className='w-[90%] border-t border-neutral-300 flex relative justify-center'>
            <TitleSectionPanel Icon={SecurityIcon} name="تنظیمات امنیتی" />
            <div className='w-full h-fit mt-20'>
                <Accordion defaultExpandedKeys={["1", "2", "3"]} fullWidth selectionMode="multiple" className='flex flex-wrap gap-y-10' dividerProps={true} showDivider={false} itemClasses={itemClasses}>
                    <AccordionItem key="1" title="تغییر رمز عبور" className='w-full' isCompact>
                        <ChangePassword />
                    </AccordionItem>
                    <AccordionItem key="2" title="تایید ورود دو مرحله ای" className='w-full' isCompact>
                        <TwoStep />
                    </AccordionItem>
                    <AccordionItem key="3" title="ایمیل بازیابی" className='w-full' isCompact >
                        <EmailRecovery />
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Security
