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

            <div style={{background: "#e3fbe3", padding: "10px", margin: "5px 10px", font-size: "12px"}}>
                Original server <a href="lingva.ml">lingva.ml</a> is down so I've created
                fallback for me. Sorry for ads but I need 7$/mo to maintain server.
                Also you can donate me at <a style={{background: "#90ee90", padding: "3px"}}
                                             href="https://yoomoney.ru/to/41001998657825">DONATE</a>
            </div>
            <div style={{margin-top: "0"}}>
                <div id="yandex_rtb_R-A-2555887-1" style={{max-height:"200px"}}></div>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.yaContextCb=window.yaContextCb||[];
                            
                            const yaScript = document.createElement("script");
                            yaScript.setAttribute("src", "//yandex.ru/ads/system/context.js");
                            document.getElementsByTagName("head")[0].appendChild(yaScript);
                            
                            window.yaContextCb.push(() => {
                                Ya.Context.AdvManager.render({
                                    "blockId": "R-A-2555887-1",
                                    "renderTo": "yandex_rtb_R-A-2555887-1"
                                });
                            });
                        `
                    }}
                ></script>
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
