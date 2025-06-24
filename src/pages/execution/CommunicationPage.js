import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const CommunicationPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.communication.title')}</Typography>
      {/* Dissemination Log */}
      <Box mt={3} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.communication.disseminationLog')}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('execution.communication.channel')}</TableCell>
              <TableCell>{t('execution.communication.dateSent')}</TableCell>
              <TableCell>{t('execution.communication.recipientGroup')}</TableCell>
              <TableCell>{t('execution.communication.confirmedReceived')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Placeholder rows */}
            <TableRow>
              <TableCell>{t('execution.communication.email')}</TableCell>
              <TableCell>2025-07-01</TableCell>
              <TableCell>{t('execution.communication.allStaff')}</TableCell>
              <TableCell>{t('execution.communication.no')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('execution.communication.portal')}</TableCell>
              <TableCell>2025-07-02</TableCell>
              <TableCell>{t('execution.communication.managers')}</TableCell>
              <TableCell>{t('execution.communication.yes')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {/* Stakeholder Resource Access */}
      <Box mt={4} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.communication.stakeholderResourceAccess')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <Button variant="outlined">{t('execution.communication.downloads')}</Button>
          <Button variant="outlined">{t('execution.communication.faqs')}</Button>
          <TextField label={t('execution.communication.feedbackBox')} fullWidth multiline rows={2} />
        </Box>
      </Box>
      {/* Senior Management Communication */}
      <Box mt={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.communication.seniorManagement')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.communication.reportType')} fullWidth />
          <TextField label={t('execution.communication.date')} fullWidth />
          <TextField label={t('execution.communication.summary')} fullWidth multiline rows={2} />
          <TextField label={t('execution.communication.escalation')} fullWidth />
          <TextField label={t('execution.communication.feedbackLog')} fullWidth multiline rows={2} />
        </Box>
      </Box>
    </Box>
  );
};

export default CommunicationPage;
