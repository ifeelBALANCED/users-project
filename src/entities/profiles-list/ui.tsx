import {Flex, Text, useDisclosure} from "@chakra-ui/react";
import CardNew from "../../components/CardNew";
import ProfileItem from "../profile-item/ui";
import {$addFormValues} from "./model/store";
import {useStore} from "effector-react";
import React, {FC} from 'react';
import {v4} from "uuid"

export const ProfilesList: FC = () => {
    const {profiles} = useStore($addFormValues)
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose} = useDisclosure()
    const profileItems = profiles.map((profile, idx) => {
        const titles = [
            profile.name,
            profile.gender,
            profile.birthdate,
            profile.city
        ]
        const info = titles.map((item, index) =>
            <Text
                fontWeight="500px"
                key={index}
                fontSize="24px"
                color="#4E4B66"
            >
                {item}
            </Text>
        )
        return (
            <ProfileItem
                key={v4()}
                info={info}
                onOpen={onOpen}
                profile={profile}
            />
        )
    })
    return (
        <Flex align="center" wrap="wrap">
            {profileItems}
            <Flex>
                <CardNew
                    onOpen={onOpen}
                    isEditOpen={isEditOpen}
                    onEditOpen={onEditOpen}
                    onEditClose={onEditClose}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </Flex>
        </Flex>
    )
};
