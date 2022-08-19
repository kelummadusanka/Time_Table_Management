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
} from "@chakra-ui/react";
import React from "react";

function LecCreate() {
  return (
    <VStack alignItems="flex-start">
      <Flex
        justifyContent="space-between"
        w={"full"}
        overflow="hidden"
        wrap="wrap"
      >
        <VStack alignItems="flex-start" mb={5}>
          <Heading size={"sm"} fontWeight="bold">
            Frist Name
          </Heading>
          <Input variant="filled" placeholder="Jhon" w={500} mr={10} />
        </VStack>

        <VStack alignItems="flex-start">
          <Heading size={"sm"} fontWeight="bold">
            Last Name
          </Heading>
          <Input variant="filled" placeholder="Doe" w={500} mr={10} />
        </VStack>

        <VStack alignItems="flex-start">
          <Heading size={"sm"} fontWeight="bold">
            Register No.
          </Heading>
          <Input variant="filled" placeholder="RUH#00256" w={500} mr={10} />
        </VStack>

        <VStack alignItems="flex-start">
          <Heading size={"sm"} fontWeight="bold">
            Honorific
          </Heading>
          <Select variant="filled" placeholder="Filled">
            <option value="Dr.">Dr.</option>
            <option value="Mr.">Mr. </option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss.">Miss.</option>
          </Select>
        </VStack>

        <VStack alignItems="flex-start">
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

        <VStack alignItems="flex-start">
          <Heading size={"sm"} fontWeight="bold">
            Photo
          </Heading>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="File"
            variant="filled"
          />
        </VStack>
      </Flex>
      <Divider />

      <Flex direction={"column"}>
        <Heading fontSize={"large"}>Contact Detail</Heading>
        <VStack alignItems="flex-start">
          <Heading size={"sm"} fontWeight="bold">
            Phone number
          </Heading>
          <InputGroup>
            <InputLeftAddon children="+94" />
            <Input type="tel" placeholder="phone number" variant="filled" />
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
      </Flex>
      <Divider />

      <Flex direction={"column"}>
        <Heading fontSize={"large"}>Teaching detail</Heading>
        <VStack alignItems="flex-start">
          <Heading size={"sm"} fontWeight="bold">
            Department
          </Heading>
          <Select variant="filled" >
            <option value="Electrical">Electrical</option>
            <option value="Civil">Civil </option>
            <option value="Mechanical">Mechanical</option>
          </Select>
        </VStack>

        <VStack alignItems="flex-start">
          <Heading size={"sm"} fontWeight="bold">
            Modules
          </Heading>
          <InputGroup>
            {/* <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            /> */}
            <Input type="email" placeholder="Email" variant="filled" />
          </InputGroup>
        </VStack>
      </Flex>




    </VStack>
  );
}

export default LecCreate;
