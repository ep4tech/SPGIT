import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Grid,
  Tabs,
  Tab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { arSA, enUS } from 'date-fns/locale';

const PlanningTeam = ({ formData, setFormData }) => {
  // Defensive: ensure we never crash if formData.planningTeam is missing
  const safePlanningTeam = formData.planningTeam || {
    internalTeam: [],
    externalTeam: [],
    committees: []
  };
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = React.useState(0);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [newMember, setNewMember] = React.useState({
    name: '',
    mobile: '',
    email: '',
    department: '',
    role: '',
    membershipStart: null,
    externalOrganization: '',
    committeeName: '',
    committeeRole: '',
  });

  const tabs = ['internalTeam', 'externalTeam', 'committees'];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setNewMember({
      name: '',
      mobile: '',
      email: '',
      department: '',
      role: '',
      membershipStart: null,
      externalOrganization: '',
      committeeName: '',
      committeeRole: '',
    });
  };

  const handleInputChange = (field) => (event) => {
    setNewMember((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleDateChange = (date) => {
    setNewMember((prev) => ({
      ...prev,
      membershipStart: date,
    }));
  };

  const handleAddMember = () => {
    const isValid = (
      activeTab === 0 ? // Internal Team
        newMember.name && newMember.mobile && newMember.email && newMember.department && newMember.role :
      activeTab === 1 ? // External Team
        newMember.name && newMember.mobile && newMember.email && newMember.externalOrganization && newMember.role :
      // Committees
        newMember.name && newMember.mobile && newMember.email && newMember.committeeName && newMember.committeeRole
    );

    if (isValid && newMember.membershipStart) {
      setFormData((prev) => ({
        ...prev,
        planningTeam: {
          ...prev.planningTeam,
          [tabs[activeTab]]: [
            ...(prev.planningTeam[tabs[activeTab]] || []),
            { ...newMember },
          ],
        },
      }));
      setNewMember({
        name: '',
        mobile: '',
        email: '',
        department: '',
        role: '',
        membershipStart: null,
        externalOrganization: '',
        committeeName: '',
        committeeRole: '',
      });
      setDialogOpen(false);
    }
  };

  const handleDeleteMember = (tabName, index) => {
    setFormData((prev) => ({
      ...prev,
      planningTeam: {
        ...prev.planningTeam,
        [tabName]: prev.planningTeam[tabName].filter((_, i) => i !== index),
      },
    }));
  };

  const getTableColumns = () => {
    switch (activeTab) {
      case 0: // Internal Team
        return [
          { id: 'name', label: t('name') },
          { id: 'mobile', label: t('mobile') },
          { id: 'email', label: t('email') },
          { id: 'department', label: t('department') },
          { id: 'role', label: t('role') },
          { id: 'membershipStart', label: t('dataWizard.planningTeam.membershipStart') },
          { id: 'actions', label: '' },
        ];
      case 1: // External Team
        return [
          { id: 'name', label: t('name') },
          { id: 'mobile', label: t('mobile') },
          { id: 'email', label: t('email') },
          { id: 'externalOrganization', label: t('dataWizard.planningTeam.externalOrganization') },
          { id: 'role', label: t('role') },
          { id: 'membershipStart', label: t('dataWizard.planningTeam.membershipStart') },
          { id: 'actions', label: '' },
        ];
      case 2: // Committees
        return [
          { id: 'name', label: t('name') },
          { id: 'mobile', label: t('mobile') },
          { id: 'email', label: t('email') },
          { id: 'committeeName', label: t('dataWizard.planningTeam.committeeName') },
          { id: 'committeeRole', label: t('dataWizard.planningTeam.committeeRole') },
          { id: 'membershipStart', label: t('dataWizard.planningTeam.membershipStart') },
          { id: 'actions', label: '' },
        ];
      default:
        return [];
    }
  };

  const renderDialogContent = () => {
    const commonFields = (
      <>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label={t('name')}
            value={newMember.name}
            onChange={handleInputChange('name')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label={t('mobile')}
            value={newMember.mobile}
            onChange={handleInputChange('mobile')}
            type="tel"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label={t('email')}
            value={newMember.email}
            onChange={handleInputChange('email')}
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={i18n.language === 'ar' ? arSA : enUS}
          >
            <DatePicker
              label={t('dataWizard.planningTeam.membershipStart')}
              value={newMember.membershipStart}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  fullWidth
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
      </>
    );

    switch (activeTab) {
      case 0: // Internal Team
        return (
          <>
            {commonFields}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('department')}
                value={newMember.department}
                onChange={handleInputChange('department')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('role')}
                value={newMember.role}
                onChange={handleInputChange('role')}
              />
            </Grid>
          </>
        );
      case 1: // External Team
        return (
          <>
            {commonFields}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('dataWizard.planningTeam.externalOrganization')}
                value={newMember.externalOrganization}
                onChange={handleInputChange('externalOrganization')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('role')}
                value={newMember.role}
                onChange={handleInputChange('role')}
              />
            </Grid>
          </>
        );
      case 2: // Committees
        return (
          <>
            {commonFields}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('dataWizard.planningTeam.committeeName')}
                value={newMember.committeeName}
                onChange={handleInputChange('committeeName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('dataWizard.planningTeam.committeeRole')}
                value={newMember.committeeRole}
                onChange={handleInputChange('committeeRole')}
              />
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('dataWizard.planningTeam.title')}
      </Typography>
      
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        sx={{ mb: 3 }}
      >
        {tabs.map((tab) => (
          <Tab key={tab} label={t(`dataWizard.planningTeam.${tab}`)} />
        ))}
      </Tabs>

      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          onClick={() => setDialogOpen(true)}
          startIcon={<AddIcon />}
        >
          {t('dataWizard.planningTeam.addMember')}
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {getTableColumns().map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {safePlanningTeam[tabs[activeTab]]?.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.mobile}</TableCell>
                <TableCell>{member.email}</TableCell>
                {activeTab === 0 && (
                  <>
                    <TableCell>{member.department}</TableCell>
                    <TableCell>{member.role}</TableCell>
                  </>
                )}
                {activeTab === 1 && (
                  <>
                    <TableCell>{member.externalOrganization}</TableCell>
                    <TableCell>{member.role}</TableCell>
                  </>
                )}
                {activeTab === 2 && (
                  <>
                    <TableCell>{member.committeeName}</TableCell>
                    <TableCell>{member.committeeRole}</TableCell>
                  </>
                )}
                <TableCell>
                  {member.membershipStart?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteMember(tabs[activeTab], index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{t('dataWizard.planningTeam.addMember')}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {renderDialogContent()}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>
            {t('cancel')}
          </Button>
          <Button onClick={handleAddMember} variant="contained" color="primary">
            {t('add')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PlanningTeam;
