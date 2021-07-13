import {deleteProfile, Profile} from "../profiles-list/model/events";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import {Button, Flex, Text} from "@chakra-ui/react";
import React, {FC} from 'react';
import {v4} from "uuid"

type ProfileItemProps = {
    profile: Profile,
    info: JSX.Element[]
    onOpen: () => void
}
const ProfileItem: FC<ProfileItemProps> = ({
   profile: {id},
   info,
   onOpen
}) => {
    return (
        <Flex
            background="rgba(255, 255, 255, 0.5)"
            border="1px solid #D6D8E7"
            borderRadius="16px"
            flexDir="column"
            cursor="pointer"
            flex="0 0 21%"
            m="30px"
            h="299px"
            justify="center"
            align="center"
            key={v4()}
        >
            <Flex
                flexDir="column"
                justify="center"
                align="center"
                m="35px 86px"
            >
                {info}
            </Flex>
            <Flex
                borderRadius="0px 0px 16px 16px"
                border="1px solid #D6D8E7"
                justify="center"
                align="center"
                flexDir="row"
                mt="auto"
                w="100%"
            >
                <Button
                    flex="0 0 50%"
                    bg="none"
                    borderRadius="0px 0px 0px 16px"
                    onClick={onOpen}
                    _hover={{background: "#624AF2", color: "#FCFCFC"}}
                >
                    <Text mr="7px">edit</Text> <EditIcon/>
                </Button>
                <Button
                    flex="0 0 50%"
                    borderRadius="0px 0px 16px 0"
                    bg="none"
                    onClick={() => deleteProfile(id)}
                    _hover={{background: "#EB0055", color: "#FCFCFC"}}
                >
                    <Text mr="7px">delete</Text> <DeleteIcon/>
                </Button>
            </Flex>
        </Flex>
    );
};

export default ProfileItem;
