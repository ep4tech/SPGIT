import React, { useState, useEffect } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
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
import InitialView from '../../pages/strategyFormulation/InitialView';
import VisionChallenges from '../../pages/strategyFormulation/VisionChallenges';
import StrategicIssues from '../../pages/strategyFormulation/StrategicIssues';
import GoalsObjectives from '../../pages/strategyFormulation/GoalsObjectives';
import ObjectivesProjects from '../../pages/strategyFormulation/ObjectivesProjects';
import Coordination from '../../pages/strategyFormulation/Coordination';
import ExecutivePlans from '../../pages/strategyFormulation/ExecutivePlans';

const drawerWidth = 280;

const menuItems = [
  { id: 'initialView', icon: <InitialViewIcon />, label: 'Initial View and Strategic Directions', description: 'Overview and entry point for strategic formulation.' },
  { id: 'visionChallenges', icon: <VisionIcon />, label: 'Vision and Challenges', description: 'Define the vision and identify key challenges.' },
  { id: 'strategicIssues', icon: <IssuesIcon />, label: 'Strategic Issues', description: 'List and analyze strategic issues.' },
  { id: 'goalsObjectives', icon: <GoalsIcon />, label: 'Goals and Objectives', description: 'Set goals and measurable objectives.' },
  { id: 'objectivesProjects', icon: <ProjectsIcon />, label: 'Objectives Deployment and Projects', description: 'Map objectives to actionable projects.' },
  { id: 'coordination', icon: <CoordinationIcon />, label: 'Coordination', description: 'Plan internal and external coordination.' },
  { id: 'executivePlans', icon: <PlansIcon />, label: 'Executive Plans', description: 'Develop executive plans and action steps.' },
];

const StrategyFormulation = () => {
  console.log('======>> We ae in components/StrategyFormulation/index.js');
  const { t, i18n } = useTranslation();
  const [, forceUpdate] = useState({});  // Add state to force re-render

  // Re-render when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      console.log('Language changed in StrategyFormulation');
      console.log('Current language:', i18n.language);
      console.log('Title translation:', i18n.t('strategyFormulation.pageTitle'));
      forceUpdate({});
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  // Log translations on mount
  useEffect(() => {
    console.log('StrategyFormulation mounted');
    console.log('Current translations:', {
      title: t('strategyFormulation.pageTitle'),
      ar: i18n.t('strategyFormulation.pageTitle', { lng: 'ar' })
    });
  }, []);
  const [selectedPage, setSelectedPage] = useState(localStorage.getItem('strategyFormulationPage') || 'initialView');

  // Save selected page to localStorage
  const handlePageSelect = (pageId) => {
    setSelectedPage(pageId);
    localStorage.setItem('strategyFormulationPage', pageId);
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const getMenuTitle = (id) => {
    return t(`strategyFormulation.menu.${id}`);
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
    <>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            {t('strategyFormulation.pageTitle')}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {t('strategyFormulation.pageDescription')}
          </Typography>
        </Box>
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
                  onClick={() => handlePageSelect(item.id)}
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
                  <ListItemText primary={t(`strategyFormulation.menu.${item.id}`)} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>{renderPage()}</Box>
        </Box>
      </Box>
    </>
  )
};
export default StrategyFormulation;