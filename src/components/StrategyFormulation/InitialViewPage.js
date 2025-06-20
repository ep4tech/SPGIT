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

const InitialViewPage = ({ data = {}, onChange = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Section title={t('strategyFormulation.initialView.items.leadershipExpectations')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.initialView.items.leadershipExpectations')}
          name="leadershipExpectations"
          value={data.leadershipExpectations || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.initialView.items.employeeExpectations')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.initialView.items.employeeExpectations')}
          name="employeeExpectations"
          value={data.employeeExpectations || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.initialView.items.stakeholderRequirements')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.initialView.items.stakeholderRequirements')}
          name="stakeholderRequirements"
          value={data.stakeholderRequirements || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.initialView.items.nationalDevelopment')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.initialView.items.nationalDevelopment')}
          name="nationalPlanTrends"
          value={data.nationalPlanTrends || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.initialView.items.globalTrends')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.initialView.items.globalTrends')}
          name="globalTrends"
          value={data.globalTrends || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
    </Box>
  );
};

export default InitialViewPage;
