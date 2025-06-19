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
  { id: 1, name: 'Steering Committee', type: 'Permanent', status: 'Active', membersCount: 5 },
  { id: 2, name: 'Project Alpha Review', type: 'Temporary', status: 'Active', membersCount: 3 },
  { id: 3, name: 'Ethics Board', type: 'Permanent', status: 'Inactive', membersCount: 7 },
];

const CommitteesDashboard = () => {
  console.log('======>> We ae in components/CommitteesDashboard.js');
  const { t } = useTranslation();
  const [committees, setCommittees] = useState(mockCommittees);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCommittees = committees.filter(committee =>
    committee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // TODO: Implement navigation for add, view, edit, delete
  const handleAddCommittee = () => {
    console.log('Navigate to Add Committee page');
    // Example: navigate('/committee/add-committee');
  };

  const handleViewCommittee = (id) => {
    console.log(`Navigate to View Committee page for id: ${id}`);
    // Example: navigate(`/committee/view/${id}`);
  };

  const handleEditCommittee = (id) => {
    console.log(`Navigate to Edit Committee page for id: ${id}`);
    // Example: navigate(`/committee/edit/${id}`);
  };

  const handleDeleteCommittee = (id) => {
    console.log(`Delete Committee with id: ${id}`);
    setCommittees(prev => prev.filter(c => c.id !== id));
  };

  return (
    <Box sx={{ width: '100%' }}> {/* Changed Container to Box for better fit in Outlet */}
      <Typography variant="h4" gutterBottom component="h1">
        {t('committee.pageTitle')}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
        {t('committee.pageDescription')}
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
                <TableCell>{t('committee.nameHeader')}</TableCell>
                <TableCell>{t('committee.typeHeader')}</TableCell>
                <TableCell>{t('committee.statusHeader')}</TableCell>
                <TableCell align="right">{t('committee.membersCountHeader')}</TableCell>
                <TableCell align="center">{t('committee.actionsHeader')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCommittees.map((committee) => (
                <TableRow hover key={committee.id}>
                  <TableCell>{committee.name}</TableCell>
                  {/* Using t with a fallback for dynamic keys from mock data */}
                  <TableCell>{t(`committee.committeeForm.fields.committeeTypeOptions.${committee.type.toLowerCase()}`, committee.type)}</TableCell>
                  <TableCell>{t(`committee.committeeForm.fields.statusOptions.${committee.status.toLowerCase()}`, committee.status)}</TableCell>
                  <TableCell align="right">{committee.membersCount}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleViewCommittee(committee.id)} aria-label={t('committee.committeesDashboard.buttons.viewCommitteeDetails', 'View Details')}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton onClick={() => handleEditCommittee(committee.id)} aria-label={t('committee.committeesDashboard.buttons.editCommittee', 'Edit Committee')}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteCommittee(committee.id)} aria-label={t('committee.committeesDashboard.buttons.deleteCommittee', 'Delete Committee')}>
                      <DeleteIcon />
                    </IconButton>
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
