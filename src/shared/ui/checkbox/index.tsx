import React, {FC} from 'react';
import {Checkbox, Flex, Text} from "@chakra-ui/react"

const CheckBox: FC = () => {
    return (
        <Flex
            justify="center"
            align="center"
        >
            <Checkbox
                letterSpacing="1px"
                color="#14142B"
                size="sm"
                mb="90px"
            >
                <Text
                    fontFamily="Poppins"
                    fontSize="24px"
                >
                    is admin
                </Text>
            </Checkbox>
        </Flex>
    );
};

export default CheckBox;
