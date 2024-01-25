//1. Import area 

import React from 'react';
import { Avatar, BaseCheckbox, Box, Flex, IconButton, TFooter, Table, Tbody, Td, Th, Thead, Tr, Typography, VisuallyHidden } from '@strapi/design-system';
import { Pencil, Trash } from '@strapi/icons';
//2. Function Defination Area

//2.1 Hook variable area


//2.2 function defination area


//2.3 return staement
const entry = {
  id :'x'
}

const HomePage = () => {
  return (
    <Box  padding={8} background="neutral100">
      <Table colCount={7} rowCount={1}>
        <Thead>
          <Tr>
            <Th>
                <BaseCheckbox   />
            </Th>
            <Th>
                <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
                <Typography variant="sigma">COVER</Typography>
            </Th>
            <Th>  
                <Typography variant="sigma">NAME</Typography>
            </Th>
            <Th>
                <Typography variant="sigma">Categories</Typography>
            </Th>
            <Th>
                <Typography variant="sigma">Contact</Typography>
            </Th>
            <Th>
                <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr key={entry.id}>
          <Td>
            <BaseCheckbox />
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.id}</Typography>
          </Td>
          <Td>
            <Avatar src={entry.cover} alt={entry.contact} />
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.description}</Typography>
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.category}</Typography>
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.contact}</Typography>
          </Td>
          <Td>
            <Flex>
              <a href="https://strapi.io/" target="_blank" rel="noreferrer">
                Strapi
              </a>
              <IconButton onClick={() => console.log('edit')} label="Edit" noBorder icon={<Pencil />} />
              <Box paddingLeft={1}>
                <IconButton onClick={() => console.log('delete')} label="Delete" noBorder icon={<Trash />} />
              </Box>
            </Flex>
           </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

//3. Export Area
export default HomePage;
