import React, {FC} from 'react';
import {Button} from "@chakra-ui/react";

type ButtonProps = {
    text: string
    mt?: string
    type?: "button" | "submit" | "reset"
}
const FormButton: FC<ButtonProps> = ({text, type, ...rest}) => {
    return (
        <Button
            background="#EFF0F6"
            borderRadius="12px"
            lineHeight="36px"
            fontSize="24px"
            color="#4E4B66"
            p="10px 20px"
            type={type}
            m="0 auto"
            {...rest}
            d="flex"
        >
            {text}
        </Button>
    );
};

export default FormButton;
