import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, Stepper, Step, StepLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SetupExecutionPage = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    projectName: '',
    team: '',
    startDate: '',
    endDate: '',
    document: ''
  });

  const steps = [
    t('execution.setup.projectInfo'),
    t('execution.setup.team'),
    t('execution.setup.timeline'),
    t('execution.setup.documentUpload')
  ];

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.setup.title')}</Typography>
      <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
        {steps.map((label, idx) => <Step key={idx}><StepLabel>{label}</StepLabel></Step>)}
      </Stepper>
      <Paper sx={{ p: 3, mb: 2 }}>
        {activeStep === 0 && (
          <TextField label={t('execution.setup.projectName')} name="projectName" fullWidth value={form.projectName} onChange={handleChange} sx={{ mb: 2 }} />
        )}
        {activeStep === 1 && (
          <TextField label={t('execution.setup.team')} name="team" fullWidth value={form.team} onChange={handleChange} sx={{ mb: 2 }} />
        )}
        {activeStep === 2 && (
          <Grid container spacing={2}>
            <Grid item xs={6}><TextField label={t('execution.setup.startDate')} name="startDate" type="date" InputLabelProps={{ shrink: true }} fullWidth value={form.startDate} onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField label={t('execution.setup.endDate')} name="endDate" type="date" InputLabelProps={{ shrink: true }} fullWidth value={form.endDate} onChange={handleChange} /></Grid>
          </Grid>
        )}
        {activeStep === 3 && (
          <TextField label={t('execution.setup.document')} name="document" fullWidth value={form.document} onChange={handleChange} sx={{ mb: 2 }} />
        )}
      </Paper>
      <Box display="flex" justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={handleBack}>{t('back')}</Button>
        <Button variant="contained" onClick={handleNext} disabled={activeStep === steps.length - 1}>{t('next')}</Button>
      </Box>
    </Box>
  );
};

export default SetupExecutionPage;
