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

const ObjectivesProjectsPage = ({ data = {}, onChange = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Section title={t('strategyFormulation.objectivesProjects.items.objectivesDistribution')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.objectivesProjects.items.assignStrategicObjectives')}
          name="objectivesDistribution"
          value={data.objectivesDistribution || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.objectivesProjects.items.projectsPrograms')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.objectivesProjects.items.defineProgramsAndInitiatives')}
          name="projectsPrograms"
          value={data.projectsPrograms || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.objectivesProjects.items.requirements')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.objectivesProjects.items.specifyHumanFinancialAndLogisticalNeeds')}
          name="implementationRequirements"
          value={data.implementationRequirements || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.objectivesProjects.items.documentation')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.objectivesProjects.items.centralRepositoryForSupportingDocuments')}
          name="projectDocumentation"
          value={data.projectDocumentation || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
      <Section title={t('strategyFormulation.objectivesProjects.items.stakeholders')}>
        <TextField
          fullWidth
          label={t('strategyFormulation.objectivesProjects.items.linkStakeholdersToRelevantInitiatives')}
          name="stakeholderManagement"
          value={data.stakeholderManagement || ''}
          onChange={onChange}
          multiline
          minRows={3}
          sx={{ mb: 2 }}
        />
      </Section>
    </Box>
  );
};

export default ObjectivesProjectsPage;
