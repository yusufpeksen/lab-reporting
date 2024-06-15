import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllLaborants, laborantDelete } from './laborantSlice';
import { Card, ActionIcon, Group } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

const LaborantsList = () => {
  const dispatch = useDispatch();
  const laborants = useSelector(selectAllLaborants);

  const handleDelete = (hospitalId) => {
    if (window.confirm('Bu laborantı silmek istediğinize emin misiniz?')) {
      dispatch(laborantDelete(hospitalId));
    }
  };

  const renderedLaborants = laborants.map(laborant => (
    <div key={laborant.hospitalId} className='min-w-[300px]'>
      <Card shadow="sm" className="mb-4 p-4">
        <Group>
          <div className='' size="lg">
            <div><strong>Laborant ID:</strong> {laborant.hospitalId}</div>
            <div><strong>Adı:</strong> {laborant.name}</div>
            <div><strong>Soyadı:</strong> {laborant.surname}</div>
          </div>
          <Group className='absolute right-5 top-5'>
            <ActionIcon onClick={() => handleDelete(laborant.hospitalId)} color="red">
              <IconTrash size={16} />
            </ActionIcon>
          </Group>
        </Group>
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
