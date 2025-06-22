import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringMonitoringProjectsPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringMonitoringProjectsPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.projects.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('monitoring.projects.description')}</Typography>
      <Typography variant="subtitle1">{t('monitoring.projects.contents')}</Typography>
      <ul>
        <li>{t('monitoring.projects.gantt')}</li>
        <li>{t('monitoring.projects.groups')}</li>
        <li>{t('monitoring.projects.status')}</li>
        <li>{t('monitoring.projects.link')}</li>
      </ul>
    </Box>
  );
};
export default MonitoringMonitoringProjectsPage;
