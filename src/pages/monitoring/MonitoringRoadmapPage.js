import React from 'react';
import { Box, Typography, Paper, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringRoadmapPage = () => {
  const { t } = useTranslation();
  const [milestone, setMilestone] = React.useState({ title: '', deadline: '', status: '' });
  const [milestones, setMilestones] = React.useState([]);

  const handleAdd = () => {
    if (milestone.title && milestone.deadline && milestone.status) {
      setMilestones([...milestones, milestone]);
      setMilestone({ title: '', deadline: '', status: '' });
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.roadmap.title')}</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField label={t('monitoring.roadmap.milestoneTitle')} name="title" value={milestone.title} onChange={e => setMilestone({ ...milestone, title: e.target.value })} sx={{ mr: 1, mb: 1 }} />
        <TextField label={t('monitoring.roadmap.deadline')} name="deadline" type="date" value={milestone.deadline} onChange={e => setMilestone({ ...milestone, deadline: e.target.value })} InputLabelProps={{ shrink: true }} sx={{ mr: 1, mb: 1 }} />
        <TextField label={t('monitoring.roadmap.status')} name="status" value={milestone.status} onChange={e => setMilestone({ ...milestone, status: e.target.value })} sx={{ mr: 1, mb: 1 }} />
        <Button onClick={handleAdd} variant="contained" sx={{ mt: 1 }}>{t('monitoring.roadmap.addMilestone')}</Button>
      </Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('monitoring.roadmap.milestoneTitle')}</TableCell>
            <TableCell>{t('monitoring.roadmap.deadline')}</TableCell>
            <TableCell>{t('monitoring.roadmap.status')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {milestones.map((ms, idx) => (
            <TableRow key={idx}>
              <TableCell>{ms.title}</TableCell>
              <TableCell>{ms.deadline}</TableCell>
              <TableCell>{ms.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
export default MonitoringRoadmapPage;
