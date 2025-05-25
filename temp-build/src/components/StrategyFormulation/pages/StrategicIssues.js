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
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const StrategicIssues = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState({
    issuesList: [],
    implications: [],
    priorities: [],
    opportunities: []
  });
  const [editMode, setEditMode] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    type: 'internal',
    tags: []
  });

  const handleAddItem = (section) => {
    if (newItem.title.trim() && newItem.description.trim()) {
      setItems(prev => ({
        ...prev,
        [section]: [...prev[section], { id: Date.now(), ...newItem }]
      }));
      setNewItem({ title: '', description: '', type: 'internal', tags: [] });
      setEditMode(null);
    }
  };

  const handleDeleteItem = (section, itemId) => {
    setItems(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== itemId)
    }));
  };

  const handleAddTag = (tag) => {
    if (tag && !newItem.tags.includes(tag)) {
      setNewItem(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setNewItem(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToDelete)
    }));
  };

  const sections = [
    'issuesList',
    'implications',
    'priorities',
    'opportunities'
  ];

  const types = ['internal', 'external', 'both'];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategyFormulation.strategicIssues.title')}
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} key={section}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t(`strategyFormulation.strategicIssues.items.${section}`)}
              </Typography>
              <Grid container spacing={2}>
                {items[section].map((item) => (
                  <Grid item xs={12} md={6} key={item.id}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {item.description}
                        </Typography>
                        <Box sx={{ mb: 1 }}>
                          <Chip
                            label={t(item.type)}
                            color="primary"
                            size="small"
                            sx={{ mr: 1 }}
                          />
                          {item.tags.map((tag, index) => (
                            <Chip
                              key={index}
                              label={tag}
                              size="small"
                              sx={{ mr: 1 }}
                            />
                          ))}
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
                          <InputLabel>{t('type')}</InputLabel>
                          <Select
                            value={newItem.type}
                            label={t('type')}
                            onChange={(e) => setNewItem(prev => ({ ...prev, type: e.target.value }))}
                          >
                            {types.map(type => (
                              <MenuItem key={type} value={type}>
                                {t(type)}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <TextField
                          size="small"
                          placeholder={t('addTag')}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleAddTag(e.target.value);
                              e.target.value = '';
                            }
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {newItem.tags.map((tag, index) => (
                          <Chip
                            key={index}
                            label={tag}
                            onDelete={() => handleDeleteTag(tag)}
                            size="small"
                          />
                        ))}
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

export default StrategicIssues;
