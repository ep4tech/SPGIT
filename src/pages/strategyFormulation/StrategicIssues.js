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
  Chip,
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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">
                  {t(`strategyFormulation.strategicIssues.items.${section}`)}
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
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        value={newItem.title}
                        onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                        placeholder={t('enterTitle')}
                        label={t('title')}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl size="small" fullWidth>
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
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder={t('addTag')}
                        label={t('tags')}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddTag(e.target.value);
                            e.target.value = '';
                          }
                        }}
                      />
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
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {newItem.tags.map((tag, index) => (
                            <Chip
                              key={index}
                              label={tag}
                              onDelete={() => handleDeleteTag(tag)}
                              size="small"
                            />
                          ))}
                        </Box>
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
                      <TableCell>{t('title')}</TableCell>
                      <TableCell>{t('description')}</TableCell>
                      <TableCell width={100}>{t('type')}</TableCell>
                      <TableCell width={200}>{t('tags')}</TableCell>
                      <TableCell width={50} align="center">{t('actions')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items[section].map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>
                          <Chip
                            label={t(item.type)}
                            color="primary"
                            size="small"
                            sx={{ mr: 1 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {item.tags.map((tag, index) => (
                              <Chip
                                key={index}
                                label={tag}
                                size="small"
                              />
                            ))}
                          </Box>
                        </TableCell>
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

export default StrategicIssues;
