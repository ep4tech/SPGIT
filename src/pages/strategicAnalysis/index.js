import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Tab, Box, Paper, Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import StrategicFoundation from './StrategicFoundation';
import ExternalEnvironment from './ExternalEnvironment';
import InternalEnvironment from './InternalEnvironment';
import DataAnalysis from './DataAnalysis';
import MandatesResponsibilities from './MandatesResponsibilities';
import MissionStatement from './MissionStatement';

const tabConfig = [
  { menuKey: 'foundation', component: <StrategicFoundation /> },
  { menuKey: 'external', component: <ExternalEnvironment /> },
  { menuKey: 'internal', component: <InternalEnvironment /> },
  { menuKey: 'analysis', component: <DataAnalysis /> },
  { menuKey: 'mandates', component: <MandatesResponsibilities /> },
  { menuKey: 'mission', component: <MissionStatement /> },
];

console.log('StrategicAnalysis component loaded');
const StrategicAnalysis = () => {
  console.log('======>> We ae in pages/strategicAnalysis/index.js');
  const { t } = useTranslation();
  const [tab, setTab] = React.useState(0);

  return (
    <Box sx={{ display: 'flex', minHeight: '80vh', mt: 4, justifyContent: 'center' }}>
      {/* Sidebar Drawer for Strategic Analysis Sections */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: 'border-box',
            background: '#f5f5f5',
            mt: 8,
          },
        }}
        anchor="left"
      >
        <Toolbar />
        <List>
          {tabConfig.map((tabItem, idx) => (
            <ListItem button key={tabItem.menuKey} selected={tab === idx} onClick={() => setTab(idx)}>
              <ListItemText primary={t(`strategicAnalysis.menu.${tabItem.menuKey}`)} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Main Content Area */}
      <Paper sx={{ p: 3, maxWidth: 900, flex: 1, ml: '260px' }}>
        <Box>
          {tabConfig[tab].component}
        </Box>
      </Paper>
    </Box>
  );
};

export default StrategicAnalysis;
