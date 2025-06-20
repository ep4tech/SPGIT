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

const GoalsObjectivesPage = ({ data = {}, onChange = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Section title={t('strategyFormulation.goalsObjectives.items.strategicGoals')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.goalsObjectives.items.strategicGoals')}
          name="strategicGoals"
          value={data.strategicGoals || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.goalsObjectives.items.objectivesFormulation')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.goalsObjectives.items.objectivesFormulation')}
          name="objectivesFormulation"
          value={data.objectivesFormulation || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.goalsObjectives.items.strategySelection')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.goalsObjectives.items.strategySelection')}
          name="strategySelection"
          value={data.strategySelection || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.goalsObjectives.items.obstaclesAndAlternatives')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.goalsObjectives.items.obstaclesAndAlternatives')}
          name="obstaclesAlternatives"
          value={data.obstaclesAlternatives || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.goalsObjectives.items.strategyReview')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.goalsObjectives.items.strategyReview')}
          name="strategyReview"
          value={data.strategyReview || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.goalsObjectives.items.performanceIndicators')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.goalsObjectives.items.performanceIndicators')}
          name="performanceIndicators"
          value={data.performanceIndicators || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.goalsObjectives.items.timeline')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.goalsObjectives.items.timeline')}
          name="timelines"
          value={data.timelines || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
    </Box>
  );
};

export default GoalsObjectivesPage;
