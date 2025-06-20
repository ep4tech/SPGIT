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

const ExecutivePlansPage = ({ data = {}, onChange = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Section title={t('strategyFormulation.executivePlans.items.planningProcess')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.executivePlans.items.planningProcess')}
          name="planningProcessOverview"
          value={data.planningProcessOverview || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.executivePlans.items.budgetAllocation')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.executivePlans.items.budgetAllocation')}
          name="budgetAllocation"
          value={data.budgetAllocation || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.executivePlans.items.timeframes')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.executivePlans.items.timeframes')}
          name="timeframes"
          value={data.timeframes || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.executivePlans.items.responsibilities')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.executivePlans.items.responsibilities')}
          name="responsibilitiesMatrix"
          value={data.responsibilitiesMatrix || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.executivePlans.items.dateRange')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.executivePlans.items.dateRange')}
          name="dateRangesMilestones"
          value={data.dateRangesMilestones || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
    </Box>
  );
};

export default ExecutivePlansPage;
