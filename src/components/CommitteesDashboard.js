import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  IconButton,
  Toolbar
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Placeholder data - replace with API call
const mockCommittees = [
  { id: 1, name: 'Steering Committee', type: 'دائم', status: 'نشط', membersCount: 5 },
  { id: 2, name: 'Project Alpha Review', type: 'مؤقت', status: 'نشط', membersCount: 3 },
  { id: 3, name: 'Ethics Board', type: 'دائم', status: 'غير نشط', membersCount: 7 },
];

import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const CommitteesDashboard = () => {
  console.log('======>> We ae in components/CommitteesDashboard.js');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [committees, setCommittees] = useState(mockCommittees);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [committeeToDelete, setCommitteeToDelete] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCommittees = committees.filter(committee =>
    committee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // TODO: Implement navigation for add, view, edit, delete
  const handleAddCommittee = () => {
    navigate('/committee/add');
  };

  const handleViewCommittee = (id) => {
    navigate(`/committee/all/${id}/overview`);
  };

  const handleEditCommittee = (id) => {
    navigate(`/committee/all/${id}/details`);
  };

  const handleDeleteCommittee = (id) => {
    setCommitteeToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteCommittee = () => {
    setCommittees(prev => prev.filter(c => c.id !== committeeToDelete));
    setDeleteDialogOpen(false);
    setCommitteeToDelete(null);
  };

  const cancelDeleteCommittee = () => {
    setDeleteDialogOpen(false);
    setCommitteeToDelete(null);
  };

  return (
    <Box sx={{ width: '100%' }}> {/* Changed Container to Box for better fit in Outlet */}
      <Typography variant="h4" gutterBottom component="h1">
        {t('committee.title')}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
        {t('committee.description')}
      </Typography>

      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Toolbar sx={{ justifyContent: 'space-between', p: '0 !important', mb: 2 }}>
          <TextField
            label={t('committee.searchPlaceholder')}
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: '300px' }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddCommittee}
          >
            {t('committee.addCommittee')}
          </Button>
        </Toolbar>

        <TableContainer>
          <Table stickyHeader aria-label={t('committee.pageTitle')}>
            <TableHead>
              <TableRow>
                <TableCell>{t('name')}</TableCell>
                <TableCell>{t('type')}</TableCell>
                <TableCell>{t('status')}</TableCell>
                <TableCell align="right">{t('committee.membersCount')}</TableCell>
                <TableCell align="center">{t('actions')}</TableCell>
              </TableRow>
            </TableHead>  
            <TableBody>
              {filteredCommittees.map((committee) => (
                <TableRow
                  hover
                  key={committee.id}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleViewCommittee(committee.id)}
                >
                  <TableCell>{committee.name}</TableCell>
                  {/* Using t with a fallback for dynamic keys from mock data */}
                  <TableCell>{t(`committee.committeeForm.fields.committeeTypeOptions.${committee.type.toLowerCase()}`, committee.type)}</TableCell>
                  <TableCell>{t(`committee.committeeForm.fields.statusOptions.${committee.status.toLowerCase()}`, committee.status)}</TableCell>
                  <TableCell align="right">{committee.membersCount}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={e => { e.stopPropagation(); handleViewCommittee(committee.id); }} aria-label={t('committee.committeesDashboard.buttons.viewCommitteeDetails', 'View Details')}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton onClick={e => { e.stopPropagation(); handleEditCommittee(committee.id); }} aria-label={t('committee.committeesDashboard.buttons.editCommittee', 'Edit Committee')}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteCommittee(committee.id)} aria-label={t('committee.committeesDashboard.buttons.deleteCommittee', 'Delete Committee')}>
                      <DeleteIcon />
                    </IconButton>
                    <Dialog open={deleteDialogOpen} onClose={cancelDeleteCommittee}>
                      <DialogTitle>{t('confirmation')}</DialogTitle>
                      <DialogContent>
                        {committeeToDelete != null && committees.find(c => c.id === committeeToDelete)
                          ? t('committee.deleteConfirmationWithName', { name: committees.find(c => c.id === committeeToDelete).name })
                          : t('committee.deleteConfirmation', 'Are you sure you want to delete this committee?')}
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={cancelDeleteCommittee}>{t('cancel')}</Button>
                        <Button onClick={confirmDeleteCommittee} color="error">{t('delete')}</Button>
                      </DialogActions>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default CommitteesDashboard;
