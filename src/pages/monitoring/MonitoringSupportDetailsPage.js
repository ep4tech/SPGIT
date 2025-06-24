import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringSupportDetailsPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringSupportDetailsPage.js');
  const { t } = useTranslation();
  const [request, setRequest] = useState('');
  const [requests, setRequests] = useState([]);

  const handleSend = () => {
    if (request.trim()) {
      setRequests([...requests, { text: request, date: new Date().toLocaleString() }]);
      setRequest('');
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.support.title')}</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField 
          label={t('monitoring.support.enter')} 
          fullWidth 
          value={request} 
          onChange={e => setRequest(e.target.value)} 
          onKeyPress={e => e.key === 'Enter' && handleSend()} 
          sx={{ mb: 2 }} 
          multiline
          rows={4}
        />
        <Button onClick={handleSend} variant="contained">{t('monitoring.support.send')}</Button>
      </Paper>
      <List>
        {requests.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText 
              primary={item.text} 
              secondary={item.date} 
              primaryTypographyProps={{ fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'textSecondary' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MonitoringSupportDetailsPage;
