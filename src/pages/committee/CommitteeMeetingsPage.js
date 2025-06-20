import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

const CommitteeMeetingsPage = ({ committee, addMeeting, deleteMeeting }) => {
  const { t } = useTranslation();
  const [newMeeting, setNewMeeting] = useState({ topic: '', date: '' });

  if (!committee) {
    return <Box sx={{ p: 3 }}><Typography color="error">Committee not found</Typography></Box>;
  }

  const handleAddMeeting = () => {
    if (newMeeting.topic.trim() && newMeeting.date.trim()) {
      addMeeting(committee.id, newMeeting);
      setNewMeeting({ topic: '', date: '' });
    }
  };

  const handleRemoveMeeting = (meetingId) => {
    deleteMeeting(committee.id, meetingId);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500 }}>
      <Typography variant="h5" gutterBottom>{t('committee.committeeMeetings')}</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label={t('topic', 'Topic')}
          value={newMeeting.topic}
          onChange={e => setNewMeeting({ ...newMeeting, topic: e.target.value })}
          size="small"
        />
        <TextField
          label={t('date', 'Date')}
          type="date"
          value={newMeeting.date}
          onChange={e => setNewMeeting({ ...newMeeting, date: e.target.value })}
          size="small"
          InputLabelProps={{ shrink: true }}
        />
        <Button onClick={handleAddMeeting} variant="contained" color="primary">{t('add')}</Button>
      </Box>
      <List>
        {(committee.meetings || []).map((meeting) => (
          <ListItem
            key={meeting.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveMeeting(meeting.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={meeting.topic} secondary={meeting.date} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CommitteeMeetingsPage;
