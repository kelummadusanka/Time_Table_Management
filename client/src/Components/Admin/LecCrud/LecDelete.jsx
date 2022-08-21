import { React, useState } from "react";
import { InputGroup, HStack, InputLeftElement, Input } from "@chakra-ui/react";
import LecDeleteitem from "./LecDeleteitem";

function LecDelete() {
  const [SearchString, setSearchString] = useState("");
  return (
    <>
      <InputGroup w={500}>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="$"
        />
        <Input
          placeholder="Search your key words!"
          onChange={(e) => setSearchString(e.target.value.trim().toLowerCase())}
          mb='10'
          borderColor='pink.800'
        />
      </InputGroup>

      <LecDeleteitem />
    </>
  );
}

export default LecDelete;
