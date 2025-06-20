import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

const CommitteeDocumentsPage = ({ committee, addDocument, deleteDocument }) => {
  const { t } = useTranslation();
  const [newDocument, setNewDocument] = useState({ title: '', fileName: '' });

  if (!committee) {
    return <Box sx={{ p: 3 }}><Typography color="error">Committee not found</Typography></Box>;
  }

  const handleAddDocument = () => {
    if (newDocument.title.trim() && newDocument.fileName.trim()) {
      addDocument(committee.id, newDocument);
      setNewDocument({ title: '', fileName: '' });
    }
  };

  const handleRemoveDocument = (documentId) => {
    deleteDocument(committee.id, documentId);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500 }}>
      <Typography variant="h5" gutterBottom>{t('committee.committeeDocuments')}</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label={t('title')}
          value={newDocument.title}
          onChange={e => setNewDocument({ ...newDocument, title: e.target.value })}
          size="small"
        />
        <TextField
          label={t('fileName', 'File Name')}
          value={newDocument.fileName}
          onChange={e => setNewDocument({ ...newDocument, fileName: e.target.value })}
          size="small"
        />
        <Button onClick={handleAddDocument} variant="contained" color="primary">{t('add')}</Button>
      </Box>
      <List>
        {(committee.documents || []).map((doc) => (
          <ListItem
            key={doc.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveDocument(doc.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={doc.title} secondary={doc.fileName} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CommitteeDocumentsPage;
