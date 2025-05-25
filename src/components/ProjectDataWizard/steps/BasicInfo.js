import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Grid,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { arSA, enUS } from 'date-fns/locale';

const BasicInfo = ({ formData, setFormData }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [stakeholders, setStakeholders] = useState(formData.basicInfo.stakeholders || []);
  const [newStakeholder, setNewStakeholder] = useState({
    name: '',
    organization: '',
    relation: '',
    contactInfo: '',
    notes: ''
  });
  const [indicators, setIndicators] = useState(formData.basicInfo.indicators || []);

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [field]: event.target.value,
      },
    }));
  };

  const handleAddStakeholder = () => {
    if (newStakeholder.name.trim()) {
      setStakeholders([...stakeholders, { ...newStakeholder, id: Date.now() }]);
      setNewStakeholder({
        name: '',
        organization: '',
        relation: '',
        contactInfo: '',
        notes: ''
      });
    }
  };

  const handleDeleteStakeholder = (id) => {
    setStakeholders(stakeholders.filter(s => s.id !== id));
    setFormData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        stakeholders: stakeholders.filter(s => s.id !== id),
      },
    }));
  };

  const handleStakeholderChange = (field, value) => {
    setNewStakeholder(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleIndicatorAdd = () => {
    const newIndicator = {
      id: Date.now(),
      name: '',
      description: '',
      target: '',
      frequency: '',
      source: '',
    };
    const updatedIndicators = [...indicators, newIndicator];
    setIndicators(updatedIndicators);
    setFormData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        indicators: updatedIndicators,
      },
    }));
  };

  const handleIndicatorDelete = (id) => {
    const updatedIndicators = indicators.filter((i) => i.id !== id);
    setIndicators(updatedIndicators);
    setFormData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        indicators: updatedIndicators,
      },
    }));
  };

  const handleIndicatorChange = (id, field) => (event) => {
    const updatedIndicators = indicators.map((i) =>
      i.id === id ? { ...i, [field]: event.target.value } : i
    );
    setIndicators(updatedIndicators);
    setFormData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        indicators: updatedIndicators,
      },
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        startDate: date,
      },
    }));
  };

  const textFieldStyle = {
    '& .MuiInputLabel-root': {
      right: isRtl ? 14 : 'auto',
      left: isRtl ? 'auto' : 14,
      transformOrigin: isRtl ? 'right' : 'left',
    },
  };

  return (
    <Box sx={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: isRtl ? 'right' : 'left', width: '100%' }}>
        {t('basicInfo')}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('projectName')}
            value={formData.basicInfo.projectName || ''}
            onChange={handleChange('projectName')}
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('organizationName')}
            value={formData.basicInfo.organizationName || ''}
            onChange={handleChange('organizationName')}
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('responsiblePerson')}
            value={formData.basicInfo.responsiblePerson || ''}
            onChange={handleChange('responsiblePerson')}
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('jobTitle')}
            value={formData.basicInfo.jobTitle || ''}
            onChange={handleChange('jobTitle')}
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('mobile')}
            value={formData.basicInfo.mobile || ''}
            onChange={handleChange('mobile')}
            type="tel"
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('email')}
            value={formData.basicInfo.email || ''}
            onChange={handleChange('email')}
            type="email"
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={isRtl ? arSA : enUS} adapterLocale={isRtl ? arSA : enUS}>
            <DatePicker
              label={t('startDate')}
              value={formData.basicInfo.startDate || null}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} required fullWidth />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label={t('generalNotes')}
            value={formData.basicInfo.generalNotes || ''}
            onChange={handleChange('generalNotes')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label={t('description')}
            value={formData.basicInfo.description || ''}
            onChange={handleChange('description')}
          />
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">{t('stakeholders')}</Typography>
              <Button startIcon={<AddIcon />} variant="contained" onClick={handleStakeholderAdd}>
                {t('addStakeholder')}
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t('name')}</TableCell>
                    <TableCell>{t('organization')}</TableCell>
                    <TableCell>{t('relation')}</TableCell>
                    <TableCell>{t('contactInfo')}</TableCell>
                    <TableCell>{t('notes')}</TableCell>
                    <TableCell>{t('actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stakeholders.map((stakeholder) => (
                    <TableRow key={stakeholder.id}>
                      <TableCell>
                        <TextField fullWidth value={stakeholder.name} onChange={handleStakeholderChange(stakeholder.id, 'name')} />
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth value={stakeholder.organization} onChange={handleStakeholderChange(stakeholder.id, 'organization')} />
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth value={stakeholder.relation} onChange={handleStakeholderChange(stakeholder.id, 'relation')} />
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth value={stakeholder.contactInfo} onChange={handleStakeholderChange(stakeholder.id, 'contactInfo')} />
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth value={stakeholder.notes} onChange={handleStakeholderChange(stakeholder.id, 'notes')} />
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleStakeholderDelete(stakeholder.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">{t('performanceIndicators')}</Typography>
              <Button startIcon={<AddIcon />} variant="contained" onClick={handleIndicatorAdd}>
                {t('addIndicator')}
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t('name')}</TableCell>
                    <TableCell>{t('description')}</TableCell>
                    <TableCell>{t('target')}</TableCell>
                    <TableCell>{t('frequency')}</TableCell>
                    <TableCell>{t('source')}</TableCell>
                    <TableCell>{t('actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {indicators.map((indicator) => (
                    <TableRow key={indicator.id}>
                      <TableCell>
                        <TextField fullWidth value={indicator.name} onChange={handleIndicatorChange(indicator.id, 'name')} />
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth value={indicator.description} onChange={handleIndicatorChange(indicator.id, 'description')} />
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth value={indicator.target} onChange={handleIndicatorChange(indicator.id, 'target')} />
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth value={indicator.frequency} onChange={handleIndicatorChange(indicator.id, 'frequency')} />
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth value={indicator.source} onChange={handleIndicatorChange(indicator.id, 'source')} />
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleIndicatorDelete(indicator.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicInfo;
