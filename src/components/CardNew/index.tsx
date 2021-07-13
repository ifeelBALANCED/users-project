import {Box, Flex, Text} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {AddModal} from "../AddModal";
import React, {FC} from 'react';
import {EditModal} from "../EditModal";
import {Profile} from "../../entities/profiles-list/model/events";

type CardNewProps = {
    isOpen: boolean
    isEditOpen: boolean
    onEditOpen: () => void
    onEditClose: () => void
    onOpen: () => void
    onClose: () => void
}
export const CardNew: FC<CardNewProps> = ({onOpen, isOpen, isEditOpen, onEditOpen, onEditClose, onClose}) => {

    return (
        <Flex
            background="rgba(255, 255, 255, 0.5)"
            border="1px solid #D6D8E7"
            borderRadius="16px"
            cursor="pointer"
            justify="center"
            align="center"
            m="40px"
            minW="320px"
            minH="297px"
        >
            <Flex
                flexDir="column"
                justify="center"
                align="center"
            >
                <Box
                    p="14px"
                    borderRadius="50%"
                    border="2px solid #4E4B66"
                    onClick={onOpen}
                >
                    <AddIcon
                        w="42px"
                        h="42px"
                    />
                </Box>
                <Text
                    fontFamily="Poppins"
                    fontSize="20px"
                    color="#4E4B66"
                    mt="30px"
                >
                    Create new profile
                </Text>
                <EditModal
                    isEditOpen={isEditOpen}
                    onEditOpen={onEditOpen}
                    onEditClose={onEditClose}
                />
                <AddModal
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </Flex>
        </Flex>
    );
};

export default CardNew;
