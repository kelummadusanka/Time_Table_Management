import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings,
    FiHelpCircle,
    FiUploadCloud
} from 'react-icons/fi'

import NavItem from './NavItem'

export default function Nav() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    color='black'
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                {}
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="Input the description for the dashboard." />
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendar"  />
                <NavItem navSize={navSize} icon={FiUser} title="Members" />
                <NavItem navSize={navSize} icon={FiUploadCloud} title="FAQ" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Weekly Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
                <NavItem navSize={navSize} icon={FiHelpCircle} title="Help" />
                
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm" color='purple.800'>Niroth</Heading>
                        <Text color="black">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

