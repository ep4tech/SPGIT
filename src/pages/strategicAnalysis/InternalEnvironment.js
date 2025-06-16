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
  Rating,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const InternalEnvironment = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'objectives',
      title: t('strategicAnalysis.internal.objectives'),
      description: t('strategicAnalysis.internal.objectivesDesc'),
      hasRating: false,
    },
    {
      id: 'services',
      title: t('strategicAnalysis.internal.services'),
      description: t('strategicAnalysis.internal.servicesDesc'),
      hasRating: true,
    },
    {
      id: 'culture',
      title: t('strategicAnalysis.internal.culture'),
      description: t('strategicAnalysis.internal.cultureDesc'),
      hasRating: false,
    },
    {
      id: 'resources',
      title: t('strategicAnalysis.internal.resources'),
      description: t('strategicAnalysis.internal.resourcesDesc'),
      subsections: [
        {
          id: 'financial',
          title: t('strategicAnalysis.internal.financial'),
          hasRating: true,
        },
        {
          id: 'human',
          title: t('strategicAnalysis.internal.human'),
          hasRating: true,
        },
      ],
    },
    {
      id: 'performance',
      title: t('strategicAnalysis.internal.performance'),
      description: t('strategicAnalysis.internal.performanceDesc'),
      hasRating: true,
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategicAnalysis.internal.title')}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        {t('strategicAnalysis.internal.subtitle')}
      </Typography>

      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} key={section.id}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {section.description}
              </Typography>

              {section.subsections ? (
                section.subsections.map((subsection) => (
                  <Accordion key={subsection.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{subsection.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          variant="outlined"
                          placeholder={t('enterDetails')}
                        />
                      </Box>
                      {subsection.hasRating && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography variant="body2">
                            {t('strategicAnalysis.internal.rating')}:
                          </Typography>
                          <Rating />
                        </Box>
                      )}
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder={t('enterDetails')}
                    sx={{ mb: section.hasRating ? 2 : 0 }}
                  />
                  {section.hasRating && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="body2">
                        {t('strategicAnalysis.internal.rating')}:
                      </Typography>
                      <Rating />
                    </Box>
                  )}
                </>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InternalEnvironment;
