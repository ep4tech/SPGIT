import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper, MenuItem, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CommitteeMembersPage from './CommitteeMembersPage';
import CommitteeAssignmentsPage from './CommitteeAssignmentsPage';
import CommitteeMeetingsPage from './CommitteeMeetingsPage';
import CommitteeFeedbackPage from './CommitteeFeedbackPage';
import CommitteeDocumentsPage from './CommitteeDocumentsPage';

const typeOptions = [
  { value: 'دائم', label: 'دائم (Permanent)' },
  { value: 'مؤقت', label: 'مؤقت (Temporary)' }
];
const statusOptions = [
  { value: 'نشط', label: 'نشط (Active)' },
  { value: 'غير نشط', label: 'غير نشط (Inactive)' }
];

const CommitteeDetailsPage = ({
  committee,
  editCommittee,
  addMember,
  editMember,
  deleteMember,
  addAssignment,
  editAssignment,
  deleteAssignment,
  addMeeting,
  editMeeting,
  deleteMeeting,
  addFeedback,
  editFeedback,
  deleteFeedback,
  addDocument,
  editDocument,
  deleteDocument
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({ name: '', type: '', status: '', membersCount: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (committee) {
      setForm({
        name: committee.name || '',
        type: committee.type || '',
        status: committee.status || '',
        membersCount: committee.membersCount || ''
      });
    }
  }, [committee]);

  if (!committee) {
    return <Box sx={{ p: 3 }}><Typography color="error">Committee not found</Typography></Box>;
  }

  const handleTabChange = (e, newValue) => setTab(newValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.type || !form.status || String(form.membersCount).trim() === '') {
      setError('All fields are required.');
      return;
    }
    setError('');
    editCommittee(committee.id, {
      name: form.name,
      type: form.type,
      status: form.status,
      membersCount: Number(form.membersCount)
    });
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 2 }}>
        <Tabs value={tab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
          <Tab label={t('committee.tabs.overview')} />
          <Tab label={t('committee.tabs.members')} />
          <Tab label={t('committee.tabs.assignments')} />
          <Tab label={t('committee.tabs.meetings')} />
          <Tab label={t('committee.tabs.feedback')} />
          <Tab label={t('committee.tabs.documents')} />
        </Tabs>
        <Box sx={{ mt: 3 }}>
          {tab === 0 && (
            <Box>
              <Typography variant="h5" gutterBottom>{t('committee.editDetails')}</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label={t('name')}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label={t('type')}
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  select
                  fullWidth
                  margin="normal"
                  required
                >
                  {typeOptions.map(opt => <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>)}
                </TextField>
                <TextField
                  label={t('status')}
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  select
                  fullWidth
                  margin="normal"
                  required
                >
                  {statusOptions.map(opt => <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>)}
                </TextField>
                <TextField
                  label={t('committee.membersCount')}
                  name="membersCount"
                  value={form.membersCount}
                  onChange={handleChange}
                  type="number"
                  fullWidth
                  margin="normal"
                  required
                />
                {error && <Typography color="error" sx={{ mt: 1 }}>{t('committee.validation.allFieldsRequired')}</Typography>}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button type="submit" variant="contained" color="primary">{t('save')}</Button>
                </Box>
              </form>
            </Box>
          )}
          {tab === 1 && (
            <CommitteeMembersPage committee={committee} addMember={addMember} editMember={editMember} deleteMember={deleteMember} />
          )}
          {tab === 2 && (
            <CommitteeAssignmentsPage committee={committee} addAssignment={addAssignment} editAssignment={editAssignment} deleteAssignment={deleteAssignment} />
          )}
          {tab === 3 && (
            <CommitteeMeetingsPage committee={committee} addMeeting={addMeeting} editMeeting={editMeeting} deleteMeeting={deleteMeeting} />
          )}
          {tab === 4 && (
            <CommitteeFeedbackPage committee={committee} addFeedback={addFeedback} editFeedback={editFeedback} deleteFeedback={deleteFeedback} />
          )}
          {tab === 5 && (
            <CommitteeDocumentsPage committee={committee} addDocument={addDocument} editDocument={editDocument} deleteDocument={deleteDocument} />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default CommitteeDetailsPage;
