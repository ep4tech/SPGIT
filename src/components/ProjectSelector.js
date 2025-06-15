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

const ProjectSelector = ({ 
  projects = [], 
  selectedProjectId, 
  onProjectSelect = () => {}, 
  onProjectCreate = () => {}, 
  onProjectUpdate = () => {},
  sx = {}
}) => {
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
      onProjectUpdate({ id: selectedProjectId, name: projectName });
    } else {
      onProjectCreate({ name: projectName });
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
        <Select
          value={selectedProjectId || ''}
          onChange={(e) => onProjectSelect(e.target.value)}
          sx={{ 
            minWidth: 300,
            bgcolor: 'white',
            '& .MuiSelect-select': {
              textAlign: isRtl ? 'right' : 'left'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.23)'
            }
          }}
          displayEmpty
          variant="outlined"
        >
          <MenuItem value="" disabled>
            {t('selectProject')}
          </MenuItem>
          {projects.map((project) => (
            <MenuItem key={project.id} value={project.id}>
              {project.name}
            </MenuItem>
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
            label={t('basicInfo.projectName')}
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
