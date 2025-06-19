import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExecutionCommunicationPage = () => {
  console.log('======>> We ae in pages/execution/ExecutionCommunicationPage.js');
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.communication.title')}</Typography>
      <Typography variant="body1" gutterBottom>{t('execution.communication.description')}</Typography>
      <ul>
        <li>{t('execution.communication.publish')}</li>
        <li>{t('execution.communication.channels')}</li>
      </ul>
      <Typography variant="subtitle1">{t('execution.communication.contents')}</Typography>
      <ul>
        <li>{t('execution.communication.upload')}</li>
        <li>{t('execution.communication.notifications')}</li>
        <li>{t('execution.communication.log')}</li>
        <li>{t('execution.communication.board')}</li>
      </ul>
    </Box>
  );
};
export default ExecutionCommunicationPage;
