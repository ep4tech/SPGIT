import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringFeedbackPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringFeedbackPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.feedback.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('monitoring.feedback.description')}</Typography>
      <Typography variant="subtitle1">{t('monitoring.feedback.contents')}</Typography>
      <ul>
        <li>{t('monitoring.feedback.input')}</li>
        <li>{t('monitoring.feedback.chart')}</li>
        <li>{t('monitoring.feedback.reports')}</li>
        <li>{t('monitoring.feedback.alerts')}</li>
      </ul>
    </Box>
  );
};
export default MonitoringFeedbackPage;
