import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringResourcesPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringResourcesPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.resources.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('monitoring.resources.description')}</Typography>
      <Typography variant="subtitle1">{t('monitoring.resources.contents')}</Typography>
      <ul>
        <li>{t('monitoring.resources.staff')}</li>
        <li>{t('monitoring.resources.req')}</li>
        <li>{t('monitoring.resources.track')}</li>
        <li>{t('monitoring.resources.integration')}</li>
      </ul>
    </Box>
  );
};
export default MonitoringResourcesPage;
