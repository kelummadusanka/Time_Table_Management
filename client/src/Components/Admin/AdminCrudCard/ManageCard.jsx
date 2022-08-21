import { React } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ManageCard() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Time table Mangement",
    title: "Time table Mangement",
    description: "| manage all Time table from here!",
  };

  return (
    <Link to="/AdminDashboard/LectMngmt">
      <Box
        cursor="pointer"
        _hover={{ boxShadow: "dark-lg"}}
        maxW="sm"
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        w={450}
        h={250}
      >
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          objectFit="fill"
          width="100%"
          height="70%"
        />

        <Box p="4">
          <Box
            mt="-1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            fontSize="larger"
          >
            {property.title}
          </Box>

          <Box as="span" ml="2" color="pink.700" fontSize="sm">
            {property.description} reviews
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default ManageCard;
