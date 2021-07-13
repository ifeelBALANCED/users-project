import React, {FC} from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react"
import {AddForm} from "./AddForm";

type AddModalProps = {
    isOpen: boolean
    onClose: () => void
}
export const AddModal: FC<AddModalProps> = ({isOpen, onClose}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="xl"
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalBody>
                    <AddForm onClose={onClose} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
