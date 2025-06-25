import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DocumentsPage = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div style={{color: 'red', fontWeight: 'bold'}}>DEBUG: DocumentsPage Rendered</div>
      <Box p={3}>

      <Typography variant="h5" gutterBottom>{t('execution.documents.title')}</Typography>
      {/* Upload Document Section */}
      <Box mt={3} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.documents.uploadTitle')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.documents.titleField')} fullWidth />
          <TextField label={t('execution.documents.category')} fullWidth placeholder={t('execution.documents.categoryPlaceholder')} />
          <Button variant="outlined" component="label">{t('execution.documents.uploadFile')}<input type="file" hidden /></Button>
          <TextField label={t('execution.documents.description')} fullWidth multiline rows={2} />
          <TextField label={t('execution.documents.version')} fullWidth value="1.0" disabled />
          <TextField label={t('execution.documents.approvalStatus')} fullWidth placeholder={t('execution.documents.approvalStatusPlaceholder')} />
          <Button variant="contained">{t('submit')}</Button>
        </Box>
      </Box>
      {/* Implementation Guide Builder Section */}
      <Box mt={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.documents.guideBuilderTitle')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.documents.what')} fullWidth multiline rows={2} />
          <TextField label={t('execution.documents.why')} fullWidth multiline rows={2} />
          <TextField label={t('execution.documents.when')} fullWidth multiline rows={2} />
          <TextField label={t('execution.documents.who')} fullWidth multiline rows={2} />
          <TextField label={t('execution.documents.how')} fullWidth multiline rows={2} />
          <Box display="flex" gap={2}>
            <Button variant="outlined">{t('execution.documents.exportPdf')}</Button>
            <Button variant="outlined">{t('execution.documents.exportWord')}</Button>
          </Box>
          <Typography variant="body2" color="textSecondary">{t('execution.documents.versionControl')}: <b>1.0</b> ({t('execution.documents.placeholder')})</Typography>
        </Box>
      </Box>
    </Box>
    </React.Fragment>
  );
};

export default DocumentsPage;
