import React from 'react';
import { Outlet, useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import SetupExecutionPage from './SetupExecutionPage';
import CommunicationExecutionPage from './CommunicationExecutionPage';
import RoadmapExecutionPage from './RoadmapExecutionPage';
import ResourcesExecutionPage from './ResourcesExecutionPage';
import FeedbackExecutionPage from './FeedbackExecutionPage';
import ProjectsExecutionPage from './ProjectsExecutionPage';
import SupportExecutionPage from './SupportExecutionPage';
import AlignmentExecutionPage from './AlignmentExecutionPage';
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

const ExecutionSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const executionMenu = [
    { id: 'setup', label: t('execution.menu.setup'), icon: <GroupWorkIcon />, route: '/execution/setup' },
    { id: 'communication', label: t('execution.menu.communication'), icon: <ForumIcon />, route: '/execution/communication' },
    { id: 'roadmap', label: t('execution.menu.roadmap'), icon: <MapIcon />, route: '/execution/roadmap' },
    { id: 'resources', label: t('execution.menu.resources'), icon: <BuildIcon />, route: '/execution/resources' },
    { id: 'feedback', label: t('execution.menu.feedback'), icon: <FeedbackIcon />, route: '/execution/feedback' },
    { id: 'projects', label: t('execution.menu.projects'), icon: <AssignmentIcon />, route: '/execution/projects' },
    { id: 'support', label: t('execution.menu.support'), icon: <SupportIcon />, route: '/execution/support' },
    { id: 'alignment', label: t('execution.menu.alignment'), icon: <LinkIcon />, route: '/execution/alignment' },
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
            <ListItemText primary={t('execution.menu.mainTitle')} primaryTypographyProps={{ fontWeight: 'bold' }} />
          </ListItem>
          <Divider sx={{ mb: 1 }} />
          {executionMenu.map((item) => (
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
        <Routes>
          <Route path="setup" element={<SetupExecutionPage />} />
          <Route path="communication" element={<CommunicationExecutionPage />} />
          <Route path="roadmap" element={<RoadmapExecutionPage />} />
          <Route path="resources" element={<ResourcesExecutionPage />} />
          <Route path="feedback" element={<FeedbackExecutionPage />} />
          <Route path="projects" element={<ProjectsExecutionPage />} />
          <Route path="support" element={<SupportExecutionPage />} />
          <Route path="alignment" element={<AlignmentExecutionPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default ExecutionSection;
