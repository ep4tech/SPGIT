import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringSetupPage = () => {
  const { t } = useTranslation();
  const [form, setForm] = React.useState({
    projectName: '',
    team: '',
    startDate: '',
    endDate: '',
    document: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: handle form submit
    alert('Submitted!');
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.setup.title')}</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
        <TextField label={t('monitoring.setup.projectInfo.projectName')} name="projectName" value={form.projectName} onChange={handleChange} fullWidth />
        <TextField label={t('monitoring.setup.team')} name="team" value={form.team} onChange={handleChange} fullWidth />
        <TextField label={t('monitoring.setup.projectInfo.startDate')} name="startDate" type="date" value={form.startDate} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth />
        <TextField label={t('monitoring.setup.projectInfo.endDate')} name="endDate" type="date" value={form.endDate} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth />
        <Button variant="outlined" component="label">
          {t('monitoring.setup.documentUpload')}
          <input type="file" name="document" hidden onChange={handleChange} />
        </Button>
        <Button type="submit" variant="contained">{t('submit')}</Button>
      </Box>
    </Box>
  );
};
export default MonitoringSetupPage;
