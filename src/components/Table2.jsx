import React from 'react';
import { Table } from '@mantine/core';

const Table2 = ({ data }) => {
  // Generate table rows from data
    const rows = data.map((row, index) => (
        <Table.Tr key={index}>
          <Table.Td>{row.crop}</Table.Td>
          <Table.Td>{row.avgYield}</Table.Td>
          <Table.Td>{row.avgArea}</Table.Td>
        </Table.Tr>
      ));
    
      return (
        <>
        <h2>Table 2</h2>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Crop</Table.Th>
              <Table.Th>Average Yield of the Crop (1950-2020)</Table.Th>
              <Table.Th>Average Cultivation Area of the Crop (1950-2020)</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </>
      );
    };

export default Table2;
