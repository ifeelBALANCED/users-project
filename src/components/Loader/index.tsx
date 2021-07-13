import React, {FC} from 'react';
import {Spinner} from "@chakra-ui/react";

export const Loader: FC = () => {
    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    );
};

