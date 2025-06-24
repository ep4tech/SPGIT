import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button } from '@mui/material';

const ChangePage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.change.title')}</Typography>
      {/* Change Program Setup */}
      <Box mt={3} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.change.programSetup')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.change.titleField')} fullWidth />
          <TextField label={t('execution.change.audience')} fullWidth />
          <TextField label={t('execution.change.communicationPlan')} fullWidth multiline rows={2} />
          <TextField label={t('execution.change.trainingPlan')} fullWidth multiline rows={2} />
          <TextField label={t('execution.change.resistanceTracking')} fullWidth />
          <Button variant="contained">{t('execution.change.saveProgram')}</Button>
        </Box>
      </Box>
      {/* Integration Mapping */}
      <Box mt={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.change.integrationMapping')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.change.initiativeDepartment')} fullWidth />
          <TextField label={t('execution.change.impactRating')} fullWidth />
          <TextField label={t('execution.change.checklistForIntegration')} fullWidth />
          <TextField label={t('execution.change.linkedKpis')} fullWidth />
          <Button variant="contained">{t('execution.change.mapIntegration')}</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePage;
