import CommitteeSection from './CommitteeSection';
import React from 'react';
import { Box, List, ListItem, ListItemText, Drawer } from '@mui/material';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CommitteeLayout = ({ children }) => {
  const { t } = useTranslation();
  const menuItems = [
    { label: t('committee.sidebar.all'), path: '/committee/all' },
    { label: t('committee.sidebar.add'), path: '/committee/add' },
    { label: t('committee.sidebar.upcoming'), path: '/committee/upcoming-meetings' },
    { label: t('committee.sidebar.actionItems'), path: '/committee/action-items' },
    { label: t('committee.sidebar.attendance'), path: '/committee/attendance-overview' },
    { label: t('committee.sidebar.members'), path: '/committee/members' },
    { label: t('committee.sidebar.assignments'), path: '/committee/assignments' },
    { label: t('committee.sidebar.meetings'), path: '/committee/meetings' },
    { label: t('committee.sidebar.feedback'), path: '/committee/feedback' },
    { label: t('committee.sidebar.documents'), path: '/committee/documents' },
    { label: t('committee.sidebar.repository'), path: '/committee/documents-repository' },
  ];

  console.log("CommitteeLayout rendered!");
  const location = useLocation();
  return (
    <CommitteeSection>
      
      <Box display="flex">
        <Box
          sx={{
            width: 240,
            minHeight: '100vh',
            bgcolor: '#f5f5f5',
            borderRight: '1px solid #ddd',
            p: 2,
            boxShadow: 1
          }}
        >
          <List sx={{pt: 0}}>
            {/* Example ListSubheader for grouping */}
            {/* <ListSubheader sx={{fontWeight: 'bold', bgcolor: 'inherit'}}> {t('committee.sidebar.sectionMain')} </ListSubheader> */}
            {menuItems.map(item => (
              <ListItem
                button
                key={item.path}
                component={NavLink}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  px: 2,
                  py: 1.2,
                  transition: 'background 0.2s',
                  '&.active, &[aria-current="page"]': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'white',
                  }
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1} p={3}>
          <Outlet />
        </Box>
      </Box>
    </CommitteeSection>
  );
};

export default CommitteeLayout;
