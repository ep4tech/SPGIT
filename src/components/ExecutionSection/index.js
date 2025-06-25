import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ChatIcon from '@mui/icons-material/Chat';

import DocumentsPage from '../../pages/execution/DocumentsPage';
import StructurePage from '../../pages/execution/StructurePage';
import TasksPage from '../../pages/execution/TasksPage';
import CommunicationPage from '../../pages/execution/CommunicationPage';
import ResourcesPage from '../../pages/execution/ResourcesPage';
import FeedbackPage from '../../pages/execution/FeedbackPage';
import ChangePage from '../../pages/execution/ChangePage';

const drawerWidth = 280;

const menuItems = [
  { id: 'documents', icon: <FolderIcon /> },
  { id: 'structure', icon: <AssignmentIcon /> },
  { id: 'tasks', icon: <AssignmentIcon /> },
  { id: 'communication', icon: <ChatIcon /> },
  { id: 'resources', icon: <PeopleIcon /> },
  { id: 'feedback', icon: <FeedbackIcon /> },
  { id: 'change', icon: <ChangeCircleIcon /> },
];

const ExecutionSection = () => {
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState(
    localStorage.getItem('executionSectionPage') || 'documents'
  );

  const handlePageSelect = (pageId) => {
    setSelectedPage(pageId);
    localStorage.setItem('executionSectionPage', pageId);
  };

  // Render the selected page/component
  const renderPage = () => {
    switch (selectedPage) {
      case 'documents':
        return <DocumentsPage />;
      case 'structure':
        return <StructurePage />;
      case 'tasks':
        return <TasksPage />;
      case 'communication':
        return <CommunicationPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'feedback':
        return <FeedbackPage />;
      case 'change':
        return <ChangePage />;
      default:
        return null;
    }
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
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
              <ListItemText primary={t(`execution.menu.${item.id}`)} />
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

export default ExecutionSection;
