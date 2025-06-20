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

const StrategicIssuesPage = ({ data = {}, onChange = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Section title={t('strategyFormulation.strategicIssues.items.issuesList')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.strategicIssues.items.issuesList')}
          name="issuesList"
          value={data.issuesList || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.strategicIssues.items.keyFactors')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.strategicIssues.items.keyFactors')}
          name="keyFactors"
          value={data.keyFactors || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.strategicIssues.items.failureConsequences')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.strategicIssues.items.failureConsequences')}
          name="consequences"
          value={data.consequences || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.strategicIssues.items.issuesDescription')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.strategicIssues.items.issuesDescription')}
          name="issueDescriptions"
          value={data.issueDescriptions || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.strategicIssues.items.prioritization')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.strategicIssues.items.prioritization')}
          name="prioritizationMatrix"
          value={data.prioritizationMatrix || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
    </Box>
  );
};

export default StrategicIssuesPage;
