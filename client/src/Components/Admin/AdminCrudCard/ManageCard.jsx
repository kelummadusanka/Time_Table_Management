import React from 'react'

function ManageCard() {

    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Time table Mangement',
      title: 'Time table Mangement',
      description: '| manage all Time table from here!',
    
    }
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='xl' overflow='hidden' w={450} h={250} _hover=''>
        <Image src={property.imageUrl} alt={property.imageAlt} objectFit="cover"
            width="100%"
            height="70%"/>
  
        <Box p='4'>
       
  
          <Box
            mt='-1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
  
            <Box as='span' ml='2' color='purple.700' fontSize='sm'>
              {property.description} reviews
            </Box>
       
        </Box>
      </Box>
    )
  }

export default ManageCard