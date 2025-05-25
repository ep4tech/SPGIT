import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { arSA, enUS } from 'date-fns/locale';

const TrainingContent = ({ formData, setFormData }) => {
  const { t, i18n } = useTranslation();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [newTraining, setNewTraining] = React.useState({
    title: '',
    description: '',
    targetAudience: '',
    numberOfTrainees: '',
    trainingType: '',
    startDate: null,
    endDate: null,
    location: '',
    trainer: '',
    trainingHours: '',
    mainTopics: '',
    expectedOutcomes: '',
  });

  const trainingTypes = ['inPerson', 'online', 'hybrid'];

  const handleInputChange = (field) => (event) => {
    setNewTraining((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleDateChange = (field) => (date) => {
    setNewTraining((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  const handleAddTraining = () => {
    const isValid = (
      newTraining.title &&
      newTraining.description &&
      newTraining.targetAudience &&
      newTraining.numberOfTrainees &&
      newTraining.trainingType &&
      newTraining.startDate &&
      newTraining.endDate &&
      newTraining.location &&
      newTraining.trainer &&
      newTraining.trainingHours &&
      newTraining.mainTopics &&
      newTraining.expectedOutcomes
    );

    if (isValid) {
      setFormData((prev) => ({
        ...prev,
        trainingContent: [
          ...(prev.trainingContent || []),
          { ...newTraining },
        ],
      }));
      setNewTraining({
        title: '',
        description: '',
        targetAudience: '',
        numberOfTrainees: '',
        trainingType: '',
        startDate: null,
        endDate: null,
        location: '',
        trainer: '',
        trainingHours: '',
        mainTopics: '',
        expectedOutcomes: '',
      });
      setDialogOpen(false);
    }
  };

  const handleDelete = (index) => {
    setFormData((prev) => ({
      ...prev,
      trainingContent: prev.trainingContent.filter((_, i) => i !== index),
    }));
  };

  const getTableColumns = () => [
    { id: 'title', label: t('title') },
    { id: 'description', label: t('description') },
    { id: 'targetAudience', label: t('targetAudience') },
    { id: 'numberOfTrainees', label: t('numberOfTrainees') },
    { id: 'trainingType', label: t('trainingType') },
    { id: 'startDate', label: t('startDate') },
    { id: 'endDate', label: t('endDate') },
    { id: 'location', label: t('location') },
    { id: 'trainer', label: t('trainer') },
    { id: 'trainingHours', label: t('trainingHours') },
    { id: 'actions', label: '' },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('trainingContent')}
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          onClick={() => setDialogOpen(true)}
          startIcon={<AddIcon />}
        >
          {t('addTraining')}
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {getTableColumns().map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.trainingContent?.map((training, index) => (
              <TableRow key={index}>
                <TableCell>{training.title}</TableCell>
                <TableCell>{training.description}</TableCell>
                <TableCell>{training.targetAudience}</TableCell>
                <TableCell>{training.numberOfTrainees}</TableCell>
                <TableCell>{t(training.trainingType)}</TableCell>
                <TableCell>
                  {training.startDate?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
                </TableCell>
                <TableCell>
                  {training.endDate?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
                </TableCell>
                <TableCell>{training.location}</TableCell>
                <TableCell>{training.trainer}</TableCell>
                <TableCell>{training.trainingHours}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{t('addTraining')}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('title')}
                value={newTraining.title}
                onChange={handleInputChange('title')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('targetAudience')}
                value={newTraining.targetAudience}
                onChange={handleInputChange('targetAudience')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={3}
                label={t('description')}
                value={newTraining.description}
                onChange={handleInputChange('description')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="number"
                label={t('numberOfTrainees')}
                value={newTraining.numberOfTrainees}
                onChange={handleInputChange('numberOfTrainees')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>{t('trainingType')}</InputLabel>
                <Select
                  value={newTraining.trainingType}
                  onChange={handleInputChange('trainingType')}
                  label={t('trainingType')}
                >
                  {trainingTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {t(type)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={i18n.language === 'ar' ? arSA : enUS}
              >
                <DatePicker
                  label={t('startDate')}
                  value={newTraining.startDate}
                  onChange={handleDateChange('startDate')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      fullWidth
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={i18n.language === 'ar' ? arSA : enUS}
              >
                <DatePicker
                  label={t('endDate')}
                  value={newTraining.endDate}
                  onChange={handleDateChange('endDate')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      fullWidth
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('location')}
                value={newTraining.location}
                onChange={handleInputChange('location')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('trainer')}
                value={newTraining.trainer}
                onChange={handleInputChange('trainer')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="number"
                label={t('trainingHours')}
                value={newTraining.trainingHours}
                onChange={handleInputChange('trainingHours')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={3}
                label={t('mainTopics')}
                value={newTraining.mainTopics}
                onChange={handleInputChange('mainTopics')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={3}
                label={t('expectedOutcomes')}
                value={newTraining.expectedOutcomes}
                onChange={handleInputChange('expectedOutcomes')}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>
            {t('cancel')}
          </Button>
          <Button onClick={handleAddTraining} variant="contained" color="primary">
            {t('add')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TrainingContent;
