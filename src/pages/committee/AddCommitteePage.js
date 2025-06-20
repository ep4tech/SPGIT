import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AddCommitteePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    type: '',
    status: '',
    membersCount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would submit to API or update state in parent
    // For now, just navigate back
    navigate('/committee/all');
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>{t('committee.addCommittee')}</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t('committee.nameHeader')}
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            select
            label={t('committee.typeHeader')}
            name="type"
            value={form.type}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          >
            <MenuItem value="دائم">{t('committee.permanent')}</MenuItem>
            <MenuItem value="مؤقت">{t('committee.temporary')}</MenuItem>
          </TextField>
          <TextField
            select
            label={t('committee.statusHeader')}
            name="status"
            value={form.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          >
            <MenuItem value="نشط">{t('committee.active')}</MenuItem>
            <MenuItem value="غير نشط">{t('committee.inactive')}</MenuItem>
          </TextField>
          <TextField
            label={t('committee.membersCount')}
            name="membersCount"
            value={form.membersCount}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
            required
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={() => navigate('/committee/all')} sx={{ mr: 2 }}>{t('cancel')}</Button>
            <Button type="submit" variant="contained">{t('save')}</Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddCommitteePage;
