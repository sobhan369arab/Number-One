import { useState } from "react"

const Spinner = () => {
    const [count, setCount] = useState(1)
    const handleIncrease = () => { setCount(count + 1) }
    const handleDecrease = () => {
        if (count < 2) return
        setCount(count - 1)
    }
    return (
        <div className="w-[116px] h-[50px] flex rounded-md border border-neutral-300 overflow-hidden">
            <button onClick={handleDecrease} className="w-1/4 border-neutral-300 text-neutral-500 hover:bg-black/5 duration-200 border-l">-</button>
            <span className="w-2/4 text-center leading-[50px]">{count}</span>
            <button onClick={handleIncrease} className="w-1/4 border-neutral-300 text-neutral-500 hover:bg-black/5 duration-200 border-r">+</button>
        </div>
    )
}

export default Spinner
