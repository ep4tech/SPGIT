import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionAlignmentPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.alignment.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.alignment.description')}</Typography>
      <Typography variant="subtitle1">{t('execution.alignment.contents')}</Typography>
      <ul>
        <li>{t('execution.alignment.compare')}</li>
        <li>{t('execution.alignment.board')}</li>
        <li>{t('execution.alignment.warnings')}</li>
      </ul>
    </Box>
  );
};
export default ExecutionAlignmentPage;
