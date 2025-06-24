import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Select,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

import { useProject } from '../contexts/ProjectContext';

const ProjectSelector = ({ sx = {} }) => {
  const {
    projects,
    selectedProjectId,
    setSelectedProjectId,
    setProjects
  } = useProject();

  console.log('Rendering ProjectSelector');

  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleOpenDialog = (mode) => {
    setEditMode(mode === 'edit');
    if (mode === 'edit' && selectedProjectId) {
      const project = projects.find(p => p.id === selectedProjectId);
      setProjectName(project?.name || '');
    } else {
      setProjectName('');
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setProjectName('');
  };

  const handleSave = () => {
    if (editMode && selectedProjectId) {
      setProjects(prev => prev.map(p => p.id === selectedProjectId ? { ...p, name: projectName } : p));
    } else {
      const newProject = { id: Date.now().toString(), name: projectName };
      setProjects(prev => [...prev, newProject]);
      setSelectedProjectId(newProject.id);
    }
    handleCloseDialog();
  };

  return (
    <Box sx={{ ...sx }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2,
        direction: isRtl ? 'rtl' : 'ltr',
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
        mb: 2,
        boxShadow: 1
      }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{t('projectSelector.selectProject', 'Select Project')}</Typography>
        <Select
          value={selectedProjectId}
          onChange={e => setSelectedProjectId(e.target.value)}
          size="small"
          sx={{ minWidth: 160 }}
          MenuProps={{ anchorOrigin: { vertical: 'bottom', horizontal: isRtl ? 'right' : 'left' } }}
        >
          <MenuItem value="" disabled>
            {t('selectProject')}
          </MenuItem>
          {projects.map(project => (
            <MenuItem key={project.id} value={project.id}>{project.name}</MenuItem>
          ))}
        </Select>
        
        <IconButton 
          onClick={() => handleOpenDialog('create')}
          color="primary"
          size="small"
          sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' } }}
        >
          <AddIcon />
        </IconButton>

        {selectedProjectId && (
          <IconButton 
            onClick={() => handleOpenDialog('edit')}
            color="primary"
            size="small"
            sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' } }}
          >
            <EditIcon />
          </IconButton>
        )}
      </Box>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          {editMode ? t('editProject') : t('createProject')}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={t('projectName')}
            type="text"
            fullWidth
            variant="standard"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>{t('cancel')}</Button>
          <Button onClick={handleSave} variant="contained">
            {t('save')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectSelector;
