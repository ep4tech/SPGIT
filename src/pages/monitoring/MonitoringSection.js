import React from 'react';
import { Outlet, useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import MonitoringSetupPage from './MonitoringSetupPage';
import MonitoringCommunicationPage from './MonitoringCommunicationPage';
import MonitoringRoadmapPage from './MonitoringRoadmapPage';
import MonitoringResourcesPage from './MonitoringResourcesPage';
import MonitoringFeedbackPage from './MonitoringFeedbackPage';
import MonitoringProjectsPage from './MonitoringProjectsPage';
import MonitoringSupportPage from './MonitoringSupportPage';
import MonitoringAlignmentPage from './MonitoringAlignmentPage';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar } from '@mui/material';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ForumIcon from '@mui/icons-material/Forum';
import MapIcon from '@mui/icons-material/Map';
import BuildIcon from '@mui/icons-material/Build';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportIcon from '@mui/icons-material/Support';
import LinkIcon from '@mui/icons-material/Link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTranslation } from 'react-i18next';

const MonitoringSection = () => {
  console.log('======>> We ae in pages/monitoring/MonitoringSection.js');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const monitoringMenu = [
    { id: 'alignment', label: t('monitoring.menu.alignment'), icon: <LinkIcon />, route: '/monitoring/alignment' },
    { id: 'communication', label: t('monitoring.menu.communication'), icon: <ForumIcon />, route: '/monitoring/communication' },
    { id: 'roadmap', label: t('monitoring.menu.roadmap'), icon: <MapIcon />, route: '/monitoring/roadmap' },
    { id: 'resources', label: t('monitoring.menu.resources'), icon: <BuildIcon />, route: '/monitoring/resources' },
    { id: 'feedback', label: t('monitoring.menu.feedback'), icon: <FeedbackIcon />, route: '/monitoring/feedback' },
    { id: 'projects', label: t('monitoring.menu.projects'), icon: <AssignmentIcon />, route: '/monitoring/projects' },
    { id: 'support', label: t('monitoring.menu.support'), icon: <SupportIcon />, route: '/monitoring/support' },
    { id: 'setup', label: t('monitoring.menu.setup'), icon: <GroupWorkIcon />, route: '/monitoring/setup' },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100%', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box
        sx={{
          width: 260,
          bgcolor: 'background.paper',
          borderRight: 1,
          borderColor: 'divider',
          py: 2,
        }}
      >
        <Toolbar />
        <List>
          <ListItem>
            <ListItemIcon><PlayArrowIcon color="primary" /></ListItemIcon>
            <ListItemText primary={t('monitoring.menu.mainTitle')} primaryTypographyProps={{ fontWeight: 'bold' }} />
          </ListItem>
          <Divider sx={{ mb: 1 }} />
          {monitoringMenu.map((item) => (
            <ListItem
              button
              key={item.id}
              selected={location.pathname === item.route}
              onClick={() => navigate(item.route)}
              sx={{
                bgcolor: location.pathname === item.route ? 'primary.light' : 'inherit',
                color: location.pathname === item.route ? 'primary.contrastText' : 'inherit',
                borderRadius: 1,
                mb: 0.5,
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ flex: 1, p: 0, overflow: 'auto' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MonitoringSection;
