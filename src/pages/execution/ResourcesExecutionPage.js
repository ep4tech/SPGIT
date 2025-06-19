import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ResourcesExecutionPage = () => {
  console.log('======>> We ae in pages/execution/ResourcesExecutionPage.js');
  const { t } = useTranslation();
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState({ name: '', type: '', quantity: '' });

  const handleAdd = () => {
    if (resource.name && resource.type && resource.quantity) {
      setResources([...resources, resource]);
      setResource({ name: '', type: '', quantity: '' });
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.resources.title')}</Typography>
      <Paper sx={{ p: 3, mb: 2 }}>
        <TextField label={t('execution.resources.name')} name="name" value={resource.name} onChange={e => setResource({ ...resource, name: e.target.value })} sx={{ mr: 1 }} />
        <TextField label={t('execution.resources.type')} name="type" value={resource.type} onChange={e => setResource({ ...resource, type: e.target.value })} sx={{ mr: 1 }} />
        <TextField label={t('execution.resources.quantity')} name="quantity" value={resource.quantity} onChange={e => setResource({ ...resource, quantity: e.target.value })} sx={{ mr: 1 }} />
        <Button onClick={handleAdd} variant="contained">{t('add')}</Button>
      </Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('execution.resources.name')}</TableCell>
            <TableCell>{t('execution.resources.type')}</TableCell>
            <TableCell>{t('execution.resources.quantity')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resources.map((res, idx) => (
            <TableRow key={idx}>
              <TableCell>{res.name}</TableCell>
              <TableCell>{res.type}</TableCell>
              <TableCell>{res.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ResourcesExecutionPage;
