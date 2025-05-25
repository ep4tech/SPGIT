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
  Rating,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const VisionChallenges = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState({
    visionElements: [],
    challengesMatrix: [],
    successIndicators: [],
    realityGap: []
  });
  const [editMode, setEditMode] = useState(null);
  const [newItem, setNewItem] = useState({
    text: '',
    priority: 'medium',
    impact: 3
  });

  const handleAddItem = (section) => {
    if (newItem.text.trim()) {
      setItems(prev => ({
        ...prev,
        [section]: [...prev[section], { id: Date.now(), ...newItem }]
      }));
      setNewItem({ text: '', priority: 'medium', impact: 3 });
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
    'visionElements',
    'challengesMatrix',
    'successIndicators',
    'realityGap'
  ];

  const priorityLevels = ['low', 'medium', 'high'];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategyFormulation.visionChallenges.title')}
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} key={section}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t(`strategyFormulation.visionChallenges.items.${section}`)}
              </Typography>
              <Grid container spacing={2}>
                {items[section].map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <Card>
                      <CardContent>
                        <Typography gutterBottom>{item.text}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {t(`priority`)}: {t(item.priority)}
                          </Typography>
                          <Rating value={item.impact} readOnly size="small" />
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
                        multiline
                        rows={2}
                        size="small"
                        value={newItem.text}
                        onChange={(e) => setNewItem(prev => ({ ...prev, text: e.target.value }))}
                        placeholder={t('enterDetails')}
                      />
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                          <InputLabel>{t('priority')}</InputLabel>
                          <Select
                            value={newItem.priority}
                            label={t('priority')}
                            onChange={(e) => setNewItem(prev => ({ ...prev, priority: e.target.value }))}
                          >
                            {priorityLevels.map(level => (
                              <MenuItem key={level} value={level}>
                                {t(level)}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body2">{t('impact')}:</Typography>
                          <Rating
                            value={newItem.impact}
                            onChange={(e, newValue) => setNewItem(prev => ({ ...prev, impact: newValue }))}
                          />
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

export default VisionChallenges;
