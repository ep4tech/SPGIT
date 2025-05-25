import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Card,
  CardContent,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Autocomplete,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const Coordination = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState({
    projectCoordination: [],
    programAlignment: [],
    dependencies: [],
    communication: []
  });
  const [editMode, setEditMode] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    status: 'planned',
    relatedProjects: [],
    stakeholders: [],
    frequency: 'weekly'
  });

  const handleAddItem = (section) => {
    if (newItem.title.trim() && newItem.description.trim()) {
      setItems(prev => ({
        ...prev,
        [section]: [...prev[section], { id: Date.now(), ...newItem }]
      }));
      setNewItem({
        title: '',
        description: '',
        status: 'planned',
        relatedProjects: [],
        stakeholders: [],
        frequency: 'weekly'
      });
      setEditMode(null);
    }
  };

  const handleDeleteItem = (section, itemId) => {
    setItems(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== itemId)
    }));
  };

  const sections = [
    'projectCoordination',
    'programAlignment',
    'dependencies',
    'communication'
  ];

  const statuses = ['planned', 'inProgress', 'completed'];
  const frequencies = ['daily', 'weekly', 'monthly', 'quarterly'];
  const projects = ['Project A', 'Project B', 'Project C']; // This should be dynamic in real app
  const stakeholdersList = ['Stakeholder 1', 'Stakeholder 2', 'Stakeholder 3']; // This should be dynamic

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategyFormulation.coordination.title')}
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} key={section}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t(`strategyFormulation.coordination.items.${section}`)}
              </Typography>
              <Grid container spacing={2}>
                {items[section].map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {item.description}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {t('status')}: {t(item.status)}
                          </Typography>
                          {item.frequency && (
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {t('frequency')}: {t(item.frequency)}
                            </Typography>
                          )}
                        </Box>
                        {item.relatedProjects.length > 0 && (
                          <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {t('relatedProjects')}:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {item.relatedProjects.map((project, index) => (
                                <Chip
                                  key={index}
                                  label={project}
                                  size="small"
                                  color="primary"
                                  variant="outlined"
                                />
                              ))}
                            </Box>
                          </Box>
                        )}
                        {item.stakeholders.length > 0 && (
                          <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {t('stakeholders')}:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {item.stakeholders.map((stakeholder, index) => (
                                <Chip
                                  key={index}
                                  label={stakeholder}
                                  size="small"
                                />
                              ))}
                            </Box>
                          </Box>
                        )}
                      </CardContent>
                      <CardActions>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteItem(section, item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
                {editMode === section ? (
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <TextField
                        fullWidth
                        size="small"
                        value={newItem.title}
                        onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                        placeholder={t('enterTitle')}
                      />
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        size="small"
                        value={newItem.description}
                        onChange={(e) => setNewItem(prev => ({ ...prev, description: e.target.value }))}
                        placeholder={t('enterDescription')}
                      />
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                          <InputLabel>{t('status')}</InputLabel>
                          <Select
                            value={newItem.status}
                            label={t('status')}
                            onChange={(e) => setNewItem(prev => ({ ...prev, status: e.target.value }))}
                          >
                            {statuses.map(status => (
                              <MenuItem key={status} value={status}>
                                {t(status)}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                          <InputLabel>{t('frequency')}</InputLabel>
                          <Select
                            value={newItem.frequency}
                            label={t('frequency')}
                            onChange={(e) => setNewItem(prev => ({ ...prev, frequency: e.target.value }))}
                          >
                            {frequencies.map(freq => (
                              <MenuItem key={freq} value={freq}>
                                {t(freq)}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                      <Autocomplete
                        multiple
                        size="small"
                        options={projects}
                        value={newItem.relatedProjects}
                        onChange={(e, newValue) => setNewItem(prev => ({
                          ...prev,
                          relatedProjects: newValue
                        }))}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={t('relatedProjects')}
                            placeholder={t('selectProjects')}
                          />
                        )}
                      />
                      <Autocomplete
                        multiple
                        size="small"
                        options={stakeholdersList}
                        value={newItem.stakeholders}
                        onChange={(e, newValue) => setNewItem(prev => ({
                          ...prev,
                          stakeholders: newValue
                        }))}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={t('stakeholders')}
                            placeholder={t('selectStakeholders')}
                          />
                        )}
                      />
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        <Button
                          variant="contained"
                          startIcon={<SaveIcon />}
                          onClick={() => handleAddItem(section)}
                        >
                          {t('save')}
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ) : (
                  <Grid item xs={12}>
                    <Button
                      startIcon={<AddIcon />}
                      onClick={() => setEditMode(section)}
                    >
                      {t('add')}
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Coordination;
