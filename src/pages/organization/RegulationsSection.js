import React, { useState } from 'react';
import { Button, TextField, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useTranslation } from 'react-i18next';

const initialRegulations = [
  { id: 1, name: 'لائحة الموارد البشرية', file: null },
  { id: 2, name: 'نظام المالية', file: null },
];

const RegulationsSection = (props) => {
  console.log('======>> We are in pages/organization/RegulationsSection.js');
  const { t } = useTranslation();
  // Regulations are now stored per org node
  const [regulationsByOrg, setRegulationsByOrg] = useState({
    '1': initialRegulations,
  });
  const regulations = regulationsByOrg[props.selectedOrgNodeId] || [];
  const [newRegulation, setNewRegulation] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  function handleAdd() {
    if (!newRegulation.trim()) return;
    setRegulationsByOrg(prev => ({
      ...prev,
      [props.selectedOrgNodeId]: [
        ...(prev[props.selectedOrgNodeId] || []),
        { id: Date.now(), name: newRegulation, file: null },
      ]
    }));
    setNewRegulation('');
  }

  // Fix: handle file upload (mocked)
  function handleUpload(id, e) {
    const file = e.target.files[0];
    if (!file) return;
    setRegulations(prev => prev.map(r => r.id === id ? { ...r, file } : r));
  }

  return (
    <div className="regulations-section">
      <div className="regulations-toolbar">
        <TextField size="small" value={newRegulation} onChange={e => setNewRegulation(e.target.value)} placeholder={t('organizationPermissions.regulations.addRegulation')}
          onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }}
        />
        <Button variant="contained" size="small" onClick={handleAdd}>{t('add')}</Button>
      </div>
      <List>
        {regulations.map(reg => (
          <ListItem key={reg.id} secondaryAction={
            <>
              <IconButton edge="end" component="label">
                <UploadFileIcon />
                <input type="file" hidden onChange={e => handleUpload(reg.id, e)} />
              </IconButton>
              <IconButton edge="end" onClick={() => handleEdit(reg.id, reg.name)}>
                <span role="img" aria-label="edit">✎</span>
              </IconButton>
              <IconButton edge="end" onClick={() => handleDelete(reg.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }>
            {editingId === reg.id ? (
              <>
                <TextField size="small" value={editValue} onChange={e => setEditValue(e.target.value)} />
                <Button onClick={() => handleEditSave(reg.id)}>{t('organizationPermissions.regulations.edit')}</Button>
                <Button onClick={handleEditCancel}>{t('organizationPermissions.regulations.cancel')}</Button>
              </>
            ) : (
              <>
                {reg.name}
                {reg.file && <span style={{ marginLeft: 8, color: '#888' }}>({reg.file.name})</span>}
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RegulationsSection;
