import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FeedbackExecutionPage = () => {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSend = () => {
    if (feedback.trim()) {
      setFeedbackList([...feedbackList, { text: feedback, date: new Date().toLocaleString() }]);
      setFeedback('');
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>{t('execution.feedback.title')}</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField label={t('execution.feedback.enter')} fullWidth value={feedback} onChange={e => setFeedback(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} sx={{ mb: 2 }} />
        <Button onClick={handleSend} variant="contained">{t('execution.feedback.send')}</Button>
      </Paper>
      <List>
        {feedbackList.map((item, idx) => (
          <ListItem key={idx}><ListItemText primary={item.text} secondary={item.date} /></ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FeedbackExecutionPage;
