import React from "react";
import { useState } from "react";


import {
  Input,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Flex,
} from "@chakra-ui/react";

import LecListItems from "../LecListItems/LecListItems";
import LecCreate from "../LecCrud/LecCreate";
import LecUpdate from "../LecCrud/LecUpdate";
import LecDelete from "../LecCrud/LecDelete";



function LectMngmt() {
  const [SearchString,setSearchString]= useState('')
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab
          w={200}
          mr={10}
          _hover={{ color: "white", bg: "blue.500" }}
          _selected={{ color: "white", bg: "blue.500" }}
        >
          View
        </Tab>
        <Tab
          w={200}
          mr={10}
          _hover={{ color: "white", bg: "green.500" }}
          _selected={{ color: "white", bgColor: "green.500" }}
        >
          Create
        </Tab>
        <Tab
          w={200}
          mr={10}
          _hover={{ color: "white", bg: "orange.500" }}
          _selected={{ color: "white", bg: "orange.500" }}
        >
          Update
        </Tab>
        <Tab
          w={200}
          mr={10}
          _hover={{ color: "white", bg: "red.500" }}
          _selected={{ color: "white", bg: "red.500" }}
        >
          Delete
        </Tab>
      </TabList>

      <Divider orientation="horizontal" mt={8} />

      <TabPanels>
        <TabPanel>
          <InputGroup w={500}>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input placeholder="Search your key words!" onChange={(e) =>
               setSearchString(e.target.value.trim().toLowerCase())
             }/>
          </InputGroup>

          <LecListItems SearchString={SearchString}/>

        </TabPanel>

        <TabPanel>
          <LecCreate/>
        </TabPanel>

        <TabPanel>
          <LecUpdate/>
        </TabPanel>

        <TabPanel>
          <LecDelete/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default LectMngmt;
