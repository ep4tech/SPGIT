import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getDashboardTiles } from './dashboardTiles';
import DashboardGrid from '../../components/DashboardGrid';

const DashboardPage = ({  }) => {

  const { t, i18n } = useTranslation();
  const tiles = useMemo(() => getDashboardTiles(t), [i18n.language, t]);
  console.log('------------------------tiles: ', tiles);

  return (
    <div style={{ padding: 24 }}>
      <DashboardGrid tiles={tiles} />
    </div>
  );
};

export default DashboardPage;
