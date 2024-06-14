import React, { useState} from 'react'
import { TextInput , Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { laborantAdd } from './laborantSlice';
import { useNavigate } from 'react-router-dom';

const AddLaborantForm = () => {
    const dispatch = useDispatch()
    const [hospitalId , setHospitalId] = useState('')
    const [name , setName] = useState('')
    const [surname , setSurname] = useState('')    

    const navigate = useNavigate()

    const onHospitalIdChanged = e => setHospitalId(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onSurnameChanged = e => setSurname(e.target.value)

    const onSaveLaborantClicked = () => {
      if (hospitalId && hospitalId.length === 7 && name && surname) {
        dispatch(
          laborantAdd({
            hospitalId,
            name,
            surname
          })
        )

        setHospitalId('')
        setName('')
        setSurname('')

        navigate('/')

        setTimeout(() => {
          alert('Laborant başarıyla eklendi');
      }, 100);
      }
    }

  return (
    <div>
      <h2 className='text-5xl'>
        Yeni Laborant Ekle
      </h2>
      <TextInput
      onChange={onHospitalIdChanged}
      className='my-5'
      size="md"
      radius="lg"
      label="Laborant ID"
      withAsterisk
      placeholder="Hospital Laborant ID"
    />
    <TextInput
      onChange={onNameChanged}
      className='my-5'
      size="md"
      radius="lg"
      label="Laborant Name"
      withAsterisk
      placeholder="Laborant Name"
    />
    <TextInput
      onChange={onSurnameChanged}
      className='my-5'
      size="md"
      radius="lg"
      label="Laborant Surname"
      withAsterisk
      placeholder="Laborant Surname"
    />
    <Button onClick={onSaveLaborantClicked} className='' variant="filled" color="gray" size="md">Save Laborant</Button>
    </div>
  )

}

export default AddLaborantForm