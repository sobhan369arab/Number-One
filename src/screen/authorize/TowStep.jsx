import Vector from "../../assets/images/Confirmed.svg"
import { AuthorizePanel, GetCode } from '../../components/pages/authorize'

const TowStepLogin = () => {
    return (
        <AuthorizePanel Vector={Vector} >
            <div className='h-[390px]'>
                <GetCode />
            </div>
        </AuthorizePanel>
    )
}

export default TowStepLogin