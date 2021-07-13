import {ProfilesList} from "../../entities/profiles-list/ui";
import {Container, Flex} from "@chakra-ui/react";
import {Header} from "../../components/Header";
import CardNew from "../../components/CardNew";
import Heading from "../../shared/ui/heading";
import React, {FC, Fragment} from 'react';

const Profiles: FC = () => {
    return (
        <Fragment>
            <Header/>
            <Container maxW="1680px">
                <Heading
                    text="Profiles:"
                    m="60px 0"
                />
                    <ProfilesList/>
            </Container>
        </Fragment>
    );
};

export default Profiles
