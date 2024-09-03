import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import FilterSide from "./FilterSide";
import { useTranslation } from "react-i18next";
const ModalFilter = ({
    coursesData,
    SetCoursesData,
    SetCategoryData,
    SetInstructorData,
    SetLevelId,
    SetTypeId,
    SetRating,
    setPriceDown,
    setPriceUp,
    setQuery
}) => {
    const { i18n, t } = useTranslation()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} className="sticky top-3 z-50">{t('openFilter')}</Button>
            <Modal
                dir={i18n.language === 'fa' ? "rtl" : "ltr"}
                className={`${i18n.language === 'fa' ? 'font-Sahel' : 'font-Pop_Med'} `}
                size="xl"
                backdrop="opaque"
                scrollBehavior="inside"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-800/50 backdrop-opacity-90"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader onClick={onClose} className="flex flex-col gap-1">{t('filters')}</ModalHeader>
                            <ModalBody>
                                <FilterSide
                                    coursesData={coursesData}
                                    SetCoursesData={SetCoursesData}
                                    SetCategoryData={SetCategoryData}
                                    SetInstructorData={SetInstructorData}
                                    SetLevelId={SetLevelId}
                                    SetTypeId={SetTypeId}
                                    SetRating={SetRating}
                                    setPriceDown={setPriceDown}
                                    setPriceUp={setPriceUp}
                                    setQuery={setQuery} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalFilter