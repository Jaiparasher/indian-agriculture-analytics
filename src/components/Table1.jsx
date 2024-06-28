import React from 'react';
import { Table } from '@mantine/core';

const Table1 = ({ data }) => {
  // Generate table rows from data
    const rows = data.map((row, index) => (
        <Table.Tr key={index}>
          <Table.Td>{row.year}</Table.Td>
          <Table.Td>{row.maxCrop}</Table.Td>
          <Table.Td>{row.minCrop}</Table.Td>
        </Table.Tr>
      ));
    
      return (
        <>
        <h2>Table 1</h2>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Year</Table.Th>
              <Table.Th>Crop with Maximum Production in that Year</Table.Th>
              <Table.Th>Crop with Minimum Production in that Year</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </>
      );
    };

export default Table1;
