import React, {FC} from 'react';
import {Text} from "@chakra-ui/react"

type HeadingProps = {
    text: string,
    m: string
}
const Heading: FC<HeadingProps> = ({text, ...rest}) => {
    return (
        <Text
            fontFamily="Poppins"
            fontSize="36px"
            color="#14142B"
            {...rest}
        >
            {text}
        </Text>
    );
};

export default Heading;
