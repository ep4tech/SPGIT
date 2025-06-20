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

const CoordinationPage = ({ data = {}, onChange = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Section title={t('strategyFormulation.coordination.internalCoordination')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.coordination.internalCoordination')}
          name="internalCoordination"
          value={data.internalCoordination || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.coordination.externalCoordination')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.coordination.externalCoordination')}
          name="externalCoordination"
          value={data.externalCoordination || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.coordination.objectivesMatrix')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.coordination.objectivesMatrix')}
          name="objectivesExecutionMatrix"
          value={data.objectivesExecutionMatrix || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.coordination.plansMatrix')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.coordination.plansMatrix')}
          name="plansEntitiesMatrix"
          value={data.plansEntitiesMatrix || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.coordination.relatedProjects')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.coordination.relatedProjects')}
          name="projectCrossLinking"
          value={data.projectCrossLinking || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
    </Box>
  );
};

export default CoordinationPage;
