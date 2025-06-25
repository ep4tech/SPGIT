import React, { useState, useEffect, useMemo } from 'react';
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
import StrategicAnalysis from './pages/strategicAnalysis';
import StrategyFormulation from './components/StrategyFormulation';
// All page-level components for strategic analysis and strategy formulation are now imported in their containers from src/pages/strategy/strategicAnalysis/ and src/pages/strategy/strategyFormulation/ respectively.
import {
  CommitteeManagementPage,
  MemberRolesPage,
  MeetingsPage,
  MeetingDocsPage,
  TasksPage
} from './pages/committees';
import CommitteeMenu from './pages/committees/CommitteeMenu';
import CommitteesDashboardPage from './pages/committees/DashboardPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MonitoringSetupPage from './pages/monitoring/MonitoringSetupPage';
import MonitoringCommunicationPage from './pages/monitoring/MonitoringCommunicationPage';
import MonitoringRoadmapPage from './pages/monitoring/MonitoringRoadmapPage';
import MonitoringResourcesPage from './pages/monitoring/MonitoringResourcesPage';
import MonitoringFeedbackPage from './pages/monitoring/MonitoringFeedbackPage';
import MonitoringProjectsPage from './pages/monitoring/MonitoringProjectsPage';
import MonitoringSupportPage from './pages/monitoring/MonitoringSupportPage';
import ExecutionSection from './components/ExecutionSection';
import DocumentsPage from './pages/execution/DocumentsPage';
import StructurePage from './pages/execution/StructurePage';

import CommunicationPage from './pages/execution/CommunicationPage';
import ResourcesPage from './pages/execution/ResourcesPage';
import FeedbackPage from './pages/execution/FeedbackPage';
import ChangePage from './pages/execution/ChangePage';
import MonitoringAlignmentPage from './pages/monitoring/MonitoringAlignmentPage';
import MonitoringSection from './components/MonitoringSection';

// Committee and training page imports removed, as these are now routed via their respective containers/pages.
// If you need to add direct routes for individual committee/training pages, import them from src/pages/committee/ or src/pages/training/.

import TrainingSection from './pages/training';
import ReportsSection from './pages/reports';
import OrganizationSection from './components/OrganizationSection';
import DashboardGrid from './components/DashboardGrid';
import { ProjectProvider } from './contexts/ProjectContext';

// Deep merge utility for defaults
function getInitialProjectData(data) {
  return {
    basicInfo: {
      projectName: data?.basicInfo?.projectName || '',
      organizationName: data?.basicInfo?.organizationName || '',
      responsiblePerson: data?.basicInfo?.responsiblePerson || '',
      jobTitle: data?.basicInfo?.jobTitle || '',
      email: data?.basicInfo?.email || '',
      startDate: data?.basicInfo?.startDate || null
    },
    stakeholders: Array.isArray(data?.stakeholders) ? data.stakeholders : [],
    indicators: Array.isArray(data?.indicators) ? data.indicators : [],
    documents: {
      officialDecision: data?.documents?.officialDecision || null,
      commitmentMinutes: data?.documents?.commitmentMinutes || null,
      goalDocument: data?.documents?.goalDocument || null,
      scopeDocument: data?.documents?.scopeDocument || null,
      workPlan: data?.documents?.workPlan || null,
      financialPlan: data?.documents?.financialPlan || null,
      obstaclesAndSolutions: data?.documents?.obstaclesAndSolutions || null,
      benefitsAnalysis: data?.documents?.benefitsAnalysis || null,
      futureStudies: data?.documents?.futureStudies || null,
      leadershipParticipation: data?.documents?.leadershipParticipation || null,
      externalCoordination: data?.documents?.externalCoordination || null
    },
    planningTeam: {
      internalTeam: data?.planningTeam?.internalTeam || [],
      externalTeam: data?.planningTeam?.externalTeam || [],
      committees: data?.planningTeam?.committees || []
    },
    evaluation: {
      kpis: data?.evaluation?.kpis || [],
      risks: data?.evaluation?.risks || [],
      notes: data?.evaluation?.notes || ''
    },
    trainingContent: {
      trainings: data?.trainingContent?.trainings || []
    }
  };
}

