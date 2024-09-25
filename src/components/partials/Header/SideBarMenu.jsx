import MediaQuery from "react-responsive"
import { Button, LogoGroup } from "../../common"

const SideBarMenu = ({ basketItems, menuItems }) => {
    return (
        <div className="mx-auto my-12 h-4/5">
            <MediaQuery maxWidth={'768px'}>
                <div className="flex gap-3 justify-between">
                    <Button href={"/authorize/login"} disableArrow={'hidden'} vType={'link'} vStyle={"yellow"} style={'shadow-none !pt-2 !pb-2 !h-fit'} text={'Login'} />
                    <div className="flex gap-1">
                        {basketItems}
                    </div>
                </div>
            </MediaQuery>
            <div>
                {menuItems}
            </div>
            <div className="bg-LightGray w-fit p-2 rounded-full mt-28 mx-auto">
                <LogoGroup />
            </div>
        </div>
    )
}

export default SideBarMenu