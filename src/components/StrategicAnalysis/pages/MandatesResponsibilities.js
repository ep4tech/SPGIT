import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Collapse,
  ListItemSecondaryAction
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTranslation } from 'react-i18next';

const MandatesResponsibilities = () => {
  const { t } = useTranslation();
  const [responsibilities, setResponsibilities] = useState([]);
  const [newResponsibility, setNewResponsibility] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [newMandate, setNewMandate] = useState('');

  const handleAddResponsibility = () => {
    if (newResponsibility.trim()) {
      setResponsibilities([
        ...responsibilities,
        {
          id: Date.now(),
          text: newResponsibility,
          mandates: []
        }
      ]);
      setNewResponsibility('');
    }
  };

  const handleAddMandate = (responsibilityId) => {
    if (newMandate.trim()) {
      setResponsibilities(responsibilities.map(resp => {
        if (resp.id === responsibilityId) {
          return {
            ...resp,
            mandates: [
              ...resp.mandates,
              {
                id: Date.now(),
                text: newMandate
              }
            ]
          };
        }
        return resp;
      }));
      setNewMandate('');
    }
  };

  const handleDeleteResponsibility = (id) => {
    setResponsibilities(responsibilities.filter(resp => resp.id !== id));
  };

  const handleDeleteMandate = (responsibilityId, mandateId) => {
    setResponsibilities(responsibilities.map(resp => {
      if (resp.id === responsibilityId) {
        return {
          ...resp,
          mandates: resp.mandates.filter(mandate => mandate.id !== mandateId)
        };
      }
      return resp;
    }));
  };

  const handleToggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('mandatesAndResponsibilities')}
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            label={t('newResponsibility')}
            value={newResponsibility}
            onChange={(e) => setNewResponsibility(e.target.value)}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddResponsibility}
          >
            {t('add')}
          </Button>
        </Box>
        <List>
          {responsibilities.map((responsibility) => (
            <React.Fragment key={responsibility.id}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      {responsibility.text}
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleToggleExpand(responsibility.id)}>
                    {expandedId === responsibility.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                  <IconButton onClick={() => handleDeleteResponsibility(responsibility.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Collapse in={expandedId === responsibility.id}>
                <Box sx={{ pl: 4, pr: 4, pb: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <TextField
                      fullWidth
                      size="small"
                      label={t('newMandate')}
                      value={newMandate}
                      onChange={(e) => setNewMandate(e.target.value)}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<AddIcon />}
                      onClick={() => handleAddMandate(responsibility.id)}
                    >
                      {t('add')}
                    </Button>
                  </Box>
                  <List>
                    {responsibility.mandates.map((mandate) => (
                      <ListItem key={mandate.id}>
                        <ListItemText primary={mandate.text} />
                        <ListItemSecondaryAction>
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteMandate(responsibility.id, mandate.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default MandatesResponsibilities;
