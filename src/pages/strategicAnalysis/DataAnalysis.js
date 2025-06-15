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

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      {t('strategicAnalysis.analysis.strengths')}
                    </TableCell>
                    <TableCell align="center">
                      {t('strategicAnalysis.analysis.weaknesses')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Box>
                        {swotData.strengths.map((item, index) => (
                          <Typography key={index} paragraph>
                            • {item}
                          </Typography>
                        ))}
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleOpenDialog('strengths')}
                        >
                          {t('strategicAnalysis.analysis.add')}
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        {swotData.weaknesses.map((item, index) => (
                          <Typography key={index} paragraph>
                            • {item}
                          </Typography>
                        ))}
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleOpenDialog('weaknesses')}
                        >
                          {t('strategicAnalysis.analysis.add')}
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      {t('strategicAnalysis.analysis.opportunities')}
                    </TableCell>
                    <TableCell align="center">
                      {t('strategicAnalysis.analysis.threats')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Box>
                        {swotData.opportunities.map((item, index) => (
                          <Typography key={index} paragraph>
                            • {item}
                          </Typography>
                        ))}
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleOpenDialog('opportunities')}
                        >
                          {t('strategicAnalysis.analysis.add')}
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        {swotData.threats.map((item, index) => (
                          <Typography key={index} paragraph>
                            • {item}
                          </Typography>
                        ))}
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleOpenDialog('threats')}
                        >
                          {t('strategicAnalysis.analysis.add')}
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
          {t(`strategicAnalysis.analysis.add${dialogType?.charAt(0).toUpperCase()}${dialogType?.slice(1)}`)}
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
            {t('common.cancel')}
          </Button>
          <Button
            onClick={(e) => handleAddSwotItem(e.target.previousSibling.querySelector('textarea').value)}
            variant="contained"
          >
            {t('common.add')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataAnalysis;
