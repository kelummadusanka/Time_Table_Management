import React from "react";
import { MdBuild, MdCall } from "react-icons/md";
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
            <InputGroup mb={10}>
              <InputLeftElement
                pointerEvents="none"
                children={<MdBuild color="gray.300" />}
              />
              <Input type="tel" placeholder="Search module" />
            </InputGroup>
            <CheckboxGroup colorScheme="green">
              <Stack spacing={[0, 10]} direction={["row", "column"]}>
                <Checkbox value="Communication System 1"> Communication System 1</Checkbox>
                <Checkbox value="Communication System 2">Communication System 2</Checkbox>
                <Checkbox value="Electric Machines 1">Electric Machines 1</Checkbox>
                <Checkbox value="Communication System 1"> Communication System 1</Checkbox>
                <Checkbox value="Communication System 2">Communication System 2</Checkbox>
                <Checkbox value="Electric Machines 1">Electric Machines 1</Checkbox>
                <Checkbox value="Communication System 1"> Communication System 1</Checkbox>
                <Checkbox value="Communication System 2">Communication System 2</Checkbox>
                <Checkbox value="Electric Machines 1">Electric Machines 1</Checkbox>
                <Checkbox value="Communication System 1"> Communication System 1</Checkbox>
                <Checkbox value="Communication System 2">Communication System 2</Checkbox>
                <Checkbox value="Electric Machines 1">Electric Machines 1</Checkbox>
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