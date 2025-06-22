import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringAlignmentDetailsPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringAlignmentDetailsPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.alignment.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('monitoring.alignment.description')}</Typography>
      <Typography variant="subtitle1">{t('monitoring.alignment.contents')}</Typography>
      <ul>
        <li>{t('monitoring.alignment.compare')}</li>
        <li>{t('monitoring.alignment.board')}</li>
        <li>{t('monitoring.alignment.warnings')}</li>
      </ul>
    </Box>
  );
};
export default MonitoringAlignmentDetailsPage;
