import React, {FC, Fragment} from 'react';
import {Header} from "../../components/Header";
import {Container} from "@chakra-ui/react";
import Heading from "../../shared/ui/heading";

const Users: FC = () => {
    return (
        <Fragment>
            <Header/>
            <Container maxW="1680px">
                <Heading
                    text="Users:"
                    m="60px 0"
                />
            </Container>
        </Fragment>
    );
};

export default Users;
