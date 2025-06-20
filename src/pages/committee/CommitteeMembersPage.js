import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

const CommitteeMembersPage = ({ committee, addMember, deleteMember }) => {
  const { t } = useTranslation();
  const [newMember, setNewMember] = useState({ name: '', role: '' });

  if (!committee) {
    return <Box sx={{ p: 3 }}><Typography color="error">Committee not found</Typography></Box>;
  }

  const handleAddMember = () => {
    if (newMember.name.trim() && newMember.role.trim()) {
      addMember(committee.id, newMember);
      setNewMember({ name: '', role: '' });
    }
  };

  const handleRemoveMember = (memberId) => {
    deleteMember(committee.id, memberId);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500 }}>
      <Typography variant="h5" gutterBottom>{t('committee.committeeMembers')}</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label={t('name')}
          value={newMember.name}
          onChange={e => setNewMember({ ...newMember, name: e.target.value })}
          size="small"
        />
        <TextField
          label={t('role')}
          value={newMember.role}
          onChange={e => setNewMember({ ...newMember, role: e.target.value })}
          size="small"
        />
        <Button onClick={handleAddMember} variant="contained" color="primary">{t('add')}</Button>
      </Box>
      <List>
        {(committee.members || []).map((member) => (
          <ListItem
            key={member.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveMember(member.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={member.name} secondary={member.role} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CommitteeMembersPage;
