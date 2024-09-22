import { LogoGroup } from "../../common"

const UserPanelHeader = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <LogoGroup color={'text-VioletBlue'} />
      <div className="h-full flex items-end gap-x-8">
      </div>
    </div>
  )
}

export default UserPanelHeader
