import {
  RadioGroup,
  Radio,
  Flex,
  Heading,
  Input,
  Spacer,
  VStack,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Select,
  Divider,
  InputLeftAddon,
  InputGroup,
  SearchIcon,
  Stack,
} from "@chakra-ui/react";
import { React, useState } from "react";
import * as XLSX from "xlsx";
import ModuleDrawer from "./ModuleDrawer";

function LecUpdate() {
  return (
    <form>
      <HStack w={"full"} h={"calc(70vh)"} alignItems={"flex-start"}>
        <VStack
          flex="1"
          h="full"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Heading fontSize={"large"} mb={2}>
            Personal detail
            <Divider />
          </Heading>
          <VStack alignItems="flex-start" mb={10}>
            <Heading size={"sm"} fontWeight="bold">
              Frist Name
            </Heading>
            <Input variant="filled" placeholder="Jhon" w={400} mr={10} />
          </VStack>

          <VStack alignItems="flex-start">
            <Heading size={"sm"} fontWeight="bold">
              Last Name
            </Heading>
            <Input variant="filled" placeholder="Doe" w={400} mr={10} />
          </VStack>

          <VStack alignItems="flex-start">
            <Heading size={"sm"} fontWeight="bold">
              Register No.
            </Heading>
            <Input variant="filled" placeholder="RUH#00256" w={400} mr={10} />
          </VStack>

          <VStack alignItems="flex-start" w={400}>
            <Heading size={"sm"} fontWeight="bold">
              Honorific
            </Heading>
            <Select variant="filled" w={100}>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr. </option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss.">Miss.</option>
            </Select>
          </VStack>

          <VStack alignItems="flex-start" w={400}>
            <Heading size={"sm"} fontWeight="bold">
              Gender
            </Heading>

            <RadioGroup
              name="gender"
              colorScheme="green"
              bg="gray.100"
              p={2}
              borderRadius={9}
              defaultValue="Male"
            >
              <Radio size="md" name="gender" value="Male" mr={10}>
                Male
              </Radio>
              <Radio size="md" name="gender" value="Female">
                Female
              </Radio>
            </RadioGroup>
          </VStack>

          <VStack alignItems="flex-start" w={400}>
            <Heading size={"sm"} fontWeight="bold">
              Photo
            </Heading>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="File"
              variant="filled"
              w={200}
            />
          </VStack>
        </VStack>
        <VStack
          flex="1"
          alignItems="flex-start"
          justifyContent={"space-between"}
        >
          <Heading fontSize={"large"} mb="9">
            Contact Detail <Divider />
          </Heading>

          <VStack alignItems="flex-start">
            <Heading size={"sm"} fontWeight="bold">
              Phone number
            </Heading>
            <InputGroup>
              <InputLeftAddon children="+94" />
              <Input
                mb="8"
                type="tel"
                placeholder="phone number"
                variant="filled"
              />
            </InputGroup>
          </VStack>

          <VStack alignItems="flex-start">
            <Heading size={"sm"} fontWeight="bold">
              Email
            </Heading>
            <InputGroup>
              {/* <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            /> */}
              <Input type="email" placeholder="Email" variant="filled" />
            </InputGroup>
          </VStack>
        </VStack>
        <VStack
          flex="1"
          minHeight="max-content"
          alignItems="flex-start"
          justifyContent={"space-between"}
        >
          <Heading fontSize={"large"} mb="9">
            Teaching detail
            <Divider />
          </Heading>
          <VStack alignItems="flex-start" mb={5}>
            <Heading size={"sm"} fontWeight="bold">
              Department
            </Heading>
            <Select variant="filled">
              <option value="Electrical">Electrical</option>
              <option value="Civil">Civil </option>
              <option value="Mechanical">Mechanical</option>
            </Select>
          </VStack>

          <VStack alignItems="flex-start" h={450}>
            <Heading mt="8" size={"sm"} fontWeight="bold">
              Modules
            </Heading>

            <ModuleDrawer />
          </VStack>
          <Spacer />
          <Button
            // leftIcon={<MdBuild />}
            colorScheme="pink"
            variant="solid"
            w={160}
            type={"submit"}
          >
            Submit
          </Button>
        </VStack>
      </HStack>
    </form>
  );
}

export default LecUpdate;
