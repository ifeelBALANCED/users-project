import FormButton from "../../shared/ui/button";
import FormInput from "../../shared/ui/input";
import React, {FC, FormEvent} from 'react';
import Title from "../../shared/ui/title";
import Form from "../../components/Form";
import {Flex} from "@chakra-ui/react";

const SignIn: FC = () => {
    const onSubmit = (e: FormEvent<HTMLElement>): void => {
        e.preventDefault()
    }
    return (
        <Flex
            direction="column"
            justify="center"
            align="center"
        >
            <Title
                title="Sign in"
                marginTop="120px"
                marginBottom="130px"
            />
            <Form onSubmit={onSubmit}>
                <FormInput
                    text="Email"
                    placeholder="Enter email..."
                />
                <FormInput
                    type="password"
                    text="Password"
                    placeholder="Enter password..."
                />
                <FormButton
                    mt="90px"
                    text="Sign In"
                    type="submit"
                />
            </Form>
        </Flex>
    );
};

export default SignIn
