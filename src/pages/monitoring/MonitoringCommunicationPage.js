import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonitoringCommunicationPage = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringCommunicationPage.js');
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, date: new Date().toLocaleString() }]);
      setMessage('');
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('monitoring.communication.title')}</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField label={t('monitoring.communication.message')} fullWidth value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} sx={{ mb: 2 }} />
        <Button onClick={handleSend} variant="contained">{t('monitoring.communication.send')}</Button>
      </Paper>
      <List>
        {messages.map((msg, idx) => (
          <ListItem key={idx}><ListItemText primary={msg.text} secondary={msg.date} /></ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MonitoringCommunicationPage;
