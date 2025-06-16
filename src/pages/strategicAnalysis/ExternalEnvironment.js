import React from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const ExternalEnvironment = () => {
  const { t } = useTranslation();

  const pestFactors = [
    {
      id: 'political',
      title: t('strategicAnalysis.external.political'),
      description: t('strategicAnalysis.external.politicalDesc'),
    },
    {
      id: 'economic',
      title: t('strategicAnalysis.external.economic'),
      description: t('strategicAnalysis.external.economicDesc'),
    },
    {
      id: 'social',
      title: t('strategicAnalysis.external.social'),
      description: t('strategicAnalysis.external.socialDesc'),
    },
    {
      id: 'technological',
      title: t('strategicAnalysis.external.technological'),
      description: t('strategicAnalysis.external.technologicalDesc'),
    },
  ];

  const stakeholderSections = [
    {
      id: 'beneficiaries',
      title: t('strategicAnalysis.external.beneficiaries'),
      description: t('strategicAnalysis.external.beneficiariesDesc'),
    },
    {
      id: 'funders',
      title: t('strategicAnalysis.external.funders'),
      description: t('strategicAnalysis.external.fundersDesc'),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategicAnalysis.external.title')}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        {t('strategicAnalysis.external.subtitle')}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t('strategicAnalysis.external.pestAnalysis')}
            </Typography>
            {pestFactors.map((factor) => (
              <Accordion key={factor.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">{factor.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {factor.description}
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder={t('enterDetails')}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t('strategicAnalysis.external.stakeholderAnalysis')}
            </Typography>
            {stakeholderSections.map((section) => (
              <Box key={section.id} sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {section.description}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder={t('enterDetails')}
                />
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExternalEnvironment;
