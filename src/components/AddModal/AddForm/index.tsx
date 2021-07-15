import {
    setNewName,
    setNewGender,
    setNewBirthdate,
    setNewCity,
    addProfile, clearInputs
} from "../../../entities/profiles-list/model/events";
import {$addFormValues} from "../../../entities/profiles-list/model/store";
import {CheckIcon, SmallCloseIcon} from "@chakra-ui/icons";
import {Button, Flex} from "@chakra-ui/react";
import FormInput from "../../../shared/ui/input";
import React, {FC, FormEvent} from 'react';
import {useStore} from "effector-react";
import Form from "../../Form";

type AddFormProps = {
    onClose: () => void
}
export const AddForm: FC<AddFormProps> = ({onClose}) => {
    const {newName, newGender, newBirthdate, newCity} = useStore($addFormValues)
    const onAddFormSubmit = (e: FormEvent<HTMLElement>): void => {
        e.preventDefault()
        clearInputs()
    }
    const disableName = !newName.length
    const disableGender = !newGender.length
    const disableBirth = !newBirthdate.length
    const disableButton = !newCity.length
    return (
        <Form onSubmit={onAddFormSubmit} pt="70px">
            <FormInput
                text="name:"
                value={newName}
                onChange={({target: {value}}) => setNewName(value)}
                placeholder="Enter name..."
            />
            <FormInput
                text="gender:"
                value={newGender}
                disabled={disableName}
                onChange={({target: {value}}) => setNewGender(value)}
                placeholder="Enter gender..."
            />
            <FormInput
                text="birthdate:"
                value={newBirthdate}
                disabled={disableGender}
                onChange={({target: {value}}) => setNewBirthdate(value)}
                type="date"
            />
            <FormInput
                text="city:"
                value={newCity}
                disabled={disableBirth}
                onChange={({target: {value}}) => setNewCity(value)}
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
                    onClick={() => {
                        addProfile()
                        onClose()
                    }}
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
