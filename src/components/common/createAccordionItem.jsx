import { AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useTranslation } from 'react-i18next';

const CreateAccordionItem = ({ label, content }) => {
    const buttonStyle = {
        color: "#6D6C80",
        display: "flex",
        background: "none",
        padding: "18px 0",
        borderBottom: "1px solid #B2BBCC"
    }
    const { i18n } = useTranslation()
    return (
        <AccordionItem className="border-none">
            <AccordionItemHeading className='mobile:bg-neutral-300 sm:bg-none rounded-xl px-2 my-2'>
                <AccordionItemButton dir={i18n.language === "en" ? "rtl" : "ltr"} style={buttonStyle}>
                    <span className={`w-full ${i18n.language === "en" ? "text-left" : "text-right"} text-titleColor`}>{label}</span>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-start mobile:bg-neutral-200 sm:bg-none text-sm py-5 px-2 rounded-xl text-titleColor">
                <p>
                    {content}
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    )
}

export default CreateAccordionItem