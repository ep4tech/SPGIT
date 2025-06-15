import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">
                  {t(`strategyFormulation.goalsObjectives.items.${section}`)}
                </Typography>
                {editMode !== section && (
                  <Tooltip title={t('add')}>
                    <IconButton
                      size="small"
                      onClick={() => setEditMode(section)}
                      color="primary"
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>

              {editMode === section ? (
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        value={newItem.title}
                        onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                        placeholder={t('enterTitle')}
                        label={t('strategyFormulation.goalsObjectives.title')}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
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
                        <TextField
                          type="date"
                          size="small"
                          label={t('targetDate')}
                          value={newItem.targetDate}
                          onChange={(e) => setNewItem(prev => ({ ...prev, targetDate: e.target.value }))}
                          InputLabelProps={{ shrink: true }}
                          sx={{ flex: 1 }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <TextField
                        fullWidth
                        multiline
                        rows={2}
                        size="small"
                        value={newItem.description}
                        onChange={(e) => setNewItem(prev => ({ ...prev, description: e.target.value }))}
                        placeholder={t('enterDescription')}
                        label={t('description')}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
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
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleAddItem(section)}
                        >
                          {t('save')}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              ) : null}

              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('strategyFormulation.goalsObjectives.title')}</TableCell>
                      <TableCell>{t('strategyFormulation.goalsObjectives.description')}</TableCell>
                      <TableCell width={100}>{t('status')}</TableCell>
                      <TableCell width={100}>{t('progress')}</TableCell>
                      <TableCell width={120}>{t('targetDate')}</TableCell>
                      <TableCell width={50} align="center">{t('actions')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items[section].map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{t(item.status)}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LinearProgress 
                              variant="determinate" 
                              value={item.progress} 
                              sx={{ flex: 1 }}
                            />
                            <Typography variant="caption">
                              {item.progress}%
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{item.targetDate}</TableCell>
                        <TableCell align="center">
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteItem(section, item.id)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GoalsObjectives;
