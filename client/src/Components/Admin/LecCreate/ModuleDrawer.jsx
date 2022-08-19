import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  VStack,
  Button,
  Stack,
  useDisclosure,
  CheckboxGroup,
  Checkbox,
  InputLeftElement,
  InputGroup
} from "@chakra-ui/react";
function ModuleDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Click to Select Module +
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select Your Modules</DrawerHeader>

          <DrawerBody>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
            <CheckboxGroup colorScheme="green">
              <Stack spacing={[0, 10]} direction={["row", "column"]}>
                <Checkbox value="naruto">Naruto</Checkbox>
                <Checkbox value="sasuke">Sasuke</Checkbox>
                <Checkbox value="kakashi">Kakashi</Checkbox>
              </Stack>
            </CheckboxGroup>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ModuleDrawer;
