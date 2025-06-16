import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Upload as UploadIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';

const Documents = ({ formData, setFormData }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const documentTypes = [
    'officialDecision',
    'commitmentMinutes',
    'goalDocument',
    'scopeDocument',
    'workPlan',
    'financialPlan',
    'obstaclesAndSolutions',
    'benefitsAnalysis',
    'futureStudies',
    'leadershipParticipation',
    'externalCoordination'
  ];

  const handleFileUpload = (docType) => (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docType]: file
        },
      }));
    }
  };

  const handleDelete = (docType) => () => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docType]: null
      },
    }));
  };

  const documents = formData.documents || {};
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('dataWizard.documents.title')}
      </Typography>
      <Grid container spacing={3}>
        {documentTypes.map((docType) => (
          <Grid item xs={12} sm={6} key={docType}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                minHeight: 100,
                direction: isRtl ? 'rtl' : 'ltr'
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" gutterBottom>
                  {t('dataWizard.documents.' + docType)}
                </Typography>
                {documents[docType] ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <DescriptionIcon color="primary" />
                    <Typography variant="body2" sx={{ flexGrow: 1 }}>
                      {documents[docType].name}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={handleDelete(docType)}
                      sx={{ ml: 1 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={!isRtl && <UploadIcon />}
                    endIcon={isRtl && <UploadIcon />}
                    sx={{ direction: isRtl ? 'rtl' : 'ltr' }}
                  >
                    {t('dataWizard.documents.upLoadFile')}
                    <input
                      type="file"
                      hidden
                      onChange={handleFileUpload(docType)}
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                    />
                  </Button>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Documents;
