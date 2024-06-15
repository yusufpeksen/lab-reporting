import React, { useState} from 'react'
import { TextInput , Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { laborantAdd } from './laborantSlice';
import { useNavigate } from 'react-router-dom';

const AddLaborantForm = () => {
    const dispatch = useDispatch()
    const [formData , setFormData] = useState({
      hospitalId : '',
      name : '',
      surname : ''
    })
    
    const navigate = useNavigate()

    const handleChange = (e) => {
      let {name , value} = e.target

      setFormData({ ...formData, [name] : value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      if (formData.hospitalId.length !== 7) {
        alert('Laborant IDsi 7 karakter uzunluğunda olmalıdır.');
        return;
      }

      dispatch(laborantAdd(formData))

      navigate('/')

        setTimeout(() => {
          alert('Laborant başarıyla eklendi');
      }, 100);
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-5xl'>
        Yeni Laborant Ekle
      </h2>
      <TextInput
        className='my-3'
        label="LaborantID"
        name="hospitalId"
        value={formData.hospitalId}
        size='lg'
        radius="lg"
        required
        onChange={handleChange}
        type='number'
      />
      <TextInput
        className='my-3'
        label="Laborant Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        size='lg'
        radius="lg"
      />
      <TextInput
        className='my-3'
        label="Laborant Surname"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        required
        size='lg'
        radius="lg"
      />
      <Button size='lg' variant="filled" color="gray" className='mt-5' type="submit">
        Laborant Ekle
      </Button>
    </form>
  )

}

export default AddLaborantForm