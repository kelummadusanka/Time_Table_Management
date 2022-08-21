import React from "react";
import {
  Center,
  HStack,
} from "@chakra-ui/react";

function LecDeleteitem() {
  return (
    <HStack
      mb={2}
      w={"80%"}
      justifyContent={"space-around"}
      h={20}
      bg="red.100"
      borderRadius={25}
      borderWidth={2.5}
      borderColor={"red.600"}
    >
      <Center>props.regNo</Center>
      <Center>props.name</Center>
      <Center>props.department</Center>
      <Center>props.icon</Center>
    </HStack>
  )
}

export default LecDeleteitem