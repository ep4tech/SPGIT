// src/pages/dashboard/dashboardTiles.js
// Exports the dashboard tiles array for use in DashboardPage.js
import FolderIcon from '@mui/icons-material/Folder';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import StrategyIcon from '@mui/icons-material/TrackChanges';
import SchoolIcon from '@mui/icons-material/School';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupsIcon from '@mui/icons-material/Groups';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

// This function accepts a translation function (t) and i18n instance, and returns the tiles array
export function getDashboardTiles(t, i18n, selectedProjectId) {
  return [
    {
      id: 'basicInfo',
      title: t('basicInfo.title'),
      description: t('basicInfo.description'),
      icon: <FolderIcon fontSize="large" />, 
      route: '/basic-info'
    },
    {
      id: 'strategy',
      title: t('strategicAnalysis.title'),
      description: t('strategicAnalysis.description'),
      icon: <AnalyticsIcon fontSize="large" />, 
      route: '/strategy'
    },
    {
      id: 'strategyFormulation',
      title: t('strategyFormulation.title'),
      description: t('strategyFormulation.description'),
      icon: <StrategyIcon fontSize="large" />, 
      route: '/strategy-formulation'
    },
    {
      id: 'training',
      title: t('training.title'),
      description: t('training.description'),
      icon: <SchoolIcon fontSize="large" />, 
      route: '/training'
    },
    {
      id: 'execution',
      title: t('execution.title'),
      description: t('execution.description'),
      icon: <PlayArrowIcon fontSize="large" />, 
      route: '/execution'
    },
    {
      id: 'evaluation',
      title: t('evaluation.title'),
      description: t('evaluation.description'),
      icon: <AssessmentIcon fontSize="large" />, 
      route: '/evaluation'
    },
    {
      id: 'committee',
      title: t('committee.title'),
      description: t('committee.description'),
      icon: <GroupsIcon fontSize="large" />, 
      route: '/committee'
    },
    {
      id: 'organization-permissions',
      title: t('organizationPermissions.title'),
      description: t('organizationPermissions.title'),
      icon: <CorporateFareIcon fontSize="large" />, 
      route: '/organization-permissions'
    }
  ];
}
