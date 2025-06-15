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
import DeleteIcon from '@mui/icons-material/Delete';

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
  const responsibles = ['Team A', 'Team B', 'Team C', 'Team D'];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategyFormulation.executivePlans.title')}
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} key={section}>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">
                  {t(`strategyFormulation.executivePlans.items.${section}`)}
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

              {editMode === section && (
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        value={newItem.title}
                        onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                        placeholder={t('enterTitle')}
                        label={t('title')}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <FormControl size="small" sx={{ flex: 1 }}>
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
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <TextField
                          type="date"
                          size="small"
                          label={t('startDate')}
                          value={newItem.startDate}
                          onChange={(e) => setNewItem(prev => ({ ...prev, startDate: e.target.value }))}
                          InputLabelProps={{ shrink: true }}
                          sx={{ flex: 1 }}
                        />
                        <TextField
                          type="date"
                          size="small"
                          label={t('endDate')}
                          value={newItem.endDate}
                          onChange={(e) => setNewItem(prev => ({ ...prev, endDate: e.target.value }))}
                          InputLabelProps={{ shrink: true }}
                          sx={{ flex: 1 }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
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
                          sx={{ flex: 1 }}
                        />
                        <FormControl size="small" sx={{ flex: 1 }}>
                          <InputLabel>{t('strategyFormulation.executivePlans.responsible')}</InputLabel>
                          <Select
                            value={newItem.responsible}
                            label={t('strategyFormulation.executivePlans.responsible')}
                            onChange={(e) => setNewItem(prev => ({ ...prev, responsible: e.target.value }))}
                          >
                            {responsibles.map(responsible => (
                              <MenuItem key={responsible} value={responsible}>
                                {responsible}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
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
              )}

              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('title')}</TableCell>
                      <TableCell>{t('description')}</TableCell>
                      <TableCell width={100}>{t('strategyFormulation.executivePlans.dateRange')}</TableCell>
                      <TableCell width={80}>{t('budget')}</TableCell>
                      <TableCell width={80}>{t('priority')}</TableCell>
                      <TableCell width={100}>{t('strategyFormulation.executivePlans.responsible')}</TableCell>
                      <TableCell width={80}>{t('status')}</TableCell>
                      <TableCell width={50} align="center">{t('actions')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items[section].map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.startDate} - {item.endDate}</TableCell>
                        <TableCell>${item.budget.toLocaleString()}</TableCell>
                        <TableCell>{t(item.priority)}</TableCell>
                        <TableCell>{item.responsible}</TableCell>
                        <TableCell>{t(item.status)}</TableCell>
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

export default ExecutivePlans;
