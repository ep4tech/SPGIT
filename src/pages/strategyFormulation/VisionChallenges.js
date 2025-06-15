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
  Rating,
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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">
                  {t(`strategyFormulation.visionChallenges.items.${section}`)}
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
                  <TextField
                    fullWidth
                    size="small"
                    value={newItem.text}
                    onChange={(e) => setNewItem(prev => ({ ...prev, text: e.target.value }))}
                    placeholder={t('enterDetails')}
                    label={t('description')}
                    sx={{ mb: 1 }}
                  />
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
                    <FormControl size="small" sx={{ minWidth: 120 }}>
                      <InputLabel>{t('priority')}</InputLabel>
                      <Select
                        value={newItem.priority}
                        label={t('priority')}
                        onChange={(e) => setNewItem(prev => ({ ...prev, priority: e.target.value }))}
                      >
                        {priorityLevels.map((level) => (
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
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleAddItem(section)}
                    >
                      {t('save')}
                    </Button>
                  </Box>
                </Box>
              ) : null}

              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('description')}</TableCell>
                      <TableCell align="center" width={100}>{t('priority')}</TableCell>
                      <TableCell align="center" width={120}>{t('impact')}</TableCell>
                      <TableCell align="center" width={50}>{t('actions')}</TableCell>
                    </TableRow>
                  </TableHead>  
                  <TableBody>
                    {items[section].map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.text}</TableCell>
                        <TableCell align="center">{t(item.priority)}</TableCell>
                        <TableCell align="center">
                          <Rating value={item.impact} readOnly size="small" />
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

export default VisionChallenges;
