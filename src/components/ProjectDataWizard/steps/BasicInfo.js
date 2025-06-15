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

const BasicInfo = ({ formData, onUpdate }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [stakeholders, setStakeholders] = useState(formData.stakeholders || []);
  const [newStakeholder, setNewStakeholder] = useState({
    name: '',
    organization: '',
    relation: '',
    contactInfo: '',
    notes: ''
  });
  const [indicators, setIndicators] = useState(formData.indicators || []);

  const handleChange = (field) => (event) => {
    const updatedData = {
      ...formData,
      [field]: event.target.value,
    };
    onUpdate(updatedData);
  };

  const handleAddStakeholder = () => {
    if (newStakeholder.name.trim()) {
      const updatedStakeholders = [...stakeholders, { ...newStakeholder, id: Date.now() }];
      setStakeholders(updatedStakeholders);
      setNewStakeholder({
        name: '',
        organization: '',
        relation: '',
        contactInfo: '',
        notes: ''
      });
      onUpdate({
        ...formData,
        stakeholders: updatedStakeholders
      });
    }
  };

  const handleDeleteStakeholder = (id) => {
    const updatedStakeholders = stakeholders.filter(s => s.id !== id);
    setStakeholders(updatedStakeholders);
    onUpdate({
      ...formData,
      stakeholders: updatedStakeholders
    });
  };

  const handleStakeholderChange = (field, value) => {
    setNewStakeholder(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Restore: Add Stakeholder
  const handleStakeholderAdd = () => {
    if (newStakeholder.name.trim()) {
      const updatedStakeholders = [...stakeholders, { ...newStakeholder, id: Date.now() }];
      setStakeholders(updatedStakeholders);
      setNewStakeholder({
        name: '',
        organization: '',
        relation: '',
        contactInfo: '',
        notes: ''
      });
      onUpdate({
        ...formData,
        stakeholders: updatedStakeholders
      });
    }
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
    onUpdate({
      ...formData,
      indicators: updatedIndicators
    });
  };

  const handleIndicatorDelete = (id) => {
    const updatedIndicators = indicators.filter((i) => i.id !== id);
    setIndicators(updatedIndicators);
    onUpdate({
      ...formData,
      indicators: updatedIndicators
    });
  };

  const handleIndicatorChange = (id, field) => (event) => {
    const updatedIndicators = indicators.map((i) =>
      i.id === id ? { ...i, [field]: event.target.value } : i
    );
    setIndicators(updatedIndicators);
    onUpdate({
      ...formData,
      indicators: updatedIndicators
    });
  };

  const handleDateChange = (date) => {
    onUpdate({
      ...formData,
      startDate: date
    });
  };

  const textFieldStyle = {
    '& .MuiInputLabel-root': {
      right: isRtl ? 14 : 'auto',
      left: isRtl ? 'auto' : 14,
      transformOrigin: isRtl ? 'right' : 'left',
    },
  };

  // Defensive: ensure we never crash if formData.basicInfo is missing
  // Defensive: ensure we never crash if formData.basicInfo is missing
  const safeBasicInfo = formData.basicInfo || {};

  return (
    <Box sx={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: isRtl ? 'right' : 'left', width: '100%' }}>
        {t('basicInfo.title')}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('basicInfo.projectName')}
            value={safeBasicInfo.projectName || ''}
            onChange={handleChange('basicInfo.projectName')}
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('basicInfo.organizationName')}
            value={safeBasicInfo.organizationName || ''}
            onChange={handleChange('organizationName')}
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('basicInfo.responsiblePerson')}
            value={safeBasicInfo.responsiblePerson || ''}
            onChange={handleChange('responsiblePerson')}
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('jobTitle')}
            value={safeBasicInfo.jobTitle || ''}
            onChange={handleChange('jobTitle')}
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={t('mobile')}
            value={safeBasicInfo.mobile || ''}
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
            value={safeBasicInfo.email || ''}
            onChange={handleChange('email')}
            type="email"
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={isRtl ? arSA : enUS} adapterLocale={isRtl ? arSA : enUS}>
            <DatePicker
              label={t('basicInfo.startDate')}
              value={safeBasicInfo.startDate || null}
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
            label={t('basicInfo.generalNotes')}
            value={safeBasicInfo.generalNotes || ''}
            onChange={handleChange('generalNotes')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label={t('basicInfo.description')}
            value={safeBasicInfo.description || ''}
            onChange={handleChange('description')}
          />
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">{t('stakeholders')}</Typography>
              <Button startIcon={<AddIcon />} variant="contained" onClick={handleStakeholderAdd}>
                {t('basicInfo.addStakeholder')}
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t('name')}</TableCell>
                    <TableCell>{t('organization')}</TableCell>
                    <TableCell>{t('basicInfo.relation')}</TableCell>
                    <TableCell>{t('basicInfo.contactInfo')}</TableCell>
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
              <Typography variant="h6">{t('basicInfo.performanceIndicators')}</Typography>
              <Button startIcon={<AddIcon />} variant="contained" onClick={handleIndicatorAdd}>
                {t('basicInfo.addIndicator')}
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t('basicInfo.name')}</TableCell>
                    <TableCell>{t('basicInfo.description')}</TableCell>
                    <TableCell>{t('basicInfo.target')}</TableCell>
                    <TableCell>{t('basicInfo.frequency')}</TableCell>
                    <TableCell>{t('basicInfo.source')}</TableCell>
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
