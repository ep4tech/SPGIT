import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionSetupPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.setup.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.setup.description')}</Typography>
      <ul>
        <li>{t('execution.setup.doc')}</li>
        <li>{t('execution.setup.schedule')}</li>
        <li>{t('execution.setup.org')}</li>
      </ul>
      <Typography variant="subtitle1">{t('execution.setup.contents')}</Typography>
      <ul>
        <li>{t('execution.setup.docInput')}</li>
        <li>{t('execution.setup.teamsMatrix')}</li>
        <li>{t('execution.setup.orgChart')}</li>
        <li>{t('execution.setup.assign')}</li>
      </ul>
    </Box>
  );
};
export default ExecutionSetupPage;
