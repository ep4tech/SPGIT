import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionResourcesPage = () => {
  console.log('======>> We ae in pages/execution/ExecutionResourcesPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.resources.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.resources.description')}</Typography>
      <Typography variant="subtitle1">{t('execution.resources.contents')}</Typography>
      <ul>
        <li>{t('execution.resources.staff')}</li>
        <li>{t('execution.resources.req')}</li>
        <li>{t('execution.resources.track')}</li>
        <li>{t('execution.resources.integration')}</li>
      </ul>
    </Box>
  );
};
export default ExecutionResourcesPage;
