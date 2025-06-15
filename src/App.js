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
import StrategicAnalysis from './components/StrategicAnalysis';
import StrategyFormulation from './components/StrategyFormulation';
// All page-level components for strategic analysis and strategy formulation are now imported in their containers from src/pages/strategy/strategicAnalysis/ and src/pages/strategy/strategyFormulation/ respectively.
import DashboardPage from './pages/dashboard/DashboardPage';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ExecutionSetupPage from './pages/execution/ExecutionSetupPage';
import ExecutionCommunicationPage from './pages/execution/ExecutionCommunicationPage';
import ExecutionRoadmapPage from './pages/execution/ExecutionRoadmapPage';
import ExecutionResourcesPage from './pages/execution/ExecutionResourcesPage';
import ExecutionFeedbackPage from './pages/execution/ExecutionFeedbackPage';
import ExecutionProjectsPage from './pages/execution/ExecutionProjectsPage';
import ExecutionSupportPage from './pages/execution/ExecutionSupportPage';
import ExecutionAlignmentPage from './pages/execution/ExecutionAlignmentPage';
import ExecutionSection from './pages/execution/ExecutionSection';
// Committee and training page imports removed, as these are now routed via their respective containers/pages.
// If you need to add direct routes for individual committee/training pages, import them from src/pages/committee/ or src/pages/training/.
import CommitteeLayout from './components/CommitteeLayout';
import CommitteesDashboard from './components/CommitteesDashboard';
import CommitteeListPage from './pages/committee/CommitteeListPage';
import CommitteeDetailsRoutes from './pages/committee/CommitteeDetailsRoutes';
import OrganizationPermissionsPage from './pages/organization/OrganizationPermissionsPage';
import DashboardGrid from './components/DashboardGrid';

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
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  // DEBUG LOGS FOR TRANSLATION ISSUE
  console.log('Current language:', i18n.language);
  console.log('AR internal object:', i18n.getResourceBundle('ar', 'translation').internal);
  console.log('internal.title:', t('internal.title'));
  console.log('internal.description:', t('internal.description'));
  console.log('execution.title:', t('execution.title'));
  console.log('All tile titles:', [
    t('basicInfo.title'),
    t('strategicAnalysis.title'),
    t('strategyFormulation.title'),
    t('training.title'),
    t('execution.title'),
    t('evaluation.title'),
    t('committee.title')
  ]);


  const [currentSection, setCurrentSection] = useState(null);
  const [projects, setProjects] = useState([
    { id: 'default', name: 'Default Project' }
  ]);
  const [selectedProjectId, setSelectedProjectId] = useState('default');
  const [basicInfo, setBasicInfo] = useState({
    default: {}
  });

  // Load projects from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    const savedSelectedId = localStorage.getItem('selectedProjectId');
    const savedBasicInfo = localStorage.getItem('basicInfo');

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    if (savedSelectedId) {
      setSelectedProjectId(savedSelectedId);
    }
    if (savedBasicInfo) {
      setBasicInfo(JSON.parse(savedBasicInfo));
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('selectedProjectId', selectedProjectId);
    localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
  }, [projects, selectedProjectId, basicInfo]);


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
        {/* Execution Pages */}
        <Route path="/execution/setup" element={<MainLayout onLanguageChange={handleLanguageChange}><ExecutionSetupPage /></MainLayout>} />
        <Route path="/execution/communication" element={<MainLayout onLanguageChange={handleLanguageChange}><ExecutionCommunicationPage /></MainLayout>} />
        <Route path="/execution/roadmap" element={<MainLayout onLanguageChange={handleLanguageChange}><ExecutionRoadmapPage /></MainLayout>} />
        <Route path="/execution/resources" element={<MainLayout onLanguageChange={handleLanguageChange}><ExecutionResourcesPage /></MainLayout>} />
        <Route path="/execution/feedback" element={<MainLayout onLanguageChange={handleLanguageChange}><ExecutionFeedbackPage /></MainLayout>} />
        <Route path="/execution/projects" element={<MainLayout onLanguageChange={handleLanguageChange}><ExecutionProjectsPage /></MainLayout>} />
        <Route path="/execution/support" element={<MainLayout onLanguageChange={handleLanguageChange}><ExecutionSupportPage /></MainLayout>} />
        <Route path="/execution/alignment" element={<MainLayout onLanguageChange={handleLanguageChange}><ExecutionAlignmentPage /></MainLayout>} />

        {/* Committee Section Routes */}
        <Route path="/committee" element={<MainLayout onLanguageChange={handleLanguageChange}><CommitteeLayout /></MainLayout>}>
          <Route index element={<Navigate to="all" replace />} />
          <Route path="all" element={<CommitteeListPage />} />
          <Route path="all/:committeeId/*" element={<CommitteeDetailsRoutes />} />
          <Route path="upcoming-meetings" element={<UpcomingMeetingsPage />} />
          <Route path="action-items" element={<ActionItemsPage />} />
          <Route path="attendance-overview" element={<AttendanceOverviewPage />} />
          <Route path="documents-repository" element={<DocumentsRepositoryPage />} />
        </Route>

        {/* Organization & Permissions Route */}
        <Route path="/organization-permissions" element={<MainLayout onLanguageChange={handleLanguageChange}><OrganizationPermissionsPage /></MainLayout>} />

        {/* Main Dashboard Route (cleaned up) */}
        <Route path="/" element={
          <MainLayout onLanguageChange={handleLanguageChange}>
            <ProjectSelector
              projects={projects}
              selectedProjectId={selectedProjectId}
              onProjectChange={setSelectedProjectId}
            />
            <DashboardPage selectedProjectId={selectedProjectId} />
          </MainLayout>
        } />

        <Route path="/training/*" element={<TrainingSection />} />
        <Route path="/execution/*" element={<ExecutionSection />} />
        <Route path="/evaluation" element={<MainLayout onLanguageChange={handleLanguageChange}><div>Evaluation Section</div></MainLayout>} />
        <Route path="/basic-info" element={<MainLayout onLanguageChange={handleLanguageChange}><div>Basic Info Section</div></MainLayout>} />
        <Route path="/organization-permissions" element={<MainLayout onLanguageChange={handleLanguageChange}><OrganizationPermissionsPage /></MainLayout>} />
        <Route path="/strategy" element={<MainLayout onLanguageChange={handleLanguageChange}><StrategicAnalysis /></MainLayout>} />
        <Route path="/strategy-formulation" element={<MainLayout onLanguageChange={handleLanguageChange}><StrategyFormulation /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );  
}
export default App;