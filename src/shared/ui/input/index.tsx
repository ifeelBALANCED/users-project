import React, {FC} from 'react';
import {Box, Input, Text} from "@chakra-ui/react";

type ChangType = {target: {value: string}}
type InputProps = {
    type?: string
    value?: string
    text?: string
    disabled?: boolean
    placeholder?: string
    onChange?: ({target: {value}}: ChangType) => void
}

const FormInput: FC<InputProps> = (
    {
        type = "text",
        text,
        value,
        onChange,
        placeholder,
        disabled,
        ...rest
    }
) => {
    return (
        <Box mb="25px">
            <Text
                fontFamily="Poppins"
                letterSpacing="1px"
                lineHeight="34px"
                fontSize="18px"
                color="#6E7191"
            >
                {text}
            </Text>
            <Input
                w="100%"
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...rest}
                type={type}
                fontSize="24px"
                color="#14142B"
                variant="flushed"
                placeholder={placeholder}
                fontFamily="Poppins"
                isRequired
            />
        </Box>
    );
};

export default FormInput;
