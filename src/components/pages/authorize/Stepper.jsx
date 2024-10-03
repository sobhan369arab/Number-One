import React from 'react'
import { CheckIcon } from '../../../core/icon'
import "./Stepper.css"
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseAction } from '../../../redux/slices/StepStatus'

const Stepper = ({ contents, steps }) => {
    const active = useSelector(state => state.StepStatus.value)
    const dispatch = useDispatch()
    const { i18n } = useTranslation()

    const handleActive = (index) => dispatch(decreaseAction(index))

    return (
        <>
            <div className='w-full sm:h-[150px] mb-10'>{contents(active)}</div>
            <div className="flex justify-center w-full">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`
                            step-item 
                            ${i18n.language == "en" ? "en-container" : "fa-container"} 
                            ${active === index + 1 && "active"} 
                            ${active > index + 1 && "complete"}
                        `}
                    >
                        <span
                            className="step"
                            onClick={() => { handleActive(index) }}
                        >{
                                index + 1 < active ? <CheckIcon /> : index + 1
                            }</span>
                        <span className="description">{step}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Stepper
