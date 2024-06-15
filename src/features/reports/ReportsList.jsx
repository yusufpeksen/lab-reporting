import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllReports, deleteReport } from './reportsSlice';
import { Card, ActionIcon, Group, TextInput, NativeSelect } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const ReportList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reports = useSelector(selectAllReports);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('reportDate');
  const [sortOrder, setSortOrder] = useState('desc');

  const handleEdit = (reportId) => {
    const reportToEdit = reports.find(report => report.reportId === reportId);
    navigate('/addreport', { state: { initialData: reportToEdit } });
  };

  const handleDelete = (reportId) => {
    if (window.confirm('Bu raporu silmek istediğinize emin misiniz?')) {
      dispatch(deleteReport(reportId));
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    const selectedOption = e.target.value;

    if (selectedOption === 'asc') {
      setSortOrder('asc');
    } else if (selectedOption === 'desc') {
      setSortOrder('desc');
    }
  };

  const filteredReports = reports.filter(report =>
    report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.patientSurname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.patientSSN.includes(searchTerm.toLowerCase()) ||
    report.laborantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedReports = filteredReports.sort((a, b) => {
    if (sortBy === 'reportDate') {
      const dateA = new Date(a.reportDate);
      const dateB = new Date(b.reportDate);
      return sortOrder === 'asc' ? dateB - dateA : dateA - dateB;
    }
    return 0;
  });

  const renderedReports = sortedReports.map(report => (
    <div className='w-[1300px]' key={report.reportId}>
      <Card shadow="sm" className="mb-4 p-4">
        <Group >
          <div className='' size="lg">
            <div><strong>Rapor ID:</strong> {report.reportId}</div>
            <div><strong>Laborant:</strong> {report.laborantName}</div>
            <div><strong>Hasta Adı:</strong> {report.patientName} {report.patientSurname}</div>
            <div><strong>Hasta Kimlik Numarası (TC):</strong> {report.patientSSN}</div>
            <div ><strong>Koyulan Tanı Başlığı:</strong> {report.diagnosisTitle}</div>
            <div className='w-[1270px] text-wrap overflow-hidden break-words'><strong>Tanı Detayları:</strong> {report.diagnosisDetail}</div>
            <div><strong>Rapor Tarihi:</strong> {new Date(report.reportDate).toLocaleDateString()}</div>
            <div>{report.reportImage && (
              <img src={report.reportImage} alt="Rapor Görseli" style={{ maxWidth: '100%', marginTop: '10px' }} />
            )}</div>
          </div>
          <Group className='absolute right-5 top-5'>
            <ActionIcon onClick={() => handleEdit(report.reportId)}>
              <IconEdit size={16} />
            </ActionIcon>
            <ActionIcon onClick={() => handleDelete(report.reportId)} color="red">
              <IconTrash size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Card>
    </div>
  ));

  return (
    <div className='mt-[200px]'>
      <div className="flex justify-between mb-4 min-w-[1300px]">
        <TextInput
          type="text"
          placeholder="Hasta adı/soyadı, Hasta kimlik numarası, Laborant adı/soyadı ile ara"
          className="px-3 py-2 border border-gray-300 rounded-lg outline-none w-[500px]"
          value={searchTerm}
          onChange={handleSearch}
        />
        <NativeSelect
          className="px-3 py-2 border border-gray-300 rounded-lg outline-none"
          value={sortOrder} // Use sortOrder directly as value
          onChange={handleSort}
        >
          <option value="asc">Rapor Tarihine Göre Sırala Yakın</option>
          <option value="desc">Rapor Tarihine Göre Sırala Uzak</option>
        </NativeSelect>
      </div>
      {renderedReports}
    </div>
  );
};

export default ReportList;
