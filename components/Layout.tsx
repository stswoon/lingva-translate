import {FC, PropsWithChildren} from "react";
import {Flex, HStack, VStack, Button, Link, useColorModeValue, background} from "@chakra-ui/react";
import {Header, Footer} from ".";

type Props = {
    [key: string]: any
};

const Layout: FC<PropsWithChildren<Props>> = ({children, ...props}) => (
    <>
        <Button
            as={Link}
            href="#main"
            userSelect="none"
            position="absolute"
            top="-100px"
            left="0"
            _focus={{
                top: "0"
            }}
        >
            Skip to content
        </Button>


        <VStack minH="100%" spacing={7}>
                <Header
                    bgColor={useColorModeValue("lingva.100", "lingva.900")}
                />

                <div style={{background: "#e3fbe3", padding: "15px"}}>
                    <p>
                        Original server lingva.ml is down fo a long time so I decided to create fallback site for my pet
                        projects.
                    </p>
                    <p>
                        If you are going to use this site sorry for using ads but I need at least 7$/mo to maintain
                        server which provide this functionality.
                    </p>
                    <p>
                        Also you can donate me at
                        <a style={{background: "#90ee90", padding: "5px", margin: "5px"}}
                           href="https://yoomoney.ru/to/41001998657825">DONATE</a>
                    </p>
                </div>
                <div>
                    Placeholder for ads
                </div>

                <Flex
                    as="main"
                    id="main"
                    flexGrow={1}
                    w="full"
                    {...props}
                >
                    {children}
                </Flex>

                <Footer
                    bgColor={useColorModeValue("lingva.100", "lingva.900")}
                    color={useColorModeValue("lingva.900", "lingva.100")}
                />
            </VStack>
    </>
);

export default Layout;
