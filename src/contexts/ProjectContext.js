import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    { id: 'default', name: 'Default Project' }
  ]);
  const [selectedProjectId, setSelectedProjectId] = useState('default');
  const [basicInfo, setBasicInfo] = useState({ default: {} });

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    const savedSelected = localStorage.getItem('selectedProjectId');
    if (savedSelected) {
      setSelectedProjectId(savedSelected);
    }
    const savedBasicInfo = localStorage.getItem('basicInfo');
    if (savedBasicInfo) {
      setBasicInfo(JSON.parse(savedBasicInfo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('selectedProjectId', selectedProjectId);
  }, [selectedProjectId]);

  useEffect(() => {
    localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
  }, [basicInfo]);

  const handleFormDataUpdate = (data) => {
    setBasicInfo(prev => ({
      ...prev,
      [selectedProjectId]: data
    }));
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      setProjects,
      selectedProjectId,
      setSelectedProjectId,
      basicInfo,
      setBasicInfo,
      handleFormDataUpdate
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
