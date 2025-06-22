import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringSupportPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringSupportPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.support.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('monitoring.support.description')}</Typography>
      <Typography variant="subtitle1">{t('monitoring.support.contents')}</Typography>
      <ul>
        <li>{t('monitoring.support.log')}</li>
        <li>{t('monitoring.support.resistance')}</li>
        <li>{t('monitoring.support.programs')}</li>  
      </ul>
    </Box>
  );
};
export default MonitoringSupportPage;
