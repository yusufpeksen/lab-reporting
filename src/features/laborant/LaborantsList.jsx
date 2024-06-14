import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllLaborants } from './laborantSlice';
import { Card, Text } from '@mantine/core';

const LaborantsList = () => {
  const laborants = useSelector(selectAllLaborants);
  
  const renderedLaborants = laborants.map(laborant => (
    <div key={laborant.hospitalId}>
      <Card shadow="sm" className="mb-4 p-4">
        <Text size="lg">
          <strong>Laborant ID:</strong> {laborant.hospitalId}<br />
          <strong>Adı:</strong> {laborant.name}<br />
          <strong>Soyadı:</strong> {laborant.surname}
        </Text>
      </Card>
    </div>
  ));

  return (
    <div>
      {renderedLaborants}
    </div>
  );
};

export default LaborantsList;
