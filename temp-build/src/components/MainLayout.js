import React, { useState } from 'react';
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
  Avatar
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MainLayout = ({ children, onLanguageChange }) => {
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
    i18n.changeLanguage(lang);
    setLanguageMenu(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('appTitle')}
          </Typography>

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
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
