import React from 'react';
import { Box, Typography, Drawer } from '@mui/material';
import ExecutionMenu from './ExecutionMenu';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ExecutionSection = () => {
  const { t } = useTranslation();
  return (
    <Box display="flex" height="100%">
      <Box width={260} minWidth={220} bgcolor="#f5f5f5" p={2}>
        <Typography variant="h6" gutterBottom>{t('execution.title')} (التنفيذ)</Typography>
        <ExecutionMenu />
      </Box>
      <Box flex={1} p={3}>
        <Outlet />
        <Typography variant="body2" color="textSecondary" mt={4}>
          {/* This is the Execution section. Select a submenu to begin. You can upgrade these pages later. */}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExecutionSection;
