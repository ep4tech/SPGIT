import React from 'react';
import { useTranslation } from 'react-i18next';

const OrgChartFlow = () => {
  console.log('======>> We ae in pages/strategicAnalysis/OrgChartFlow.js');
  const { t } = useTranslation();
  return <div>{t('strategicAnalysis.orgChartFlow.placeholder', 'Org Chart Flow page coming soon.')}</div>;
};

export default OrgChartFlow;
