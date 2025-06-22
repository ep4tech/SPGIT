import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringCommunicationPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringCommunicationPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.communication.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('monitoring.communication.description')}</Typography>
      <ul>
        <li>{t('monitoring.communication.publish')}</li>
        <li>{t('monitoring.communication.channels')}</li>
      </ul>
      <Typography variant="subtitle1">{t('monitoring.communication.contents')}</Typography>
      <ul>
        <li>{t('monitoring.communication.upload')}</li>
        <li>{t('monitoring.communication.notifications')}</li>
        <li>{t('monitoring.communication.log')}</li>
        <li>{t('monitoring.communication.board')}</li>
      </ul>
    </Box>
  );
};
export default MonitoringCommunicationPage;
