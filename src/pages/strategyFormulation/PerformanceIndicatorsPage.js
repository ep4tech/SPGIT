import React from 'react';
import { useTranslation } from 'react-i18next';

const PerformanceIndicatorsPage = () => {
  console.log('======>> We ae in pages/strategyFormulation/PerformanceIndicatorsPage.js');
  const { t } = useTranslation();
  return <div>{t('strategyFormulation.performanceIndicatorsPage.placeholder', 'Performance Indicators Page coming soon.')}</div>;
};

export default PerformanceIndicatorsPage;
per