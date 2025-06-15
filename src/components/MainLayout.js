import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Avatar,
  Drawer,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ForumIcon from '@mui/icons-material/Forum';
import MapIcon from '@mui/icons-material/Map';
import BuildIcon from '@mui/icons-material/Build';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportIcon from '@mui/icons-material/Support';
import LinkIcon from '@mui/icons-material/Link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CorporateFareIcon from '@mui/icons-material/CorporateFare'; // Used for organization tile


const MainLayout = ({ onLanguageChange }) => {
  console.log('Rendering MainLayout');
  const { t, i18n } = useTranslation();
  const [languageMenu, setLanguageMenu] = useState(null);
  const [notificationMenu, setNotificationMenu] = useState(null);
  const [userMenu, setUserMenu] = useState(null);
  const [settingsMenu, setSettingsMenu] = useState(null);

  const notifications = [
    { id: 1, text: 'New project update available' },
    { id: 2, text: 'Team meeting in 30 minutes' }
  ];

  const handleLanguageSelect = (lang) => {
    try {
      // Notify parent component
      if (onLanguageChange) {
        onLanguageChange(lang);
      }
      
      // Close menu
      setLanguageMenu(null);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  
const executionMenu = [
    {
      id: 'setup',
      label: t('execution.menu.setup'),
      icon: <GroupWorkIcon />, route: '/execution/setup'
    },
    {
      id: 'communication',
      label: t('execution.menu.communication'),
      icon: <ForumIcon />, route: '/execution/communication'
    },
    {
      id: 'roadmap',
      label: t('execution.menu.roadmap'),
      icon: <MapIcon />, route: '/execution/roadmap'
    },
    {
      id: 'resources',
      label: t('execution.menu.resources'),
      icon: <BuildIcon />, route: '/execution/resources'
    },
    {
      id: 'feedback',
      label: t('execution.menu.feedback'),
      icon: <FeedbackIcon />, route: '/execution/feedback'
    },
    {
      id: 'projects',
      label: t('execution.menu.projects'),
      icon: <AssignmentIcon />, route: '/execution/projects'
    },
    {
      id: 'support',
      label: t('execution.menu.support'),
      icon: <SupportIcon />, route: '/execution/support'
    },
    {
      id: 'alignment',
      label: t('execution.menu.alignment'),
      icon: <LinkIcon />, route: '/execution/alignment'
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const isExecutionRoute = location.pathname.startsWith('/execution/');
  const selectedExecutionRoute = executionMenu.find(item => location.pathname === item.route)?.route;
  const isOrgPermissionsRoute = location.pathname === '/organization-permissions';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img
                src="/logo.png"
                alt="Strategic Planning Logo"
                style={{
                  height: '40px',
                  marginRight: '32px',
                }}
              />
              <Typography variant="h6" component="div">
                {t('appTitle')}
              </Typography>
              {/* Organization & Permissions tile */}
              <IconButton color={isOrgPermissionsRoute ? 'primary' : 'inherit'} onClick={() => navigate('/organization-permissions')} sx={{ ml: 2 }}>
                <CorporateFareIcon />
                <span style={{ marginLeft: 8 }}>{t('organizationPermissions.title')}</span>
              </IconButton>
            </Box>

            <IconButton color="inherit" onClick={(e) => setNotificationMenu(e.currentTarget)}>
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={(e) => setLanguageMenu(e.currentTarget)}>
              <LanguageIcon />
            </IconButton>

            <IconButton color="inherit" onClick={(e) => setSettingsMenu(e.currentTarget)}>
              <SettingsIcon />
            </IconButton>

            <IconButton color="inherit" onClick={(e) => setUserMenu(e.currentTarget)}>
              <Avatar sx={{ width: 32, height: 32 }}>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Menus & Content */}
        <Menu
          anchorEl={languageMenu}
          open={Boolean(languageMenu)}
          onClose={() => setLanguageMenu(null)}
        >
          <MenuItem onClick={() => {
            onLanguageChange('en');
            setLanguageMenu(null);
          }}>
            English
          </MenuItem>
          <MenuItem onClick={() => {
            onLanguageChange('ar');
            setLanguageMenu(null);
          }}>
            عربي
          </MenuItem>
        </Menu>

        <Menu
          anchorEl={notificationMenu}
          open={Boolean(notificationMenu)}
          onClose={() => setNotificationMenu(null)}
        >
          {notifications.map(notification => (
            <MenuItem key={notification.id} onClick={() => setNotificationMenu(null)}>
              {notification.text}
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={settingsMenu}
          open={Boolean(settingsMenu)}
          onClose={() => setSettingsMenu(null)}
        >
          <MenuItem onClick={() => setSettingsMenu(null)}>General Settings</MenuItem>
          <MenuItem onClick={() => setSettingsMenu(null)}>Appearance</MenuItem>
          <MenuItem onClick={() => setSettingsMenu(null)}>Notifications</MenuItem>
        </Menu>

        <Menu
          anchorEl={userMenu}
          open={Boolean(userMenu)}
          onClose={() => setUserMenu(null)}
        >
          <MenuItem onClick={() => setUserMenu(null)}>Profile</MenuItem>
          <MenuItem onClick={() => setUserMenu(null)}>My Account</MenuItem>
          <MenuItem onClick={() => setUserMenu(null)}>Sign Out</MenuItem>
        </Menu>

        <Box sx={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
