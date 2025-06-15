import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionSupportPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.support.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.support.description')}</Typography>
      <Typography variant="subtitle1">{t('execution.support.contents')}</Typography>
      <ul>
        <li>{t('execution.support.log')}</li>
        <li>{t('execution.support.resistance')}</li>
        <li>{t('execution.support.programs')}</li>  
      </ul>
    </Box>
  );
};
export default ExecutionSupportPage;
