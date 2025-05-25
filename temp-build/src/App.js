import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProjectSelector from './components/ProjectSelector';
import MainLayout from './components/MainLayout';
import ProjectDataWizard from './components/ProjectDataWizard';
import StrategicAnalysis from './components/StrategicAnalysis';
import StrategyFormulation from './components/StrategyFormulation';

import FolderIcon from '@mui/icons-material/Folder';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import StrategyIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AssessmentIcon from '@mui/icons-material/Assessment';

function App() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [currentSection, setCurrentSection] = useState(null);
  const [projects, setProjects] = useState([
    { id: 'default', name: 'Default Project' }
  ]);
  const [selectedProjectId, setSelectedProjectId] = useState('default');
  const [projectData, setProjectData] = useState({
    default: {}
  });

  // Load projects from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    const savedSelectedId = localStorage.getItem('selectedProjectId');
    const savedProjectData = localStorage.getItem('projectData');

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    if (savedSelectedId) {
      setSelectedProjectId(savedSelectedId);
    }
    if (savedProjectData) {
      setProjectData(JSON.parse(savedProjectData));
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('selectedProjectId', selectedProjectId);
    localStorage.setItem('projectData', JSON.stringify(projectData));
  }, [projects, selectedProjectId, projectData]);

  const tiles = [
    { 
      id: 'projectData', 
      title: t('projectData'), 
      description: t('projectDataDesc'),
      icon: <FolderIcon fontSize="large" />
    },
    { 
      id: 'strategy', 
      title: t('strategicAnalysis.title'), 
      description: t('strategicAnalysisDesc'),
      icon: <AnalyticsIcon fontSize="large" />,
      disabled: !selectedProjectId
    },
    { 
      id: 'strategyFormulation', 
      title: t('strategyFormulation'), 
      description: t('strategyFormulationDesc'),
      icon: <StrategyIcon fontSize="large" />
    },
    { 
      id: 'training', 
      title: t('training'), 
      description: t('trainingDesc'),
      icon: <SchoolIcon fontSize="large" />
    },
    { 
      id: 'execution', 
      title: t('execution'), 
      description: t('executionDesc'),
      icon: <PlayArrowIcon fontSize="large" />
    },
    { 
      id: 'evaluation', 
      title: t('evaluation'), 
      description: t('evaluationDesc'),
      icon: <AssessmentIcon fontSize="large" />
    }
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const handleWizardClose = () => {
    setCurrentSection(null);
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const handleProjectCreate = (name) => {
    const newProject = {
      id: Date.now().toString(),
      name,
    };
    setProjects([...projects, newProject]);
    setSelectedProjectId(newProject.id);
    setProjectData(prev => ({
      ...prev,
      [newProject.id]: {}
    }));
  };

  const handleProjectUpdate = (projectId, name) => {
    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, name } : p
    ));
    setProjectData(prev => ({
      ...prev,
      [projectId]: prev[projectId] || {}
    }));
  };

  const handleFormDataUpdate = (data) => {
    setProjectData(prev => ({
      ...prev,
      [selectedProjectId]: data
    }));
  };

  const handleTileClick = (tileId) => {
    setCurrentSection(tileId);
  };

  return (
    <>
      {currentSection === 'projectData' ? (
        <ProjectDataWizard 
          onClose={handleWizardClose} 
          projectId={selectedProjectId}
          initialData={projectData[selectedProjectId]}
          onDataUpdate={handleFormDataUpdate}
        />
      ) : (
        <MainLayout onLanguageChange={handleLanguageChange}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <ProjectSelector
              projects={projects}
              selectedProjectId={selectedProjectId}
              onSelect={handleProjectSelect}
              onCreate={handleProjectCreate}
              onUpdate={handleProjectUpdate}
            />
            <Box sx={{ flex: 1, p: 2 }}>
              {currentSection === 'strategy' ? (
                selectedProjectId ? <StrategicAnalysis /> : null
              ) : currentSection === 'strategyFormulation' ? (
                selectedProjectId ? <StrategyFormulation /> : null
              ) : (
                <Grid container spacing={3}>
                  {tiles.map((tile) => (
                    <Grid item xs={12} sm={6} md={4} key={tile.id}>
                      <Card 
                        sx={{ 
                          cursor: 'pointer',
                          opacity: !selectedProjectId && tile.id !== 'projectData' ? 0.5 : 1,
                          pointerEvents: !selectedProjectId && tile.id !== 'projectData' ? 'none' : 'auto',
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: tile.id === 'projectData' || selectedProjectId ? 'scale(1.02)' : 'none',
                          },
                        }} 
                        onClick={() => handleTileClick(tile.id)}
                      >
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', p: 3 }}>
                          <Box sx={{ mb: 2, color: 'primary.main' }}>
                            {tile.icon}
                          </Box>
                          <Typography variant="h5" component="div" align="center" gutterBottom>
                            {tile.title}
                          </Typography>
                          <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 1 }}>
                            {tile.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Box>
        </MainLayout>
      )}
    </>
  );
}

export default App;
