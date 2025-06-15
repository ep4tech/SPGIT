import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionProjectsPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.projects.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.projects.description')}</Typography>
      <Typography variant="subtitle1">{t('execution.projects.contents')}</Typography>
      <ul>
        <li>{t('execution.projects.gantt')}</li>
        <li>{t('execution.projects.groups')}</li>
        <li>{t('execution.projects.status')}</li>
        <li>{t('execution.projects.link')}</li>
      </ul>
    </Box>
  );
};
export default ExecutionProjectsPage;
