import React from 'react';
import { Box, Typography, TextField, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Section({ title, children }) {
  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{title}</Typography>
      {children}
    </Paper>
  );
}

const VisionChallengesPage = ({ data = {}, onChange = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Section title={t('strategyFormulation.visionChallenges.items.visionElements')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.visionChallenges.items.visionElements')}
          name="visionElements"
          value={data.visionElements || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.visionChallenges.items.challengesMatrix')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.visionChallenges.items.challengesMatrix')}
          name="challengesMatrix"
          value={data.challengesMatrix || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.visionChallenges.items.successIndicators')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.visionChallenges.items.successIndicators')}
          name="successIndicators"
          value={data.successIndicators || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.visionChallenges.items.realityGap')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.visionChallenges.items.realityGap')}
          name="realityVisionGap"
          value={data.realityVisionGap || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
    </Box>
  );
};

export default VisionChallengesPage;
