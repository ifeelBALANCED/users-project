import defaultUser from "../../utils/avatars/default user.svg"
import {Avatar, Flex, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React, {FC} from 'react';

type LogoProps = {
    title: string
}

export const Logo: FC<LogoProps> = ({title}) => {
    return (
        <Flex
            align="center"
            justify="center"
        >
            <Link to="/">
                <Avatar
                    size="md"
                    mr="25px"
                    name="Default user"
                    src={defaultUser}
                />
            </Link>
            <Text
                fontFamily="Poppins"
                fontWeight="600"
                fontSize="18px"
                color="#14142B"
            >{title}</Text>
        </Flex>
    );
};

