import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionFeedbackPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.feedback.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.feedback.description')}</Typography>
      <Typography variant="subtitle1">{t('execution.feedback.contents')}</Typography>
      <ul>
        <li>{t('execution.feedback.input')}</li>
        <li>{t('execution.feedback.chart')}</li>
        <li>{t('execution.feedback.reports')}</li>
        <li>{t('execution.feedback.alerts')}</li>
      </ul>
    </Box>
  );
};
export default ExecutionFeedbackPage;
