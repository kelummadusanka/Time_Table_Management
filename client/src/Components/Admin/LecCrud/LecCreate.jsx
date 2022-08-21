import {
  RadioGroup,
  Radio,
  Flex,
  Heading,
  Input,
  VStack,
  Button,
  Select,
  Divider,
  InputLeftAddon,
  InputGroup} from "@chakra-ui/react";
import { React, useState } from "react";
import ModuleDrawer from "./ModuleDrawer";
import LecturerCrud from "../../Services/LecturerCrud";


function LecCreate() {
  const [firstname , setFirstname] = useState('');
  const [lastname , setLastname] = useState('');
  const [regNo , setRegNo] = useState('');
  const [gender , setGender] = useState('');
  const [honorific , setHonorific] = useState('');
  const [image , setImage] = useState('');
  const [email , setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [module , setModule] = useState([]);
  const [department , setDepartment] = useState('');

  function onSubmit(data) {

    data.preventDefault();
    const createdLecture = {
      firstname,
      lastname,
      regNo,
      gender,
      honorific,
      image,
      department,
      email,
      phone,
      module,
      password: 12345,
    };

    console.log(createdLecture)

    LecturerCrud.CreateLec(createdLecture)
      .then((response) => {
        // swal("Well Done!", "Create a Account Successfully", "success");
        // window.location = "/login";
      })
      .catch((err) => {
        console.log(err.message);
    
      });

    
  }

  return (
    <form onSubmit={onSubmit}>
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
<p> {firstname}{lastname}{gender}</p>
          <Flex justifyContent={"space-between"} w={"full"}>
            <VStack alignItems="flex-start" mb={10}>
              <Heading size={"sm"} fontWeight="bold">
                Frist Name
              </Heading>
              <Input variant="filled" placeholder="Jhon" w={400} mr={10} onChange={(e)=>setFirstname(e.target.value)}/>
            </VStack>

            <VStack alignItems="flex-start">
              <Heading size={"sm"} fontWeight="bold">
                Last Name
              </Heading>
              <Input variant="filled" placeholder="Doe" w={400} mr={10} onChange={(e)=>setLastname(e.target.value)}/>
            </VStack>

            <VStack alignItems="flex-start">
              <Heading size={"sm"} fontWeight="bold">
                Register No.
              </Heading>
              <Input variant="filled" placeholder="RUH#00256" w={400} mr={10} onChange={(e)=>setRegNo(e.target.value)}/>
            </VStack>
          </Flex>

          <Flex justifyContent={"space-between"} w={"full"}>
            <VStack alignItems="flex-start" w={400}>
              <Heading size={"sm"} fontWeight="bold">
                Honorific
              </Heading>
              <Select variant="filled" w={100} onChange={(e)=>setHonorific(e.target.value)}>
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
                <Radio size="md" name="gender" value="Male" mr={10}  onChange={(e)=>setGender(e.target.value)}>
                  Male
                </Radio>
                <Radio size="md" name="gender" value="Female"  onChange={(e)=>setGender(e.target.value)}>
                  Female
                </Radio>
              </RadioGroup>
            </VStack>

            <VStack alignItems="flex-start" w={400}>
              <Heading size={"sm"} fontWeight="bold">
                Photo
              </Heading>
              <Input
                placeholder="Select photo"
                size="md"
                type="File"
                variant="filled"
                w={200}
                //sonChange={(e)=>setHonorific(e.target.value)}

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
                <Input type="tel" placeholder="phone number" variant="filled" onChange={(e)=>setPhone(e.target.value)}/>
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
                <Input type="email" placeholder="Email" variant="filled" onChange={(e)=>setEmail(e.target.value)}/>
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
              <Select variant="filled" onChange={(e)=>setDepartment(e.target.value)}>
                <option value="Electrical">Electrical</option>
                <option value="Civil">Civil </option>
                <option value="Mechanical">Mechanical</option>
              </Select>
            </VStack>

            <VStack alignItems="flex-start">
              <Heading size={"sm"} fontWeight="bold" onChange={(e)=>setModule(e.target.value)}>
                Modules
              </Heading>

              <ModuleDrawer />
            </VStack>
          </Flex>
        </Flex>

        <Divider />
        <Button
          // leftIcon={<MdBuild />}
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
