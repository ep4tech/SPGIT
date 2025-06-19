import React, { useState } from 'react';
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
  ExploreOutlined as FoundationIcon,
  AssignmentOutlined as MandatesIcon,
  DescriptionOutlined as MissionIcon,
  PublicOutlined as ExternalIcon,
  BusinessOutlined as InternalIcon,
  AssessmentOutlined as AnalysisIcon,
  ArrowBack as ArrowBackIcon,
  BusinessOutlined
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import StrategicFoundation from '../../pages/strategicAnalysis/StrategicFoundation';
import MandatesResponsibilities from '../../pages/strategicAnalysis/MandatesResponsibilities';
import MissionStatement from '../../pages/strategicAnalysis/MissionStatement';
import ExternalEnvironment from '../../pages/strategicAnalysis/ExternalEnvironment';
import InternalEnvironment from '../../pages/strategicAnalysis/InternalEnvironment';
import DataAnalysis from '../../pages/strategicAnalysis/DataAnalysis';
import OrgReengineering from '../../pages/strategicAnalysis/OrgReengineering';

const drawerWidth = 280;

const menuItems = [
  { id: 'foundation', icon: <FoundationIcon /> },
  { id: 'mandates', icon: <MandatesIcon /> },
  { id: 'mission', icon: <MissionIcon /> },
  { id: 'external', icon: <ExternalIcon /> },
  { id: 'internal', icon: <InternalIcon /> },
  { id: 'analysis', icon: <AnalysisIcon /> },
  { id: 'reengineering', icon: <BusinessOutlined /> },
];

const StrategicAnalysis = () => {
  console.log('======>> We ae in components/StrategicAnalysis/index.js');
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState(localStorage.getItem('strategicAnalysisPage') || 'foundation');

  // Save selected page to localStorage
  const handlePageSelect = (pageId) => {
    setSelectedPage(pageId);
    localStorage.setItem('strategicAnalysisPage', pageId);
  };

  const handleBack = () => {
    // Go back to the main dashboard
    window.location.href = '/';
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'foundation':
        return <StrategicFoundation />;
      case 'mandates':
        return <MandatesResponsibilities />;
      case 'mission':
        return <MissionStatement />;
      case 'external':
        return <ExternalEnvironment />;
      case 'internal':
        return <InternalEnvironment />;
      case 'analysis':
        return <DataAnalysis />;
      case 'reengineering':
        return <OrgReengineering />;
      default:
        return <StrategicFoundation />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h4" gutterBottom>
          {t('strategicAnalysis.title')}
        </Typography>
        <Typography variant="subtitle1">
          {t('strategicAnalysis.description')}
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
                <ListItemText
                  primary={t(`strategicAnalysis.menu.${item.id}`)}
                  secondary={t(`strategicAnalysis.menu.${item.id}Desc`)}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    fontWeight: selectedPage === item.id ? 'bold' : 'normal',
                  }}
                  secondaryTypographyProps={{
                    variant: 'body2',
                    noWrap: true,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: 'background.default',
            minHeight: '100vh',
          }}
        >
          {renderPage()}
        </Box>
      </Box>
    </Box>
  );
};

export default StrategicAnalysis;
