import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button } from '@mui/material';

const FeedbackPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.feedback.title')}</Typography>
      {/* Feedback Form Builder */}
      <Box mt={3} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.feedback.formBuilder')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.feedback.targetGroup')} fullWidth />
          <TextField label={t('execution.feedback.topic')} fullWidth />
          <TextField label={t('execution.feedback.submissionType')} fullWidth />
          <Button variant="contained">{t('execution.feedback.createForm')}</Button>
        </Box>
      </Box>
      {/* Data Collection Point */}
      <Box mt={4} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.feedback.dataCollection')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.feedback.method')} fullWidth />
          <TextField label={t('execution.feedback.validationRules')} fullWidth />
          <Button variant="contained">{t('execution.feedback.addDataPoint')}</Button>
        </Box>
      </Box>
      {/* Issue Reporting */}
      <Box mt={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.feedback.issueReporting')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.feedback.issueTitle')} fullWidth />
          <TextField label={t('execution.feedback.descriptionImpact')} fullWidth multiline rows={2} />
          <TextField label={t('execution.feedback.suggestedFix')} fullWidth />
          <TextField label={t('execution.feedback.urgency')} fullWidth />
          <TextField label={t('execution.feedback.assignedTo')} fullWidth />
          <TextField label={t('execution.feedback.resolutionLog')} fullWidth multiline rows={2} />
          <Button variant="contained">{t('execution.feedback.reportIssue')}</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackPage;