function App() {
  // Project state and handlers are now managed in ProjectContext.js
  console.log('Rendering App')
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [currentSection, setCurrentSection] = useState(null);
  const handleLanguageChange = (lang) => {
    try {
      // Change language
      i18n.changeLanguage(lang);

      // Update document direction
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;

      // Save to localStorage
      localStorage.setItem('i18nextLng', lang);

      // Force re-render
      setCurrentSection(prev => prev);
    } catch (error) {
      console.error('Error changing language:', error);
    }
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
    setBasicInfo(prev => ({
      ...prev,
      [newProject.id]: {}
    }));
  };

  const handleProjectUpdate = (projectId, name) => {
    setProjects(projects.map(p =>
      p.id === projectId ? { ...p, name } : p
    ));
    setBasicInfo(prev => ({
      ...prev,
      [projectId]: prev[projectId] || {}
    }));
  };

  const handleFormDataUpdate = (data) => {
    setBasicInfo(prev => ({
      ...prev,
      [selectedProjectId]: data
    }));
  };

  const handleTileClick = (tileId) => {
    setCurrentSection(tileId);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Execution Section Route */}
        <Route path="/execution" element={<ExecutionSection />} />
        {/* Monitoring Pages handled by MonitoringSection with nested routes */}
        <Route path="/monitoring" element={<MonitoringSection />} />
        {/* Organization Section Routes */}
        <Route path="/organization" element={<MainLayout onLanguageChange={handleLanguageChange}/>}> 
          <Route index element={<OrganizationSection />} />
        </Route>
        {/* Redirect old /committee route to new /committees/dashboard */}
        <Route path="/committee" element={<Navigate to="/committees/dashboard" replace />} />
        {/* Committees Section Routes (new system) */}
        <Route path="/committees" element={<MainLayout onLanguageChange={handleLanguageChange}/>}> 
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<><CommitteeMenu /><CommitteesDashboardPage /></>} />
          <Route path="management" element={<><CommitteeMenu /><CommitteeManagementPage /></>} />
          <Route path="roles" element={<><CommitteeMenu /><MemberRolesPage /></>} />
          <Route path="meetings" element={<><CommitteeMenu /><MeetingsPage /></>} />
          <Route path="meeting-docs" element={<><CommitteeMenu /><MeetingDocsPage /></>} />
          <Route path="tasks" element={<><CommitteeMenu /><TasksPage /></>} />
        </Route>
         {/* Organization & Permissions Route */}
        
        {/* Main Dashboard Route (cleaned up) */}
        <Route path="/" element={<MainLayout onLanguageChange={handleLanguageChange} />}> 
          <Route index element={
            <>
              <ProjectSelector />
              <DashboardPage />
            </>
          } />
        </Route>

        <Route path="/training/*" element={<TrainingSection />} />
        <Route path="/reports" element={<MainLayout onLanguageChange={handleLanguageChange}><ReportsSection /></MainLayout>} />
         
        <Route path="/evaluation" element={<MainLayout onLanguageChange={handleLanguageChange}><div>Evaluation Section</div></MainLayout>} />
        <Route path="/basic-info" element={<MainLayout onLanguageChange={handleLanguageChange} />}>
  <Route index element={<ProjectDataWizard />} />
</Route>
                <Route path="/strategy" element={<MainLayout onLanguageChange={handleLanguageChange} />}>
  <Route index element={<StrategicAnalysis />} />
</Route>
        <Route path="/strategy-formulation" element={<MainLayout onLanguageChange={handleLanguageChange} />}>
  <Route index element={<StrategyFormulation />} />
</Route>
      </Routes>
    </BrowserRouter>
  );  
}
export default function WrappedApp() {
  return (
    <ProjectProvider>
      <App />
    </ProjectProvider>
  );
}
// Note: WrappedApp is now the default export, wrapping App with ProjectProvider.