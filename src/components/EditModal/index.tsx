import React, {FC} from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react"
import {EditForm} from "./EditForm";

type EditModalProps = {
    isEditOpen: boolean
    onEditOpen: () => void
    onEditClose: () => void
}
export const EditModal: FC<EditModalProps> = ({isEditOpen, onEditOpen, onEditClose}) => {
    return (
        <Modal
            isOpen={isEditOpen}
            onClose={onEditOpen}
            size="xl"
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalBody>
                    <EditForm id={1} onClose={onEditClose} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
