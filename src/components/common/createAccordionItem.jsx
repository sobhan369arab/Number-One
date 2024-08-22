import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const CreateAccordionItem = ({ label, content }) => {
    const buttonStyle = {
        color: "#6D6C80",
        display: "flex",
        background: "none",
        padding: "18px 0",
        borderBottom: "2px solid #B2BBCC"
    }
    return (
        <AccordionItem className="border-none">
            <AccordionItemHeading>
                <AccordionItemButton dir="ltr" style={buttonStyle}>
                    <span className="w-full text-right">{label}</span>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-right text-sm py-5 text-[#1C1A4A]">
                <p>
                    {content}
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    )
}

export default CreateAccordionItem