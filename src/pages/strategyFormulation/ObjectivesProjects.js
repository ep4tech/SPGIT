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

const ObjectivesProjects = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState({
    objectivesDistribution: [],
    projectBuilding: [],
    resourceAllocation: [],
    stakeholderRoles: []
  });
  const [editMode, setEditMode] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    category: 'strategic',
    budget: 0,
    resources: [],
    stakeholders: []
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
        category: 'strategic',
        budget: 0,
        resources: [],
        stakeholders: []
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

  const handleAddStakeholder = (value) => {
    if (value && !newItem.stakeholders.includes(value)) {
      setNewItem(prev => ({
        ...prev,
        stakeholders: [...prev.stakeholders, value]
      }));
    }
  };

  const handleDeleteStakeholder = (stakeholder) => {
    setNewItem(prev => ({
      ...prev,
      stakeholders: prev.stakeholders.filter(s => s !== stakeholder)
    }));
  };

  const sections = [
    'objectivesDistribution',
    'projectBuilding',
    'resourceAllocation',
    'stakeholderRoles'
  ];

  const categories = ['strategic', 'operational', 'tactical'];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategyFormulation.objectivesProjects.title')}
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} key={section}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t(`strategyFormulation.objectivesProjects.items.${section}`)}
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
                            {t('category')}: {t(item.category)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {t('budget')}: ${item.budget.toLocaleString()}
                          </Typography>
                        </Box>
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
                          <InputLabel>{t('category')}</InputLabel>
                          <Select
                            value={newItem.category}
                            label={t('category')}
                            onChange={(e) => setNewItem(prev => ({ ...prev, category: e.target.value }))}
                          >
                            {categories.map(category => (
                              <MenuItem key={category} value={category}>
                                {t(category)}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
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
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant="body2">{t('stakeholders')}:</Typography>
                        <TextField
                          size="small"
                          placeholder={t('strategyFormulation.objectivesProjects.items.addStakeholder')}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleAddStakeholder(e.target.value);
                              e.target.value = '';
                            }
                          }}
                        />
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {newItem.stakeholders.map((stakeholder, index) => (
                            <Chip
                              key={index}
                              label={stakeholder}
                              onDelete={() => handleDeleteStakeholder(stakeholder)}
                              size="small"
                            />
                          ))}
                        </Box>
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

export default ObjectivesProjects;