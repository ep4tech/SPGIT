import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AlignmentExecutionPage = () => {
  console.log('======>> We ae in pages/execution/AlignmentExecutionPage.js');
  const { t } = useTranslation();
  const [alignments, setAlignments] = useState([]);
  const [alignment, setAlignment] = useState({ goal: '', department: '', status: '' });

  const handleAdd = () => {
    if (alignment.goal && alignment.department && alignment.status) {
      setAlignments([...alignments, alignment]);
      setAlignment({ goal: '', department: '', status: '' });
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.alignment.title')}</Typography>
      <Paper sx={{ p: 3, mb: 2 }}>
        <TextField label={t('goal')} name="goal" value={alignment.goal} onChange={e => setAlignment({ ...alignment, goal: e.target.value })} sx={{ mr: 1 }} />
        <TextField label={t('department')} name="department" value={alignment.department} onChange={e => setAlignment({ ...alignment, department: e.target.value })} sx={{ mr: 1 }} />
        <TextField label={t('status')} name="status" value={alignment.status} onChange={e => setAlignment({ ...alignment, status: e.target.value })} sx={{ mr: 1 }} />
        <Button onClick={handleAdd} variant="contained">{t('add')}</Button>
      </Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('goal')}</TableCell>
            <TableCell>{t('department')}</TableCell>
            <TableCell>{t('status')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alignments.map((al, idx) => (
            <TableRow key={idx}>
              <TableCell>{al.goal}</TableCell>
              <TableCell>{al.department}</TableCell>
              <TableCell>{al.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AlignmentExecutionPage;
