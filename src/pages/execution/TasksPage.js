import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const TasksPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.tasks.title')}</Typography>
      {/* Task Tracker (Gantt/Grid) */}
      <Box mt={3} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.tasks.taskTracker')}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('execution.tasks.taskName')}</TableCell>
              <TableCell>{t('execution.tasks.startDate')}</TableCell>
              <TableCell>{t('execution.tasks.endDate')}</TableCell>
              <TableCell>{t('execution.tasks.assignedTo')}</TableCell>
              <TableCell>{t('execution.tasks.dependencies')}</TableCell>
              <TableCell>{t('execution.tasks.status')}</TableCell>
              <TableCell>{t('execution.tasks.progress')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Placeholder rows */}
            <TableRow>
              <TableCell>Define Scope</TableCell>
              <TableCell>2025-07-01</TableCell>
              <TableCell>2025-07-05</TableCell>
              <TableCell>---</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Not Started</TableCell>
              <TableCell>0%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('execution.tasks.assignTeam')}</TableCell>
              <TableCell>2025-07-06</TableCell>
              <TableCell>2025-07-10</TableCell>
              <TableCell>---</TableCell>
              <TableCell>Define Scope</TableCell>
              <TableCell>Not Started</TableCell>
              <TableCell>0%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {/* Milestones */}
      <Box mt={4} mb={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.tasks.milestones')}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('execution.tasks.milestoneTitle')}</TableCell>
              <TableCell>{t('execution.tasks.deadline')}</TableCell>
              <TableCell>{t('execution.tasks.completionStatus')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Placeholder rows */}
            <TableRow>
              <TableCell>{t('execution.tasks.projectKickoff')}</TableCell>
              <TableCell>2025-07-01</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First Delivery</TableCell>
              <TableCell>2025-08-01</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {/* Project Overview */}
      <Box mt={4} p={2} bgcolor="#fafafa" borderRadius={2}>
        <Typography variant="h6">{t('execution.tasks.projectOverview')}</Typography>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField label={t('execution.tasks.projectCharter')} fullWidth multiline rows={2} />
          <TextField label={t('execution.tasks.scopeTimeline')} fullWidth multiline rows={2} />
          <TextField label={t('execution.tasks.stakeholders')} fullWidth multiline rows={2} />
          <TextField label={t('execution.tasks.budgetRisks')} fullWidth multiline rows={2} />
          <TextField label={t('execution.tasks.changeRequest')} fullWidth multiline rows={2} />
        </Box>
      </Box>
    </Box>
  );
};

export default TasksPage;
