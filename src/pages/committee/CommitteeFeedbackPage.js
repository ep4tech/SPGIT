import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

const CommitteeFeedbackPage = ({ committee, addFeedback, deleteFeedback }) => {
  const { t } = useTranslation();
  const [newFeedback, setNewFeedback] = useState({ author: '', comment: '' });

  if (!committee) {
    return <Box sx={{ p: 3 }}><Typography color="error">Committee not found</Typography></Box>;
  }

  const handleAddFeedback = () => {
    if (newFeedback.author.trim() && newFeedback.comment.trim()) {
      addFeedback(committee.id, newFeedback);
      setNewFeedback({ author: '', comment: '' });
    }
  };

  const handleRemoveFeedback = (feedbackId) => {
    deleteFeedback(committee.id, feedbackId);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500 }}>
      <Typography variant="h5" gutterBottom>{t('committee.committeeFeedback')}</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label={t('author', 'Author')}
          value={newFeedback.author}
          onChange={e => setNewFeedback({ ...newFeedback, author: e.target.value })}
          size="small"
        />
        <TextField
          label={t('comment', 'Comment')}
          value={newFeedback.comment}
          onChange={e => setNewFeedback({ ...newFeedback, comment: e.target.value })}
          size="small"
        />
        <Button onClick={handleAddFeedback} variant="contained" color="primary">{t('add')}</Button>
      </Box>
      <List>
        {(committee.feedback || []).map((feedback) => (
          <ListItem
            key={feedback.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFeedback(feedback.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={feedback.comment} secondary={feedback.author} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CommitteeFeedbackPage;
