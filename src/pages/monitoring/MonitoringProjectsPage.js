import React from 'react';
import { Box, Typography, Paper, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringMonitoringProjectsPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringMonitoringProjectsPage.js');
  const { t } = useTranslation();
  const [project, setProject] = React.useState({ name: '', status: '', progress: '' });
  const [projects, setProjects] = React.useState([]);

  const handleAdd = () => {
    if (project.name && project.status && project.progress) {
      setProjects([...projects, project]);
      setProject({ name: '', status: '', progress: '' });
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.projects.title')}</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField label={t('monitoring.projects.name')} name="name" value={project.name} onChange={e => setProject({ ...project, name: e.target.value })} sx={{ mr: 1, mb: 1 }} />
        <TextField label={t('monitoring.projects.status')} name="status" value={project.status} onChange={e => setProject({ ...project, status: e.target.value })} sx={{ mr: 1, mb: 1 }} />
        <TextField label={t('monitoring.projects.progress')} name="progress" value={project.progress} onChange={e => setProject({ ...project, progress: e.target.value })} sx={{ mr: 1, mb: 1 }} />
        <Button onClick={handleAdd} variant="contained" sx={{ mt: 1 }}>{t('add')}</Button>
      </Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('monitoring.projects.name')}</TableCell>
            <TableCell>{t('monitoring.projects.status')}</TableCell>
            <TableCell>{t('monitoring.projects.progress')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((proj, idx) => (
            <TableRow key={idx}>
              <TableCell>{proj.name}</TableCell>
              <TableCell>{proj.status}</TableCell>
              <TableCell>{proj.progress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
export default MonitoringMonitoringProjectsPage;
