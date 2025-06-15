import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionSetupPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.setup.Title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.setup.Desc')}</Typography>
      <ul>
        <li>{t('execution.setup.Doc')}</li>
        <li>{t('execution.setup.Schedule')}</li>
        <li>{t('execution.setup.Org')}</li>
      </ul>
      <Typography variant="subtitle1">{t('execution.setup.Contents')}</Typography>
      <ul>
        <li>{t('execution.setup.DocInput')}</li>
        <li>{t('execution.setup.TeamsMatrix')}</li>
        <li>{t('execution.setup.OrgChart')}</li>
        <li>{t('execution.setup.Assign')}</li>
      </ul>
    </Box>
  );
};
export default ExecutionSetupPage;
