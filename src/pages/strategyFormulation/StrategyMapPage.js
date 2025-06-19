import React from 'react';
import { useTranslation } from 'react-i18next';

const StrategyMapPage = () => {
  console.log('======>> We ae in pages/strategyFormulation/StrategyMapPage.js');
  const { t } = useTranslation();
  return <div>{t('strategyFormulation.strategyMapPage.placeholder', 'Strategy Map Page coming soon.')}</div>;
};

export default StrategyMapPage;
