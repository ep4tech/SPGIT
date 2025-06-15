import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionRoadmapPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.roadmap.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.roadmap.description')}</Typography>
      <Typography variant="subtitle1">{t('execution.roadmap.contents')}</Typography>
      <ul>
        <li>{t('execution.roadmap.table')}</li>
        <li>{t('execution.roadmap.taskBox')}</li>
        <li>{t('execution.roadmap.filter')}</li>
      </ul>
    </Box>
  );
};
export default ExecutionRoadmapPage;
