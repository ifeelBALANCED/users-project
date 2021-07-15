import {
    clearInputs, updateProfileBirthdate,
    updateProfileCity,
    updateProfileGender,
    updateProfileName
} from "../../../entities/profiles-list/model/events";
import {$addFormValues} from "../../../entities/profiles-list/model/store";
import {CheckIcon, SmallCloseIcon} from "@chakra-ui/icons";
import {Button, Flex} from "@chakra-ui/react";
import FormInput from "../../../shared/ui/input";
import React, {FC, FormEvent} from 'react';
import {useStore} from "effector-react";
import Form from "../../Form";

type EditFormProps = {
    id: number
    onClose: () => void
}
export const EditForm: FC<EditFormProps> = ({onClose, id}) => {
    const {newName, newGender, newBirthdate, newCity} = useStore($addFormValues)
    const onEditFormSubmit = (e: FormEvent<HTMLElement>): void => {
        e.preventDefault()
        clearInputs()
    }
    const disableName = !newName.length
    const disableGender = !newGender.length
    const disableBirth = !newBirthdate.length
    const disableButton = !newCity.length
    return (
        <Form onSubmit={onEditFormSubmit} pt="70px">
            <FormInput
                text="name:"
                value={newName}
                onChange={({target: {value}}) => updateProfileName({
                    id, name: value
                })}
                placeholder="Enter name..."
            />
            <FormInput
                text="gender:"
                value={newGender}
                disabled={disableName}
                onChange={({target: {value}}) => updateProfileGender({
                    id, gender: value
                })}
                placeholder="Enter gender..."
            />
            <FormInput
                text="birthdate:"
                value={newBirthdate}
                disabled={disableGender}
                onChange={({target: {value}}) => updateProfileBirthdate({
                    id, birthdate: value
                })}
                type="date"
            />
            <FormInput
                text="city:"
                value={newCity}
                disabled={disableBirth}
                onChange={({target: {value}}) => updateProfileCity({
                    id, city: value
                })}
                placeholder="Enter city..."
            />
            <Flex
                w="250px"
                m="50px auto 70px auto"
                justify="space-around"
                align="center"
            >
                <Button
                    colorScheme="teal"
                    variant="outline"
                    disabled={disableButton}
                    type="submit"
                    w="100px"
                >
                    <CheckIcon/>
                </Button>
                <Button
                    colorScheme="teal"
                    variant="outline"
                    onClick={onClose}
                    w="100px"
                >
                    <SmallCloseIcon/>
                </Button>
            </Flex>
        </Form>
    );
};
