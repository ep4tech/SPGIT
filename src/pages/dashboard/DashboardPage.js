import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getDashboardTiles } from './dashboardTiles';
import DashboardGrid from '../../components/DashboardGrid';

const DashboardPage = ({ selectedProjectId }) => {
  const { t, i18n } = useTranslation();
  const tiles = useMemo(() => getDashboardTiles(t, i18n, selectedProjectId), [i18n.language, selectedProjectId, t]);

  return (
    <div style={{ padding: 24 }}>
      <DashboardGrid tiles={tiles} selectedProjectId={selectedProjectId} />
    </div>
  );
};

export default DashboardPage;
