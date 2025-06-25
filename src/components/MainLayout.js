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
import CommitteeMenu, { drawerWidth as committeeDrawerWidth } from '../pages/committees/CommitteeMenu';


const MainLayout = (props) => {
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
        props.onLanguageChange(lang);
      }
      
      // Close menu
      setLanguageMenu(null);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  
const monitoringMenu = [
    {
      id: 'setup',
      label: t('monitoring.menu.setup'),
      icon: <GroupWorkIcon />, route: '/monitoring/setup'
    },
    {
      id: 'communication',
      label: t('monitoring.menu.communication'),
      icon: <ForumIcon />, route: '/monitoring/communication'
    },
    {
      id: 'roadmap',
      label: t('monitoring.menu.roadmap'),
      icon: <MapIcon />, route: '/monitoring/roadmap'
    },
    {
      id: 'resources',
      label: t('monitoring.menu.resources'),
      icon: <BuildIcon />, route: '/monitoring/resources'
    },
    {
      id: 'feedback',
      label: t('monitoring.menu.feedback'),
      icon: <FeedbackIcon />, route: '/monitoring/feedback'
    },
    {
      id: 'projects',
      label: t('monitoring.menu.projects'),
      icon: <AssignmentIcon />, route: '/monitoring/projects'
    },
    {
      id: 'support',
      label: t('monitoring.menu.support'),
      icon: <SupportIcon />, route: '/monitoring/support'
    },
    {
      id: 'alignment',
      label: t('monitoring.menu.alignment'),
      icon: <LinkIcon />, route: '/monitoring/alignment'
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const isMonitoringRoute = location.pathname.startsWith('/monitoring/');
  const selectedMonitoringRoute = monitoringMenu.find(item => location.pathname === item.route)?.route;
  const isOrgPermissionsRoute = location.pathname === '/organization-permissions';
  const isCommitteesRoute = location.pathname.startsWith('/committees');
  const isArabic = i18n.language === 'ar';

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>
        <CssBaseline />
        <AppBar position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img
                src="/logo.png"
                alt="Strategic Planning Logo"
                style={{ height: '40px', marginRight: '32px' }}
              />
              <Typography variant="h6" component="div">
                {t('appTitle')}
              </Typography>
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
        {isCommitteesRoute && <CommitteeMenu />}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginRight: isCommitteesRoute && isArabic ? `${committeeDrawerWidth}px` : 0,
            marginLeft: isCommitteesRoute && !isArabic ? `${committeeDrawerWidth}px` : 0,
            width: { sm: `calc(100% - ${isCommitteesRoute ? committeeDrawerWidth : 0}px)` },
          }}
        >
          <Toolbar />
          {/* Only render Menus and Outlet ONCE! */}
          <Menu
            anchorEl={languageMenu}
            open={Boolean(languageMenu)}
            onClose={() => setLanguageMenu(null)}
          >
            <MenuItem onClick={() => {
              props.onLanguageChange('en');
              setLanguageMenu(null);
            }}>
              English
            </MenuItem>
            <MenuItem onClick={() => {
              props.onLanguageChange('ar');
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
            {notifications.map(n => (
              <MenuItem key={n.id}>{n.text}</MenuItem>
            ))}
          </Menu>
          <Menu
            anchorEl={settingsMenu}
            open={Boolean(settingsMenu)}
            onClose={() => setSettingsMenu(null)}
          >
            <MenuItem>{t('settings.profile')}</MenuItem>
            <MenuItem>{t('settings.preferences')}</MenuItem>
          </Menu>
          <Menu
            anchorEl={userMenu}
            open={Boolean(userMenu)}
            onClose={() => setUserMenu(null)}
          >
            <MenuItem>{t('user.profile')}</MenuItem>
            <MenuItem>{t('user.logout')}</MenuItem>
          </Menu>
          <Outlet />
        </Box>
      </Box>
  </>  
  );
};

export default MainLayout;
