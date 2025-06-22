import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringRoadmapPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringRoadmapPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.roadmap.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('monitoring.roadmap.description')}</Typography>
      <Typography variant="subtitle1">{t('monitoring.roadmap.contents')}</Typography>
      <ul>
        <li>{t('monitoring.roadmap.table')}</li>
        <li>{t('monitoring.roadmap.taskBox')}</li>
        <li>{t('monitoring.roadmap.filter')}</li>
      </ul>
    </Box>
  );
};
export default MonitoringRoadmapPage;
