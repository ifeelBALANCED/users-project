import FormButton from "../../shared/ui/button";
import CheckBox from "../../shared/ui/checkbox";
import FormInput from "../../shared/ui/input";
import React, {FC, FormEvent} from 'react';
import Title from "../../shared/ui/title";
import Form from "../../components/Form";
import {Flex} from "@chakra-ui/react";

const SignUp: FC = () => {
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
                title="Create your account"
                marginTop="120px"
                marginBottom="130px"
            />
            <Form onSubmit={onSubmit}>
                <FormInput
                    text="Username"
                    placeholder="Enter username..."
                />
                <FormInput
                    text="Email"
                    placeholder="Enter email..."
                />
                <FormInput
                    type="password"
                    text="Password"
                    placeholder="Enter password..."
                />
                <CheckBox/>
                <FormButton
                    text="Sign Up"
                    type="submit"
                />
            </Form>
        </Flex>
    );
};

export default SignUp
