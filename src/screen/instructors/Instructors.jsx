import TitleSection from "../../components/partials/title-section/TitleSection"
import { calculatePageCount, handlePageClick, PaginatedItems, PaginateHolderItems, TeacherCard } from "../../components/common"
import { teachers } from "../../core/constants/instructors/teachers"
import { useTranslation } from "react-i18next"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import { useState } from "react"

const Instructors = () => {
    const { t } = useTranslation()
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + 9;
    const currentItems = teachers.slice(itemOffset, endOffset);
    return (
        <>
            <TitleSection title={t("instructorsTitle")} >
                <BreadCrumb type="Div" text="instructorsTitle" />
            </TitleSection>
            <PaginateHolderItems style="justify-center">
                <PaginatedItems handlePageClick={(event) => { handlePageClick(event, 9, setItemOffset, teachers) }} pageCount={calculatePageCount(teachers, 9)}>
                    <div className="lg:px-44 sm:px-16 px-8 w-full flex justify-evenly gap-x-12 gap-y-8 flex-wrap my-20">
                        {currentItems.map(item => (
                            <TeacherCard
                                key={item.id}
                                name={item.name}
                                skill={item.skill}
                                href={`/instructorsDetails/${item.id}`}
                            />
                        ))}
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </>
    )
}

export default Instructors
