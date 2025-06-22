import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringSetupPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringSetupPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.setup.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('monitoring.setup.description')}</Typography>
      <ul>
        <li>{t('monitoring.setup.doc')}</li>
        <li>{t('monitoring.setup.schedule')}</li>
        <li>{t('monitoring.setup.org')}</li>
      </ul>
      <Typography variant="subtitle1">{t('monitoring.setup.contents')}</Typography>
      <ul>
        <li>{t('monitoring.setup.docInput')}</li>
        <li>{t('monitoring.setup.teamsMatrix')}</li>
        <li>{t('monitoring.setup.orgChart')}</li>
        <li>{t('monitoring.setup.assign')}</li>
      </ul>
    </Box>
  );
};
export default MonitoringSetupPage;
