import { Modal, ModalContent, ModalBody } from "@nextui-org/react"

const CreateModal = ({ children, isOpen, onClose }) => {
    return (
        <Modal size="4xl" backdrop={"blur"} isOpen={isOpen} onClose={onClose} hideCloseButton>
            <ModalContent className="bg-[#525252]/70 p-3">
                <ModalBody className="flex flex-row flex-wrap justify-center gap-y-10 py-10 sm:py-20 px-10 sm:px-32 relative">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CreateModal
