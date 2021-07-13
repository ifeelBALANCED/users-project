import React from 'react';
import {ChakraProvider} from "@chakra-ui/react"
import {withProviders} from "./providers";
import {Routing} from "../pages";
import "./index.css"

const App = () => {
    return (
        <ChakraProvider>
            <Routing/>
        </ChakraProvider>
    );
};

export default withProviders(App);
