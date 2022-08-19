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
import { MdBuild, MdCall } from "react-icons/md";

function LecCreate() {
  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  // submit
  const [excelData, setExcelData] = useState(null);
  // it will contain array of objects

  // handle File
  const fileType = ["application/vnd.ms-excel"];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      // console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    } else {
      setExcelData(null);
    }
  };

  return (
    <form>
      <VStack alignItems="flex-start">
        <Flex
          justifyContent="space-around"
          w={"full"}
          direction="column"
          h={250}
        >
          <Heading fontSize={"large"} mb={8}>
            Personal detail
          </Heading>

          <Flex justifyContent={"space-between"} w={"full"}>
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
          </Flex>

          <Flex justifyContent={"space-between"} w={"full"}>
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
          </Flex>
        </Flex>
        <Divider />

        <Flex direction={"row"} justifyContent="space-between" w={"full"}>
          <Flex
            direction={"column"}
            h={250}
            justifyContent={"space-around"}
            w={500}
          >
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

          <Divider orientation="vertical" h={250} />

          <Flex
            direction={"column"}
            h={250}
            justifyContent={"space-around"}
            w={500}
          >
            <Heading fontSize={"large"}>Teaching detail</Heading>
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

            <VStack alignItems="flex-start">
              <Heading size={"sm"} fontWeight="bold">
                Modules
              </Heading>

              <ModuleDrawer />
            </VStack>
          </Flex>
        </Flex>

        <Divider />
        <Button
          leftIcon={<MdBuild />}
          colorScheme="pink"
          variant="solid"
          alignSelf={"center"}
          w={160}
          mt={20}
          type={'submit'}
        >
          Submit
        </Button>

      </VStack>

      <Divider mt={5}/>


    </form>

    
  );
}

export default LecCreate;
