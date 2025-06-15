import React from 'react';
import { useTranslation } from 'react-i18next';

const StrategyMapPage = () => {
  const { t } = useTranslation();
  return <div>{t('strategyFormulation.strategyMapPage.placeholder', 'Strategy Map Page coming soon.')}</div>;
};

export default StrategyMapPage;
