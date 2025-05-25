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
  LinearProgress,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const GoalsObjectives = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState({
    strategicGoals: [],
    objectivesList: [],
    performanceIndicators: [],
    timeline: []
  });
  const [editMode, setEditMode] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    status: 'pending',
    progress: 0,
    targetDate: ''
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
        status: 'pending',
        progress: 0,
        targetDate: ''
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
    'strategicGoals',
    'objectivesList',
    'performanceIndicators',
    'timeline'
  ];

  const statuses = ['pending', 'inProgress', 'completed', 'delayed'];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategyFormulation.goalsObjectives.title')}
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} key={section}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t(`strategyFormulation.goalsObjectives.items.${section}`)}
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {t('status')}: {t(item.status)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t('targetDate')}: {item.targetDate}
                          </Typography>
                        </Box>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress variant="determinate" value={item.progress} />
                          <Typography variant="body2" color="text.secondary" align="right">
                            {item.progress}%
                          </Typography>
                        </Box>
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
                        <TextField
                          type="number"
                          size="small"
                          label={t('progress')}
                          value={newItem.progress}
                          onChange={(e) => setNewItem(prev => ({
                            ...prev,
                            progress: Math.min(100, Math.max(0, parseInt(e.target.value) || 0))
                          }))}
                          inputProps={{ min: 0, max: 100 }}
                        />
                        <TextField
                          type="date"
                          size="small"
                          label={t('targetDate')}
                          value={newItem.targetDate}
                          onChange={(e) => setNewItem(prev => ({ ...prev, targetDate: e.target.value }))}
                          InputLabelProps={{ shrink: true }}
                        />
                      </Box>
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

export default GoalsObjectives;
