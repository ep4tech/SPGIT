import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ResourcesPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.resources.title')}</Typography>
      {/* Resource Request Form */}
      <Box mt={3} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.resources.resourceRequest')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.resources.type')} fullWidth />
          <TextField label={t('execution.resources.description')} fullWidth />
          <TextField label={t('execution.resources.requester')} fullWidth />
          <TextField label={t('execution.resources.approval')} fullWidth placeholder={t('execution.resources.approvalPlaceholder')} />
          <Button variant="contained">{t('execution.resources.submitRequest')}</Button>
        </Box>
      </Box>
      {/* Resource Inventory */}
      <Box mt={4} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.resources.resourceInventory')}</Typography>
        <TextField label={t('execution.resources.filter')} fullWidth sx={{ mb: 2 }} />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('execution.resources.name')}</TableCell>
              <TableCell>{t('execution.resources.type')}</TableCell>
              <TableCell>{t('execution.resources.quantity')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Placeholder rows */}
            <TableRow>
              <TableCell>{t('execution.resources.staff')}</TableCell>
              <TableCell>{t('execution.resources.human')}</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('execution.resources.laptops')}</TableCell>
              <TableCell>{t('execution.resources.equipment')}</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {/* Service Provider Directory */}
      <Box mt={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.resources.serviceProviderDirectory')}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('execution.resources.providerName')}</TableCell>
              <TableCell>{t('execution.resources.serviceType')}</TableCell>
              <TableCell>{t('execution.resources.contact')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Placeholder rows */}
            <TableRow>
              <TableCell>{t('execution.resources.abcTech')}</TableCell>
              <TableCell>{t('execution.resources.itSupport')}</TableCell>
              <TableCell>{t('execution.resources.abcEmail')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('execution.resources.xyzCatering')}</TableCell>
              <TableCell>{t('execution.resources.catering')}</TableCell>
              <TableCell>{t('execution.resources.xyzEmail')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default ResourcesPage;
