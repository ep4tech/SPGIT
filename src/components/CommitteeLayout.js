import React from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
  // AppBar removed
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EventIcon from '@mui/icons-material/Event';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';

const drawerWidth = 280;

const CommitteeLayout = () => {
  const { t, i18n } = useTranslation(); // Added i18n
  const location = useLocation();

  const menuItems = [
    {
      textKey: 'committee.menu.allCommittees',
      path: '/committee/all',
      icon: <DashboardIcon />,
    },
    {
      textKey: 'committee.menu.upcomingMeetings',
      path: '/committee/upcoming-meetings',
      icon: <EventIcon />,
    },
    {
      textKey: 'committee.menu.actionItems',
      path: '/committee/action-items',
      icon: <TaskIcon />,
    },
    {
      textKey: 'committee.menu.attendanceOverview',
      path: '/committee/attendance-overview',
      icon: <PeopleIcon />,
    },
    {
      textKey: 'committee.menu.documentsRepository',
      path: '/committee/documents-repository',
      icon: <ArticleIcon />,
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {t('committee.menuMainTitle')}
        </Typography>
      </Toolbar>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={t(item.textKey)} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              selected={location.pathname.startsWith(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.textKey)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    // This Box will fill the content area provided by MainLayout
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}> 
      <CssBaseline />
      {/* AppBar removed, MainLayout provides it */}
      <Drawer
        variant="permanent"
        anchor={i18n.language === 'ar' ? 'right' : 'left'} // Respect RTL
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'relative', // Ensure it's part of the flow within this Box
            height: '100%',      // Take full height of the parent Box
            borderLeft: i18n.language === 'ar' ? `1px solid ${ (theme) => theme.palette.divider}` : 'none',
            borderRight: i18n.language !== 'ar' ? `1px solid ${ (theme) => theme.palette.divider}` : 'none',
          },
        }}
      >
        {drawer} {/* drawer content defined above with Toolbar and List */}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          overflow: 'auto', // Allow scrolling for committee content
          height: '100%'    // Take full height
        }}
      >
        {/* Toolbar offset removed as local AppBar is removed */}
        <Outlet /> {/* Child routes (e.g., CommitteesDashboard) will render here */}
      </Box>
    </Box>
  );
};

export default CommitteeLayout;
