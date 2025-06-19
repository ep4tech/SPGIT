  // src/pages/dashboard/dashboardTiles.js
  // Exports the dashboard tiles array for use in DashboardPage.js
  
  import FolderIcon from '@mui/icons-material/Folder';
  import AnalyticsIcon from '@mui/icons-material/Analytics';
  import StrategyIcon from '@mui/icons-material/TrackChanges';
  import SchoolIcon from '@mui/icons-material/School';
  import PlayArrowIcon from '@mui/icons-material/PlayArrow';
  import AssessmentIcon from '@mui/icons-material/Assessment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PieChartIcon from '@mui/icons-material/PieChart';
  import GroupsIcon from '@mui/icons-material/Groups';
  import CorporateFareIcon from '@mui/icons-material/CorporateFare';

  // This function accepts a translation function (t) and i18n instance, and returns the tiles array
export function getDashboardTiles(t) {
  return [
    {
      id: 'dataWizard',
      title: t('dataWizard.title'),
      description: t('dataWizard.description'),
      icon: <FolderIcon fontSize="large" />,
      route: '/basic-info'
    },
    {
      id: 'strategicAnalysis',
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
      id: 'execution',
      title: t('execution.title'),
      description: t('execution.description'),
      icon: <PlayArrowIcon fontSize="large" />, 
      route: '/execution'
    },
    {
      id: 'monitoring',
      title: t('monitoring.title'),
      description: t('monitoring.description'),
      icon: <VisibilityIcon fontSize="large" />, 
      route: '/monitoring'
    },
    {
      id: 'training',
      title: t('training.title'),
      description: t('training.description'),
      icon: <SchoolIcon fontSize="large" />, 
      route: '/training'
    },
    {
      id: 'committee',
      title: t('committee.title'),
      description: t('committee.description'),
      icon: <GroupsIcon fontSize="large" />,
      route: '/committee'
    },
    {
      id: 'Organization',
      title: t('organizationPermissions.title'),
      description: t('organizationPermissions.description'),
      icon: <GroupsIcon fontSize="large" />,
      route: '/organization'
    },
    {
      id: 'reports',
      title: t('reports.title'),
      description: t('reports.description'),
      icon: <PieChartIcon fontSize="large" />, 
      route: '/reports'
    }
  ];
}
