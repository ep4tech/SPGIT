import React from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const executionMenu = [
  { label: 'execution.menu.documents', path: '/execution/documents' },
  { label: 'execution.menu.structure', path: '/execution/structure' },
  { label: 'execution.menu.tasks', path: '/execution/tasks' },
  { label: 'execution.menu.communication', path: '/execution/communication' },
  { label: 'execution.menu.resources', path: '/execution/resources' },
  { label: 'execution.menu.feedback', path: '/execution/feedback' },
  { label: 'execution.menu.change', path: '/execution/change' }
];

const ExecutionMenu = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <List>
      {executionMenu.map((item) => (
        <ListItem
          button
          key={item.path}
          component={Link}
          to={item.path}
          selected={location.pathname === item.path}
        >
          <ListItemText primary={t(item.label)} />
        </ListItem>
      ))}
    </List>
  );
};

export default ExecutionMenu;
