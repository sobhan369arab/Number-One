
import { useLocation, useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import { ButtonData } from "../../../core/constants/Courses/ChangeBtn_Data";

const ChangeView = ({ setShowGrid }) => {
    const [searchParams, setSearchParams] = useSearchParams({ V: 1 })
    const location = useLocation();

    const SearchParams = (id) => {
        setSearchParams({ V: id });
    };

    useEffect(() => {
        if (location.search === '?V=1') {
            setShowGrid(false)
        }
        else {
            setShowGrid(true)
        }
        setSearchParams(searchParams);
    }, [searchParams])

    return (
        <div className="md:flex hidden gap-2">
            {ButtonData.map((Button, index) => (
                <div key={index} onClick={() => SearchParams(Button.id)} className={`${location.search == `?V=${Button.id}` ? "bg-VioletBlue" : "bg-transparent"} cursor-pointer border border-VioletBlue p-2 rounded-md`}>
                    <Button.icon stroke={location.search == `?V=${Button.id}` ? "#fff" : "#5751E1"} />
                </div>
            ))}
        </div>

    )
}

export default ChangeView