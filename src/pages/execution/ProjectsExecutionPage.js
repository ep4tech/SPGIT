import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProjectsExecutionPage = () => {
  console.log('======>> We ae in pages/execution/ProjectsExecutionPage.js');
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({ name: '', status: '', progress: '' });

  const handleAdd = () => {
    if (project.name && project.status && project.progress) {
      setProjects([...projects, project]);
      setProject({ name: '', status: '', progress: '' });
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.projects.title')}</Typography>
      <Paper sx={{ p: 3, mb: 2 }}>
        <TextField label={t('execution.projects.name')} name="name" value={project.name} onChange={e => setProject({ ...project, name: e.target.value })} sx={{ mr: 1 }} />
        <TextField label={t('execution.projects.status')} name="status" value={project.status} onChange={e => setProject({ ...project, status: e.target.value })} sx={{ mr: 1 }} />
        <TextField label={t('execution.projects.progress')} name="progress" value={project.progress} onChange={e => setProject({ ...project, progress: e.target.value })} sx={{ mr: 1 }} />
        <Button onClick={handleAdd} variant="contained">{t('add')}</Button>
      </Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('execution.projects.name')}</TableCell>
            <TableCell>{t('execution.projects.status')}</TableCell>
            <TableCell>{t('execution.projects.progress')}</TableCell>
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

export default ProjectsExecutionPage;
