import { NavLink, useLocation } from "react-router-dom"

const SidebarButton = ({ href, name, Icon }) => {
    const location = useLocation()
    const activeStyle = {
        background: "#fff",
        boxShadow: "3px 5px 0px 0px #050071",
        borderLeftWidth: "4px",
        borderLeftColor: "#ffc224",
        color: "#161439"
    }
    return (
        <NavLink to={href} end={true} className="w-full h-fit flex text-white items-center gap-x-5 rounded-r-full pr-6 py-2.5 duration-200" style={({ isActive }) => (isActive ? activeStyle : null)}>
            <div className="w-6 h-5 flex justify-center items-center">
                {location.pathname.toLowerCase() == href.toLowerCase() ? <Icon /> : null}
            </div>
            <span>{name}</span>
        </NavLink>
    )
}

export default SidebarButton
