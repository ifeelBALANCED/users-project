import React, {FC} from 'react';
import {Heading} from "@chakra-ui/react";

type TitleProps = {
    title: string
    marginTop: string
    marginBottom: string
}

const Title: FC<TitleProps> = ({title, ...rest}) => {
    return (
        <Heading
            fontSize="48px"
            fontFamily="Poppins"
            fontWeight="600"
            lineHeight="72px"
            color="#14142B"
            {...rest}
        >
            {title}
        </Heading>
    );
};

export default Title;
