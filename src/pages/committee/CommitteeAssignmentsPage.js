import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

const CommitteeAssignmentsPage = ({ committee, addAssignment, deleteAssignment }) => {
  const { t } = useTranslation();
  const [newAssignment, setNewAssignment] = useState({ title: '', assignee: '' });

  if (!committee) {
    return <Box sx={{ p: 3 }}><Typography color="error">Committee not found</Typography></Box>;
  }

  const handleAddAssignment = () => {
    if (newAssignment.title.trim() && newAssignment.assignee.trim()) {
      addAssignment(committee.id, newAssignment);
      setNewAssignment({ title: '', assignee: '' });
    }
  };

  const handleRemoveAssignment = (assignmentId) => {
    deleteAssignment(committee.id, assignmentId);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500 }}>
      <Typography variant="h5" gutterBottom>{t('committee.committeeAssignments')}</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label={t('title')}
          value={newAssignment.title}
          onChange={e => setNewAssignment({ ...newAssignment, title: e.target.value })}
          size="small"
        />
        <TextField
          label={t('assignee', 'Assignee')}
          value={newAssignment.assignee}
          onChange={e => setNewAssignment({ ...newAssignment, assignee: e.target.value })}
          size="small"
        />
        <Button onClick={handleAddAssignment} variant="contained" color="primary">{t('add')}</Button>
      </Box>
      <List>
        {(committee.assignments || []).map((assignment) => (
          <ListItem
            key={assignment.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveAssignment(assignment.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={assignment.title} secondary={assignment.assignee} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CommitteeAssignmentsPage;
