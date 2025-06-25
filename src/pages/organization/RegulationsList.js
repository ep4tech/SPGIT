// RegulationsList.js
// القسم السفلي: قائمة اللوائح مع إضافة/حذف

import React, { useState } from 'react';
import { Box, IconButton, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const initialRegs = [
  { id: 1, name: 'لائحة الموارد البشرية', file: null },
  { id: 2, name: 'نظام المالية', file: null },
];

const RegulationsList = ({ regulations, onChange }) => {
  const regs = regulations;
  const [addValue, setAddValue] = useState('');
  const [file, setFile] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleAdd = () => {
    if (!addValue.trim()) return;
    onChange([...regs, { id: Date.now(), name: addValue, file }]);
    setAddValue('');
    setFile(null);
  };

  const handleDelete = () => {
    onChange(regs.filter(r => r.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
        <TextField size="small" placeholder="إضافة لائحة" value={addValue} onChange={e => setAddValue(e.target.value)} sx={{ width: 180 }} />
        <Button component="label" startIcon={<UploadFileIcon />} size="small" variant="outlined">
          مرفق
          <input hidden type="file" onChange={e => setFile(e.target.files[0])} />
        </Button>
        <IconButton color="primary" onClick={handleAdd}><AddIcon /></IconButton>
      </Box>
      <List dense>
        {regs.map(reg => (
          <ListItem key={reg.id} secondaryAction={
            <>
              {reg.file && (
                <IconButton component="a" href={URL.createObjectURL(reg.file)} download>
                  <UploadFileIcon />
                </IconButton>
              )}
              <IconButton edge="end" color="error" onClick={() => setDeleteId(reg.id)}><DeleteIcon /></IconButton>
            </>
          }>
            <ListItemText primary={reg.name} />
          </ListItem>
        ))}
      </List>
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>تأكيد الحذف</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>إلغاء</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>حذف</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RegulationsList;
