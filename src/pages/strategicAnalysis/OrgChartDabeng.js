import React from 'react';
import { useTranslation } from 'react-i18next';

const OrgChartDabeng = () => {
  console.log('======>> We ae in pages/strategicAnalysis/OrgChartDabeng.js');
  const { t } = useTranslation();
  return <div>{t('strategicAnalysis.orgChartDabeng.placeholder', 'Org Chart Dabeng page coming soon.')}</div>;
};

export default OrgChartDabeng;
