import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Paper, Divider } from '@mui/material';

// Use the same mock data as CommitteesDashboard for now
const mockCommittees = [
  { id: 1, name: 'Steering Committee', type: 'دائم', status: 'نشط', membersCount: 5 },
  { id: 2, name: 'Project Alpha Review', type: 'مؤقت', status: 'نشط', membersCount: 3 },
  { id: 3, name: 'Ethics Board', type: 'دائم', status: 'غير نشط', membersCount: 7 },
];

const CommitteeOverviewPage = () => {
  const { committeeId } = useParams();
  const navigate = useNavigate();
  const committee = mockCommittees.find(c => String(c.id) === String(committeeId));

  if (!committee) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" color="error">Committee not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: 500 }}>
      <Typography variant="h4" gutterBottom>Committee Overview</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1"><b>Name:</b> {committee.name}</Typography>
        <Typography variant="subtitle1"><b>Type:</b> {committee.type}</Typography>
        <Typography variant="subtitle1"><b>Status:</b> {committee.status}</Typography>
        <Typography variant="subtitle1"><b>Members Count:</b> {committee.membersCount}</Typography>
      </Paper>
      <Button variant="contained" color="primary" onClick={() => navigate(`/committee/all/${committee.id}/details`)}>
        Edit Committee
      </Button>
    </Box>
  );
};

export default CommitteeOverviewPage;
