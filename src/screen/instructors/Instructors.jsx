import TitleSection from "../../components/partials/title-section/TitleSection"
import {TeacherCard} from "../../components/common"
import { teachers } from "../../core/constants/instructors/teachers"

const Instructors = () => {
    return (
        <>
            <TitleSection title="همه مربیان" />
            <div className="lg:px-44 sm:px-16 px-8 w-full flex justify-center gap-x-12 gap-y-8 flex-wrap my-20">
                {teachers.map(item => <TeacherCard key={item.id} name={item.name} skill={item.skill} href={`/instructorsDetails/${item.id}`} />)}
            </div>
        </>
    )
}

export default Instructors
