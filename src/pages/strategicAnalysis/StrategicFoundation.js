import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const StrategicFoundation = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState({
    values: [],
    behaviors: [],
    principles: []
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    status: 'active',
    priority: 'medium',
    responsibleTeam: '',
    impact: 'medium'
  });

  React.useEffect(() => {
    // Load saved data from localStorage
    const savedData = localStorage.getItem('strategicFoundation');
    if (savedData) {
      setItems(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    if (newItem.title.trim() && newItem.description.trim()) {
      if (editItem) {
        setItems(prev => ({
          ...prev,
          [currentSection]: prev[currentSection].map(item =>
            item.id === editItem.id ? { ...newItem, id: item.id } : item
          )
        }));
      } else {
        setItems(prev => ({
          ...prev,
          [currentSection]: [...prev[currentSection], { id: Date.now(), ...newItem }]
        }));
      }
      handleCloseDialog();
    }
  };

  const handleDelete = (section, itemId) => {
    setItems(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== itemId)
    }));
  };

  const handleEdit = (section, item) => {
    setCurrentSection(section);
    setEditItem(item);
    setNewItem(item);
    setOpenDialog(true);
  };

  const handleAdd = (section) => {
    setCurrentSection(section);
    setEditItem(null);
    setNewItem({
      title: '',
      description: '',
      status: 'active',
      priority: 'medium',
      responsibleTeam: '',
      impact: 'medium'
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditItem(null);
    setNewItem({
      title: '',
      description: '',
      status: 'active',
      priority: 'medium',
      responsibleTeam: '',
      impact: 'medium'
    });
  };

  React.useEffect(() => {
    // Save to localStorage whenever items change
    localStorage.setItem('strategicFoundation', JSON.stringify(items));
  }, [items]);

  const sections = ['values', 'behaviors', 'principles'];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategicAnalysis.foundation.title')}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {t('strategicAnalysis.foundation.subtitle')}
      </Typography>
      
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} md={4} key={section}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t(`strategicAnalysis.${section}`)}
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => handleAdd(section)}
                >
                  {t(`strategicAnalysis.add${section.slice(0, -1).charAt(0).toUpperCase()}${section.slice(0, -1).slice(1)}`)}
                </Button>
              </Box>

              <List>
                {items[section].map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1">
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" paragraph>
                            {item.description}
                          </Typography>
                          <Grid container spacing={1}>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="text.secondary">
                                {t('status')}: {t(`strategicAnalysis.${item.status}`)}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="text.secondary">
                                {t('priority')}: {t(`strategicAnalysis.${item.priority}`)}
                              </Typography>
                            </Grid>
                            {item.responsibleTeam && (
                              <Grid item xs={12}>
                                <Typography variant="body2" color="text.secondary">
                                  {t('strategicAnalysis.foundation.responsibleTeam')}: {item.responsibleTeam}
                                </Typography>
                              </Grid>
                            )}
                          </Grid>
                        </Box>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        onClick={() => handleEdit(section, item)}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        onClick={() => handleDelete(section, item.id)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editItem 
            ? t(`strategicAnalysis.edit${currentSection?.slice(0, -1).charAt(0).toUpperCase()}${currentSection?.slice(0, -1).slice(1)}`) 
            : t(`strategicAnalysis.add${currentSection?.slice(0, -1).charAt(0).toUpperCase()}${currentSection?.slice(0, -1).slice(1)}`)
          }
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label={t(`strategicAnalysis.${currentSection?.slice(0, -1)}Title`)}
              value={newItem.title}
              onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
              fullWidth
            />
            <TextField
              label={t(`strategicAnalysis.${currentSection?.slice(0, -1)}Description`)}
              value={newItem.description}
              onChange={(e) => setNewItem(prev => ({ ...prev, description: e.target.value }))}
              multiline
              rows={4}
              fullWidth
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>{t('status')}</InputLabel>
                  <Select
                    value={newItem.status}
                    onChange={(e) => setNewItem(prev => ({ ...prev, status: e.target.value }))}
                    label={t('status')}
                  >
                    {['active', 'inactive', 'pending'].map(status => (
                      <MenuItem key={status} value={status}>
                        {t(`strategicAnalysis.${status}`)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>{t('priority')}</InputLabel>
                  <Select
                    value={newItem.priority}
                    onChange={(e) => setNewItem(prev => ({ ...prev, priority: e.target.value }))}
                    label={t('priority')}
                  >
                    {['high', 'medium', 'low'].map(priority => (
                      <MenuItem key={priority} value={priority}>
                        {t(`strategicAnalysis.${priority}`)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <TextField
              label={t('strategicAnalysis.foundation.responsibleTeam')}
              value={newItem.responsibleTeam}
              onChange={(e) => setNewItem(prev => ({ ...prev, responsibleTeam: e.target.value }))}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>
            {t('cancel')}
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            {t('save')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StrategicFoundation;
