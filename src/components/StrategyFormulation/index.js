import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  LightbulbOutlined as InitialViewIcon,
  VisibilityOutlined as VisionIcon,
  ListAltOutlined as IssuesIcon,
  TrackChangesOutlined as GoalsIcon,
  AccountTreeOutlined as ProjectsIcon,
  SyncAltOutlined as CoordinationIcon,
  EventNoteOutlined as PlansIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import InitialView from './pages/InitialView';
import VisionChallenges from './pages/VisionChallenges';
import StrategicIssues from './pages/StrategicIssues';
import GoalsObjectives from './pages/GoalsObjectives';
import ObjectivesProjects from './pages/ObjectivesProjects';
import Coordination from './pages/Coordination';
import ExecutivePlans from './pages/ExecutivePlans';

const drawerWidth = 280;

const menuItems = [
  { id: 'initialView', icon: <InitialViewIcon /> },
  { id: 'visionChallenges', icon: <VisionIcon /> },
  { id: 'strategicIssues', icon: <IssuesIcon /> },
  { id: 'goalsObjectives', icon: <GoalsIcon /> },
  { id: 'objectivesProjects', icon: <ProjectsIcon /> },
  { id: 'coordination', icon: <CoordinationIcon /> },
  { id: 'executivePlans', icon: <PlansIcon /> },
];

const StrategyFormulation = () => {
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState('initialView');

  const handleBack = () => {
    window.location.href = '/';
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'initialView':
        return <InitialView />;
      case 'visionChallenges':
        return <VisionChallenges />;
      case 'strategicIssues':
        return <StrategicIssues />;
      case 'goalsObjectives':
        return <GoalsObjectives />;
      case 'objectivesProjects':
        return <ObjectivesProjects />;
      case 'coordination':
        return <Coordination />;
      case 'executivePlans':
        return <ExecutivePlans />;
      default:
        return <InitialView />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={{ mb: 2 }}
        >
          {t('back')}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              position: 'relative',
            },
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.id}
                selected={selectedPage === item.id}
                onClick={() => setSelectedPage(item.id)}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'primary.light',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                    },
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={t(`strategyFormulation.${item.id}.title`)} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>{renderPage()}</Box>
      </Box>
    </Box>
  );
};

export default StrategyFormulation;
