import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const StructurePage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.structure.title')}</Typography>
      {/* Organizational Structure Table */}
      <Box mt={3} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.structure.orgStructure')}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('execution.structure.position')}</TableCell>
              <TableCell>{t('execution.structure.name')}</TableCell>
              <TableCell>{t('execution.structure.role')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Placeholder rows */}
            <TableRow>
              <TableCell>{t('execution.structure.projectManager')}</TableCell>
              <TableCell>---</TableCell>
              <TableCell>{t('execution.structure.manager')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('execution.structure.teamLead')}</TableCell>
              <TableCell>---</TableCell>
              <TableCell>{t('execution.structure.lead')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {/* Role Definition Form */}
      <Box mt={4} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.structure.roleDefinition')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.structure.roleTitle')} fullWidth />
          <TextField label={t('execution.structure.responsibilities')} fullWidth multiline rows={2} />
          <TextField label={t('execution.structure.kpis')} fullWidth />
          <TextField label={t('execution.structure.requiredSkills')} fullWidth />
          <TextField label={t('execution.structure.assignedPerson')} fullWidth />
          <Button variant="contained">{t('execution.structure.addRole')}</Button>
        </Box>
      </Box>
      {/* Team Builder Form */}
      <Box mt={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.structure.teamBuilder')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.structure.teamName')} fullWidth />
          <TextField label={t('execution.structure.purpose')} fullWidth />
          <TextField label={t('execution.structure.members')} fullWidth placeholder={t('execution.structure.membersPlaceholder')} />
          <TextField label={t('execution.structure.resourcesAssigned')} fullWidth />
          <Button variant="contained">{t('execution.structure.createTeam')}</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StructurePage;
