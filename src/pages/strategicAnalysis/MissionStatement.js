import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  KeyboardArrowUp as UpIcon,
  KeyboardArrowDown as DownIcon,
  Delete as DeleteIcon,
  FileCopy as CopyIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const MissionStatement = () => {
  const { t } = useTranslation();
  const [suggestedStatements, setSuggestedStatements] = useState([]);
  const [editableStatements, setEditableStatements] = useState([]);
  const [finalStatement, setFinalStatement] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [selectedEditable, setSelectedEditable] = useState(0);

  // Function to get values from Strategic Analysis section
  const getStrategicAnalysisValues = () => {
    const savedPrinciples = localStorage.getItem('principles');
    const principles = savedPrinciples ? JSON.parse(savedPrinciples) : [];
    
    // Get the titles and descriptions of all principles
    const principlesText = principles
      .map(p => `${p.title}: ${p.description}`)
      .join('\n');

    return {
      principles: principlesText,
      currentState: localStorage.getItem('currentState') || '',
      mandates: localStorage.getItem('mandates') || ''
    };
  };

  const generateMissionStatements = async () => {
    const { principles, currentState, mandates } = getStrategicAnalysisValues();
    
    // This would be replaced with actual AI service call
    const input = {
      principles,
      currentState,
      mandates
    };

    // Simulated AI response - replace with actual API call
    const mockAIResponse = [
      `Our mission is to ${principles} while delivering exceptional service to our stakeholders.`,
      `We aim to ${currentState} through innovative solutions.`,
      `Our commitment is to ${mandates} with integrity and excellence.`
    ];

    setSuggestedStatements(mockAIResponse);
  };

  const handleCopyToEditable = () => {
    if (suggestedStatements.length > 0) {
      setEditableStatements([...editableStatements, suggestedStatements[selectedSuggestion]]);
    }
  };

  const handleCopyToFinal = () => {
    if (editableStatements.length > 0) {
      setFinalStatement(editableStatements[selectedEditable]);
    }
  };

  const handleDeleteSuggested = () => {
    const newStatements = suggestedStatements.filter((_, index) => index !== selectedSuggestion);
    setSuggestedStatements(newStatements);
    if (selectedSuggestion >= newStatements.length) {
      setSelectedSuggestion(Math.max(0, newStatements.length - 1));
    }
  };

  const handleDeleteEditable = () => {
    const newStatements = editableStatements.filter((_, index) => index !== selectedEditable);
    setEditableStatements(newStatements);
    if (selectedEditable >= newStatements.length) {
      setSelectedEditable(Math.max(0, newStatements.length - 1));
    }
  };

  const handleEditEditable = (index, value) => {
    const newStatements = [...editableStatements];
    newStatements[index] = value;
    setEditableStatements(newStatements);
  };

  const handleNavigateSuggested = (direction) => {
    if (direction === 'up' && selectedSuggestion > 0) {
      setSelectedSuggestion(selectedSuggestion - 1);
    } else if (direction === 'down' && selectedSuggestion < suggestedStatements.length - 1) {
      setSelectedSuggestion(selectedSuggestion + 1);
    }
  };

  const handleNavigateEditable = (direction) => {
    if (direction === 'up' && selectedEditable > 0) {
      setSelectedEditable(selectedEditable - 1);
    } else if (direction === 'down' && selectedEditable < editableStatements.length - 1) {
      setSelectedEditable(selectedEditable + 1);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategicAnalysis.mission.title')}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        {t('strategicAnalysis.mission.subtitle')}
      </Typography>

      <Grid container spacing={3}>
        {/* AI Suggested Statements */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              {t('strategicAnalysis.mission.suggestedTitle')}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {t('strategicAnalysis.mission.suggestedDesc')}
            </Typography>
            <Button
              variant="contained"
              onClick={generateMissionStatements}
              fullWidth
              sx={{ mb: 2 }}
            >
              {t('strategicAnalysis.mission.generateButton')}
            </Button>
            {suggestedStatements.length > 0 ? (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <IconButton onClick={() => handleNavigateSuggested('up')} disabled={selectedSuggestion === 0}>
                    <UpIcon />
                  </IconButton>
                  <IconButton onClick={() => handleNavigateSuggested('down')} disabled={selectedSuggestion === suggestedStatements.length - 1}>
                    <DownIcon />
                  </IconButton>
                </Box>
                <Typography variant="body1" sx={{ mb: 2, minHeight: 100 }}>
                  {suggestedStatements[selectedSuggestion]}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    startIcon={<CopyIcon />}
                    onClick={handleCopyToEditable}
                  >
                    {t('strategicAnalysis.mission.copyToEditable')}
                  </Button>
                  <IconButton onClick={handleDeleteSuggested} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Typography color="textSecondary">
                {t('strategicAnalysis.mission.noSuggestions')}
              </Typography>
            )}
          </Paper>
        </Grid>

        {/* Editable Statements */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              {t('strategicAnalysis.mission.editableTitle')}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {t('strategicAnalysis.mission.editableDesc')}
            </Typography>
            {editableStatements.length > 0 ? (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <IconButton onClick={() => handleNavigateEditable('up')} disabled={selectedEditable === 0}>
                    <UpIcon />
                  </IconButton>
                  <IconButton onClick={() => handleNavigateEditable('down')} disabled={selectedEditable === editableStatements.length - 1}>
                    <DownIcon />
                  </IconButton>
                </Box>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={editableStatements[selectedEditable]}
                  onChange={(e) => handleEditEditable(selectedEditable, e.target.value)}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    startIcon={<CopyIcon />}
                    onClick={handleCopyToFinal}
                  >
                    {t('strategicAnalysis.mission.copyToFinal')}
                  </Button>
                  <IconButton onClick={handleDeleteEditable} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Typography color="textSecondary">
                {t('strategicAnalysis.mission.noSuggestions')}
              </Typography>
            )}
          </Paper>
        </Grid>

        {/* Final Statement */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              {t('strategicAnalysis.mission.finalTitle')}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {t('strategicAnalysis.mission.finalDesc')}
            </Typography>
            {finalStatement ? (
              <Box>
                <Typography variant="body1" sx={{ mb: 2, whiteSpace: 'pre-wrap' }}>
                  {finalStatement}
                </Typography>
                <Button
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={() => setFinalStatement('')}
                >
                  {t('delete')}
                </Button>
              </Box>
            ) : (
              <Typography color="textSecondary">
                {t('strategicAnalysis.mission.noStatement')}
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MissionStatement;
