import React from 'react';
import { useTranslation } from 'react-i18next';

const OrgChartDabeng = () => {
  const { t } = useTranslation();
  return <div>{t('strategicAnalysis.orgChartDabeng.placeholder', 'Org Chart Dabeng page coming soon.')}</div>;
};

export default OrgChartDabeng;
