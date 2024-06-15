import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReport, updateReport } from './reportsSlice';
import { Button, TextInput, Textarea, FileInput, NativeSelect } from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectAllLaborants } from '../laborant/laborantSlice';

const AddReportForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state?.initialData;
  const laborants = useSelector(selectAllLaborants);

  const [formData, setFormData] = useState({
    reportId: initialData ? initialData.reportId : nanoid(),
    laborantName: initialData ? initialData.laborantName : '',
    patientName: initialData ? initialData.patientName : '',
    patientSurname: initialData ? initialData.patientSurname : '',
    patientSSN: initialData ? initialData.patientSSN : '',
    diagnosisTitle: initialData ? initialData.diagnosisTitle : '',
    diagnosisDetail: initialData ? initialData.diagnosisDetail : '',
    reportDate: initialData ? new Date(initialData.reportDate) : new Date(),
    reportImage: initialData ? initialData.reportImage : '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        reportId: initialData.reportId,
        laborantName: initialData.laborantName,
        patientName: initialData.patientName,
        patientSurname: initialData.patientSurname,
        patientSSN: initialData.patientSSN,
        diagnosisTitle: initialData.diagnosisTitle,
        diagnosisDetail: initialData.diagnosisDetail,
        reportDate: new Date(initialData.reportDate),
        reportImage: initialData.reportImage,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (files) => {
    const selectedFile = files[0];

    if (!selectedFile) {
      alert('Lütfen bir rapor görseli seçiniz.');
      return;
    }

    setFormData({ ...formData, reportImage: selectedFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.patientSSN.length !== 11) {
      alert('TC Kimlik numarası 11 karakter uzunluğunda olmalıdır.');
      return;
    }

    if (initialData) {
      dispatch(updateReport(formData));
    } else {
      dispatch(addReport(formData));
    }

    navigate('/');

    setTimeout(() => {
      alert(initialData ? 'Rapor başarıyla güncellendi' : 'Rapor başarıyla eklendi');
    }, 100);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-5xl'>
        {initialData ? 'Raporu Düzenle' : 'Yeni Rapor Ekle'}
      </h2>
      <TextInput
        className='my-3'
        label="Rapor ID"
        name="reportId"
        disabled
        value={formData.reportId}
        size='lg'
        radius="lg"
      />
      <NativeSelect
        className='my-3'
        label="Laborant Seç"
        name="laborantName"
        data={[{ value: '', label: 'Laborant seçiniz' }, ...laborants.map(laborant => ({ value: laborant.name + ' ' + laborant.surname + ' - ' + laborant.hospitalId, label: laborant.name + ' ' + laborant.surname + ' - ' + laborant.hospitalId }))]}
        value={formData.laborantName}
        onChange={handleChange}
        required
        size='lg'
        radius="lg"
      />
      <TextInput
        className='my-3'
        label="Hasta Adı"
        name="patientName"
        value={formData.patientName}
        onChange={handleChange}
        required
        size='lg'
        radius="lg"
      />
      <TextInput
        className='my-3'
        label="Hasta Soyadı"
        name="patientSurname"
        value={formData.patientSurname}
        onChange={handleChange}
        required
        size='lg'
        radius="lg"
      />
      <TextInput
        className='my-3'
        label="Hasta Kimlik Numarası (TC)"
        name="patientSSN"
        value={formData.patientSSN}
        onChange={handleChange}
        required
        size='lg'
        radius="lg"
        type='number'
      />
      <TextInput
        className='my-3'
        label="Koyulan Tanı Başlığı"
        name="diagnosisTitle"
        value={formData.diagnosisTitle}
        onChange={handleChange}
        required
        size='lg'
        radius="lg"
      />
      <Textarea
        className='my-3'
        label="Tanı Detayları"
        name="diagnosisDetail"
        value={formData.diagnosisDetail}
        onChange={handleChange}
        resize='vertical'
        required
        size='lg'
        radius="lg"
      />
      <FileInput
        className='my-3'
        label="Rapor Görseli Yükle"
        accept="image/*"
        onChange={handleFileChange}
        variant='filled'
        placeholder='Dosya Seç'
        required
        size='lg'
        radius="lg"
      />
      <Button size='lg' variant="filled" color="gray" className='mt-5' type="submit">
        {initialData ? 'Raporu Güncelle' : 'Rapor Ekle'}
      </Button>
    </form>
  );
};

export default AddReportForm;
