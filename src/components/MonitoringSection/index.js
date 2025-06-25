import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssignmentIcon from '@mui/icons-material/Assignment';
import RoadmapIcon from '@mui/icons-material/AltRoute';
import ResourcesIcon from '@mui/icons-material/Inventory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AlignmentIcon from '@mui/icons-material/CompareArrows';
import CommunicationIcon from '@mui/icons-material/Chat';

import MonitoringSetupPage from '../../pages/monitoring/MonitoringSetupPage';
import MonitoringCommunicationPage from '../../pages/monitoring/MonitoringCommunicationPage';
import MonitoringRoadmapPage from '../../pages/monitoring/MonitoringRoadmapPage';
import MonitoringResourcesPage from '../../pages/monitoring/MonitoringResourcesPage';
import MonitoringFeedbackPage from '../../pages/monitoring/MonitoringFeedbackPage';
import MonitoringProjectsPage from '../../pages/monitoring/MonitoringProjectsPage';
import MonitoringSupportPage from '../../pages/monitoring/MonitoringSupportPage';
import MonitoringAlignmentPage from '../../pages/monitoring/MonitoringAlignmentPage';

const drawerWidth = 280;

const menuItems = [
  { id: 'setup', icon: <AssessmentIcon /> },
  { id: 'communication', icon: <CommunicationIcon /> },
  { id: 'roadmap', icon: <RoadmapIcon /> },
  { id: 'resources', icon: <ResourcesIcon /> },
  { id: 'feedback', icon: <FeedbackIcon /> },
  { id: 'projects', icon: <AssignmentIcon /> },
  { id: 'support', icon: <SupportAgentIcon /> },
  { id: 'alignment', icon: <AlignmentIcon /> },
];

const MonitoringSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const [selectedPage, setSelectedPage] = useState(
    localStorage.getItem('monitoringSectionPage') || 'setup'
  );

  const handlePageSelect = (pageId) => {
    setSelectedPage(pageId);
    localStorage.setItem('monitoringSectionPage', pageId);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'setup':
        return <MonitoringSetupPage />;
      case 'communication':
        return <MonitoringCommunicationPage />;
      case 'roadmap':
        return <MonitoringRoadmapPage />;
      case 'resources':
        return <MonitoringResourcesPage />;
      case 'feedback':
        return <MonitoringFeedbackPage />;
      case 'projects':
        return <MonitoringProjectsPage />;
      case 'support':
        return <MonitoringSupportPage />;
      case 'alignment':
        return <MonitoringAlignmentPage />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor={isRtl ? 'right' : 'left'}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.id}
              selected={selectedPage === item.id}
              onClick={() => handlePageSelect(item.id)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={t(`monitoring.menu.${item.id}`)} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {renderPage()}
      </Box>
    </Box>
  );
};

export default MonitoringSection;
