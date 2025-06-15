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
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const InitialView = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState({
    leadershipExpectations: [],
    employeeExpectations: [],
    stakeholderRequirements: [],
    nationalDevelopment: [],
    globalTrends: []
  });
  const [editMode, setEditMode] = useState(null);
  const [newItemText, setNewItemText] = useState('');

  const handleAddItem = (section) => {
    if (newItemText.trim()) {
      setItems(prev => ({
        ...prev,
        [section]: [...prev[section], { id: Date.now(), text: newItemText }]
      }));
      setNewItemText('');
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
    'leadershipExpectations',
    'employeeExpectations',
    'stakeholderRequirements',
    'nationalDevelopment',
    'globalTrends'
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategyFormulation.initialView.title')}
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} key={section}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t(`strategyFormulation.initialView.items.${section}`)}
              </Typography>
              <Grid container spacing={2}>
                {items[section].map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <Card>
                      <CardContent>
                        <Typography>{item.text}</Typography>
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
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <TextField
                        fullWidth
                        size="small"
                        value={newItemText}
                        onChange={(e) => setNewItemText(e.target.value)}
                        placeholder={t('enterDetails')}
                      />
                      <Button
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={() => handleAddItem(section)}
                      >
                        {t('save')}
                      </Button>
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

export default InitialView;
