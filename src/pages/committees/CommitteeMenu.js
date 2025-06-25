import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DescriptionIcon from '@mui/icons-material/Description';
import TaskIcon from '@mui/icons-material/Task';

export const drawerWidth = 220;

const { t } = useTranslation();
const menuItems = [
  { path: '/committees/dashboard', label: t('committees.menu.dashboard'), icon: <DashboardIcon /> },
  { path: '/committees/management', label: t('committees.menu.management'), icon: <GroupIcon /> },
  { path: '/committees/roles', label: t('committees.menu.roles'), icon: <AssignmentIndIcon /> },
  { path: '/committees/meetings', label: t('committees.menu.meetings'), icon: <EventNoteIcon /> },
  { path: '/committees/meeting-docs', label: t('committees.menu.meetingDocs'), icon: <DescriptionIcon /> },
  { path: '/committees/tasks', label: t('committees.menu.tasks'), icon: <TaskIcon /> },
];

const CommitteeMenu = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const anchor = isArabic ? 'right' : 'left';
  return (
    <Drawer
      variant="permanent"
      anchor={anchor}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          direction: isArabic ? 'rtl' : 'ltr',
          top: 0,
        },
      }}
    >
      <Toolbar />
      <Box sx={{ mt: 2 }}>
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.path}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                background: location.pathname === item.path ? '#e3f2fd' : 'transparent',
                borderRadius: 2,
                mb: 1,
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ textAlign: 'right' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default CommitteeMenu;
