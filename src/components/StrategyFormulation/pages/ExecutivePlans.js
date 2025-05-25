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
  Slider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const ExecutivePlans = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState({
    planningProcess: [],
    budgetAllocation: [],
    timeframes: [],
    responsibilities: []
  });
  const [editMode, setEditMode] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: 0,
    priority: 'medium',
    responsible: '',
    status: 'pending'
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
        startDate: '',
        endDate: '',
        budget: 0,
        priority: 'medium',
        responsible: '',
        status: 'pending'
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
    'planningProcess',
    'budgetAllocation',
    'timeframes',
    'responsibilities'
  ];

  const priorities = ['low', 'medium', 'high'];
  const statuses = ['pending', 'inProgress', 'completed', 'delayed'];
  const responsibles = ['Team A', 'Team B', 'Team C', 'Team D']; // This should be dynamic

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategyFormulation.executivePlans.title')}
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} key={section}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t(`strategyFormulation.executivePlans.items.${section}`)}
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
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {t('dateRange')}: {item.startDate} - {item.endDate}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t('budget')}: ${item.budget.toLocaleString()}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t('priority')}: {t(item.priority)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t('responsible')}: {item.responsible}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t('status')}: {t(item.status)}
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
                        <TextField
                          type="date"
                          size="small"
                          label={t('startDate')}
                          value={newItem.startDate}
                          onChange={(e) => setNewItem(prev => ({ ...prev, startDate: e.target.value }))}
                          InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                          type="date"
                          size="small"
                          label={t('endDate')}
                          value={newItem.endDate}
                          onChange={(e) => setNewItem(prev => ({ ...prev, endDate: e.target.value }))}
                          InputLabelProps={{ shrink: true }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                          type="number"
                          size="small"
                          label={t('budget')}
                          value={newItem.budget}
                          onChange={(e) => setNewItem(prev => ({
                            ...prev,
                            budget: Math.max(0, parseInt(e.target.value) || 0)
                          }))}
                          inputProps={{ min: 0 }}
                        />
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                          <InputLabel>{t('priority')}</InputLabel>
                          <Select
                            value={newItem.priority}
                            label={t('priority')}
                            onChange={(e) => setNewItem(prev => ({ ...prev, priority: e.target.value }))}
                          >
                            {priorities.map(priority => (
                              <MenuItem key={priority} value={priority}>
                                {t(priority)}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <FormControl size="small" sx={{ flex: 1 }}>
                          <InputLabel>{t('responsible')}</InputLabel>
                          <Select
                            value={newItem.responsible}
                            label={t('responsible')}
                            onChange={(e) => setNewItem(prev => ({ ...prev, responsible: e.target.value }))}
                          >
                            {responsibles.map(resp => (
                              <MenuItem key={resp} value={resp}>
                                {resp}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <FormControl size="small" sx={{ flex: 1 }}>
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

export default ExecutivePlans;
