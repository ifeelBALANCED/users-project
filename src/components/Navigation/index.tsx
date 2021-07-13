import React, {FC} from "react"
import {
    Box,
    Flex,
    IconButton,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useDisclosure,
    Container,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import {MobileNav} from "./MobileNav";
import {DesktopNav} from "./DesktopNav";
import {Logo} from "../Logo";
import {Link} from "react-router-dom";

const Navigation: FC = () => {
    const {isOpen, onToggle} = useDisclosure();
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Container
                    align="center"
                    maxW="1680px"
                    d="flex"
                >
                    <Flex
                        flex={{base: 1, md: 'auto'}}
                        ml={{base: -2}}
                        display={{base: 'flex', md: 'none'}}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex
                        flex={{base: 1}}
                        justify={{base: 'center', md: 'start'}}
                        align={'center'}
                    >
                        <Logo title="Default user"/>
                        <Flex display={{base: 'none', md: 'flex'}} ml={10} align={'center'}>
                            <DesktopNav/>
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{base: 1, md: 0}}
                        justify={'flex-end'}
                        direction={'row'}
                        align={'center'}
                        spacing={6}>
                        <Button
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'/signin'}>
                            <Link to="/signin"> Sign In</Link>
                        </Button>
                        <Button
                            display={{base: 'none', md: 'inline-flex'}}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            colorScheme="blue"
                        >
                            <Link to="/"> Sign Up</Link>
                        </Button>
                    </Stack>
                </Container>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav/>
            </Collapse>
        </Box>
    );
}

export default Navigation




