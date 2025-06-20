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
import SetupExecutionPage from './pages/execution/SetupExecutionPage';
import CommunicationExecutionPage from './pages/execution/CommunicationExecutionPage';
import RoadmapExecutionPage from './pages/execution/RoadmapExecutionPage';
import ResourcesExecutionPage from './pages/execution/ResourcesExecutionPage';
import FeedbackExecutionPage from './pages/execution/FeedbackExecutionPage';
import ProjectsExecutionPage from './pages/execution/ProjectsExecutionPage';
import SupportExecutionPage from './pages/execution/SupportExecutionPage';
import AlignmentExecutionPage from './pages/execution/AlignmentExecutionPage';
// Committee and training page imports removed, as these are now routed via their respective containers/pages.
// If you need to add direct routes for individual committee/training pages, import them from src/pages/committee/ or src/pages/training/.
import CommitteeLayout from './components/CommitteeLayout';
import CommitteesDashboard from './components/CommitteesDashboard';

import CommitteeDetailsRoutes from './pages/committee/CommitteeDetailsRoutes';
import AddCommitteePage from './pages/committee/AddCommitteePage';
import UpcomingMeetingsPage from './pages/committee/UpcomingMeetingsPage';
import ActionItemsPage from './pages/committee/ActionItemsPage';
import AttendanceOverviewPage from './pages/committee/AttendanceOverviewPage';
import DocumentsRepositoryPage from './pages/committee/DocumentsRepositoryPage';
import TrainingSection from './pages/training/TrainingSection';
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
  // --- Committees State and CRUD Handlers ---
  const [committees, setCommittees] = useState([
    {
      id: 1,
      name: 'Steering Committee',
      type: 'دائم',
      status: 'نشط',
      membersCount: 5,
      members: [
        { id: 1, name: 'Ali Saleh', role: 'Chair' },
        { id: 2, name: 'Sara Mansour', role: 'Member' }
      ],
      assignments: [
        { id: 1, title: 'Prepare Report', assignee: 'Ali Saleh' }
      ],
      meetings: [
        { id: 1, topic: 'Q2 Planning', date: '2025-07-01' }
      ],
      feedback: [
        { id: 1, author: 'Sara Mansour', comment: 'Great progress' }
      ],
      documents: [
        { id: 1, title: 'Charter', fileName: 'charter.pdf' }
      ]
    },
    {
      id: 2,
      name: 'Project Alpha Review',
      type: 'مؤقت',
      status: 'نشط',
      membersCount: 3,
      members: [],
      assignments: [],
      meetings: [],
      feedback: [],
      documents: []
    },
    {
      id: 3,
      name: 'Ethics Board',
      type: 'دائم',
      status: 'غير نشط',
      membersCount: 7,
      members: [],
      assignments: [],
      meetings: [],
      feedback: [],
      documents: []
    }
  ]);

  const addCommittee = (committee) => {
    setCommittees(prev => [
      ...prev,
      {
        ...committee,
        id: Date.now(),
        members: [],
        assignments: [],
        meetings: [],
        feedback: [],
        documents: [],
      }
    ]);
  };

  const editCommittee = (id, updatedCommittee) => {
    setCommittees(prev => prev.map(c => c.id === id ? { ...c, ...updatedCommittee } : c));
  };

  const deleteCommittee = (id) => {
    setCommittees(prev => prev.filter(c => c.id !== id));
  };

  // --- Members CRUD ---
  const addMember = (committeeId, member) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, members: [...c.members, { ...member, id: Date.now() }], membersCount: c.members.length + 1 }
        : c
    ));
  };
  const editMember = (committeeId, memberId, updatedMember) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, members: c.members.map(m => m.id === memberId ? { ...m, ...updatedMember } : m) }
        : c
    ));
  };
  const deleteMember = (committeeId, memberId) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, members: c.members.filter(m => m.id !== memberId), membersCount: Math.max(0, c.members.length - 1) }
        : c
    ));
  };

  // --- Assignments CRUD ---
  const addAssignment = (committeeId, assignment) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, assignments: [...c.assignments, { ...assignment, id: Date.now() }] }
        : c
    ));
  };
  const editAssignment = (committeeId, assignmentId, updatedAssignment) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, assignments: c.assignments.map(a => a.id === assignmentId ? { ...a, ...updatedAssignment } : a) }
        : c
    ));
  };
  const deleteAssignment = (committeeId, assignmentId) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, assignments: c.assignments.filter(a => a.id !== assignmentId) }
        : c
    ));
  };

  // --- Meetings CRUD ---
  const addMeeting = (committeeId, meeting) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, meetings: [...c.meetings, { ...meeting, id: Date.now() }] }
        : c
    ));
  };
  const editMeeting = (committeeId, meetingId, updatedMeeting) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, meetings: c.meetings.map(m => m.id === meetingId ? { ...m, ...updatedMeeting } : m) }
        : c
    ));
  };
  const deleteMeeting = (committeeId, meetingId) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, meetings: c.meetings.filter(m => m.id !== meetingId) }
        : c
    ));
  };

  // --- Feedback CRUD ---
  const addFeedback = (committeeId, feedback) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, feedback: [...c.feedback, { ...feedback, id: Date.now() }] }
        : c
    ));
  };
  const editFeedback = (committeeId, feedbackId, updatedFeedback) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, feedback: c.feedback.map(f => f.id === feedbackId ? { ...f, ...updatedFeedback } : f) }
        : c
    ));
  };
  const deleteFeedback = (committeeId, feedbackId) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, feedback: c.feedback.filter(f => f.id !== feedbackId) }
        : c
    ));
  };

  // --- Documents CRUD ---
  const addDocument = (committeeId, document) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, documents: [...c.documents, { ...document, id: Date.now() }] }
        : c
    ));
  };
  const editDocument = (committeeId, documentId, updatedDocument) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, documents: c.documents.map(d => d.id === documentId ? { ...d, ...updatedDocument } : d) }
        : c
    ));
  };
  const deleteDocument = (committeeId, documentId) => {
    setCommittees(prev => prev.map(c =>
      c.id === committeeId
        ? { ...c, documents: c.documents.filter(d => d.id !== documentId) }
        : c
    ));
  };


  console.log('Rendering App')
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

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
  console.log('======>> We ae in App.js');
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
        {/* Execution Pages handled by ExecutionSection with nested routes */}
        <Route path="/execution" element={<ExecutionSection />}>
          <Route path="setup" element={<SetupExecutionPage />} />
          <Route path="communication" element={<CommunicationExecutionPage />} />
          <Route path="roadmap" element={<RoadmapExecutionPage />} />
          <Route path="resources" element={<ResourcesExecutionPage />} />
          <Route path="feedback" element={<FeedbackExecutionPage />} />
          <Route path="projects" element={<ProjectsExecutionPage />} />
          <Route path="support" element={<SupportExecutionPage />} />
          <Route path="alignment" element={<AlignmentExecutionPage />} />
        </Route>

        {/* Committee Section Routes */}
        <Route path="/committee" element={<MainLayout onLanguageChange={handleLanguageChange}><CommitteeLayout /></MainLayout>}>
          <Route index element={<CommitteesDashboard committees={committees} addCommittee={addCommittee} editCommittee={editCommittee} deleteCommittee={deleteCommittee} />} />
          <Route path="all" element={<CommitteesDashboard committees={committees} addCommittee={addCommittee} editCommittee={editCommittee} deleteCommittee={deleteCommittee} />} />
          <Route path="all/:committeeId/*" element={
  <CommitteeDetailsRoutes
    committees={committees}
    editCommittee={editCommittee}
    deleteCommittee={deleteCommittee}
    addMember={addMember}
    editMember={editMember}
    deleteMember={deleteMember}
    addAssignment={addAssignment}
    editAssignment={editAssignment}
    deleteAssignment={deleteAssignment}
    addMeeting={addMeeting}
    editMeeting={editMeeting}
    deleteMeeting={deleteMeeting}
    addFeedback={addFeedback}
    editFeedback={editFeedback}
    deleteFeedback={deleteFeedback}
    addDocument={addDocument}
    editDocument={editDocument}
    deleteDocument={deleteDocument}
  />
} />
          <Route path="add" element={<AddCommitteePage addCommittee={addCommittee} />} />
          <Route path="upcoming-meetings" element={<UpcomingMeetingsPage />} />
          <Route path="action-items" element={<ActionItemsPage />} />
          <Route path="attendance-overview" element={<AttendanceOverviewPage />} />
          <Route path="documents-repository" element={<DocumentsRepositoryPage />} />
        </Route>

        {/* Organization & Permissions Route */}
        <Route path="/organization-permissions" element={<MainLayout onLanguageChange={handleLanguageChange}><OrganizationPermissionsPage /></MainLayout>} />

        {/* Main Dashboard Route (cleaned up) */}
        <Route path="/" element={<MainLayout onLanguageChange={handleLanguageChange} />}>
          <Route index element={
            <>
              <ProjectSelector
                projects={projects}
                selectedProjectId={selectedProjectId}
                onProjectChange={setSelectedProjectId}
              />
              <DashboardPage />
            </>
          } />
        </Route>

        <Route path="/training/*" element={<TrainingSection />} />
        <Route path="/execution/*" element={<ExecutionSection />} />
        <Route path="/evaluation" element={<MainLayout onLanguageChange={handleLanguageChange}><div>Evaluation Section</div></MainLayout>} />
        <Route path="/basic-info" element={<MainLayout onLanguageChange={handleLanguageChange} />}>
  <Route index element={<ProjectDataWizard />} />
</Route>
        <Route path="/organization-permissions" element={<MainLayout onLanguageChange={handleLanguageChange}><OrganizationPermissionsPage /></MainLayout>} />
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
export default App;