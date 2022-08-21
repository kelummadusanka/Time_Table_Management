import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  
} from "@chakra-ui/react";

export default function NavItem({ icon, title, description, active, navSize }) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      textColor='black'
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right" >
        <Link
          backgroundColor={active && "#d1cce6"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#d1cce6" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%" >
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#82AAAD" : "gray.500"}
              />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        {/* <MenuList py={0} border="none" w={200} h={200} ml={5}></MenuList> */}
      </Menu>
    </Flex>
  );
}
