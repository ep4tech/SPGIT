import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const DataAnalysis = () => {
  console.log('======>> We ae in pages/strategicAnalysis/DataAnalysis.js');
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [swotData, setSwotData] = useState({
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: [],
  });

  const handleOpenDialog = (type) => {
    setDialogType(type);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogType('');
  };

  const handleAddSwotItem = (value) => {
    if (value.trim()) {
      setSwotData((prev) => ({
        ...prev,
        [dialogType]: [...prev[dialogType], value],
      }));
      handleCloseDialog();
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('strategicAnalysis.analysis.title')}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        {t('strategicAnalysis.analysis.subtitle')}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t('strategicAnalysis.analysis.swotTitle')}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {t('strategicAnalysis.analysis.swotDesc')}
            </Typography>

            {/* Redesigned SWOT Quadrant Layout */}
            <Box
              sx={{
                width: '100%',
                maxWidth: 800,
                mx: 'auto',
                my: 4,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: 2,
                position: 'relative',
                minHeight: 400,
              }}
            >
              {/* Strengths */}
              <Paper
                sx={{
                  p: 2,
                  borderTopLeftRadius: 24,
                  border: '2px solid #43a047',
                  gridColumn: 1,
                  gridRow: 1,
                  background: '#e8f5e9',
                  minHeight: 180,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" sx={{ color: '#388e3c', fontWeight: 'bold' }}>
                  {t('strategicAnalysis.analysis.strengths')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {t('strategicAnalysis.analysis.strengthsDesc')}
                </Typography>
                {swotData.strengths.map((item, idx) => (
                  <Typography key={idx} variant="body2">• {item}</Typography>
                ))}
                <Box mt="auto">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpenDialog('strengths')}
                    sx={{ mt: 1 }}
                  >
                    {t('strategicAnalysis.analysis.add')}
                  </Button>
                </Box>
              </Paper>
              {/* Weaknesses */}
              <Paper
                sx={{
                  p: 2,
                  borderTopRightRadius: 24,
                  border: '2px solid #e53935',
                  gridColumn: 2,
                  gridRow: 1,
                  background: '#ffebee',
                  minHeight: 180,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" sx={{ color: '#b71c1c', fontWeight: 'bold' }}>
                  {t('strategicAnalysis.analysis.weaknesses')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {t('strategicAnalysis.analysis.weaknessesDesc')}
                </Typography>
                {swotData.weaknesses.map((item, idx) => (
                  <Typography key={idx} variant="body2">• {item}</Typography>
                ))}
                <Box mt="auto">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpenDialog('weaknesses')}
                    sx={{ mt: 1 }}
                  >
                    {t('strategicAnalysis.analysis.add')}
                  </Button>
                </Box>
              </Paper>
              {/* Opportunities */}
              <Paper
                sx={{
                  p: 2,
                  borderBottomLeftRadius: 24,
                  border: '2px solid #43a047',
                  gridColumn: 1,
                  gridRow: 2,
                  background: '#e8f5e9',
                  minHeight: 180,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" sx={{ color: '#388e3c', fontWeight: 'bold' }}>
                  {t('strategicAnalysis.analysis.opportunities')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {t('strategicAnalysis.analysis.opportunitiesDesc')}
                </Typography>
                {swotData.opportunities.map((item, idx) => (
                  <Typography key={idx} variant="body2">• {item}</Typography>
                ))}
                <Box mt="auto">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpenDialog('opportunities')}
                    sx={{ mt: 1 }}
                  >
                    {t('strategicAnalysis.analysis.add')}
                  </Button>
                </Box>
              </Paper>
              {/* Threats */}
              <Paper
                sx={{
                  p: 2,
                  borderBottomRightRadius: 24,
                  border: '2px solid #e53935',
                  gridColumn: 2,
                  gridRow: 2,
                  background: '#ffebee',
                  minHeight: 180,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" sx={{ color: '#b71c1c', fontWeight: 'bold' }}>
                  {t('strategicAnalysis.analysis.threats')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {t('strategicAnalysis.analysis.threatsDesc')}
                </Typography>
                {swotData.threats.map((item, idx) => (
                  <Typography key={idx} variant="body2">• {item}</Typography>
                ))}
                <Box mt="auto">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpenDialog('threats')}
                    sx={{ mt: 1 }}
                  >
                    {t('strategicAnalysis.analysis.add')}
                  </Button>
                </Box>
              </Paper>
              {/* Center SWOT Label */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'white',
                  borderRadius: '50%',
                  border: '3px solid #888',
                  width: 120,
                  height: 120,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: 2,
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  SWOT
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t('strategicAnalysis.analysis.matrixTitle')}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {t('strategicAnalysis.analysis.matrixDesc')}
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              placeholder={t('strategicAnalysis.analysis.matrixPlaceholder')}
            />
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {t(`add`)}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder={t('strategicAnalysis.analysis.itemPlaceholder')}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleAddSwotItem(e.target.value);
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>
            {t('cancel')}
          </Button>
          <Button
            onClick={(e) => handleAddSwotItem(e.target.previousSibling.querySelector('textarea').value)}
            variant="contained"
          >
            {t('add')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataAnalysis;
