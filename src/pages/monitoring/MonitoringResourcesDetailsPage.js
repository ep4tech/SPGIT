import React, { useState } from 'react';
import { Box, Typography, Paper, Button, TextField, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringResourcesDetailsPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringResourcesDetailsPage.js');
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
      <Typography variant="h5" gutterBottom>{t('monitoring.resources.title')}</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField label={t('monitoring.resources.name')} name="name" value={resource.name} onChange={e => setResource({ ...resource, name: e.target.value })} sx={{ mr: 1, mb: 1 }} />
        <TextField label={t('monitoring.resources.type')} name="type" value={resource.type} onChange={e => setResource({ ...resource, type: e.target.value })} sx={{ mr: 1, mb: 1 }} />
        <TextField label={t('monitoring.resources.quantity')} name="quantity" type="number" value={resource.quantity} onChange={e => setResource({ ...resource, quantity: e.target.value })} sx={{ mr: 1, mb: 1 }} />
        <Button onClick={handleAdd} variant="contained" sx={{ mt: 1 }}>{t('add')}</Button>
      </Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('monitoring.resources.name')}</TableCell>
            <TableCell>{t('monitoring.resources.type')}</TableCell>
            <TableCell>{t('monitoring.resources.quantity')}</TableCell>
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

export default MonitoringResourcesDetailsPage;
