import React from 'react';
import { useTranslation } from 'react-i18next';

const OrgChartGoogle = () => {
  const { t } = useTranslation();
  return <div>{t('strategicAnalysis.orgChartGoogle.placeholder', 'Org Chart Google page coming soon.')}</div>;
};

export default OrgChartGoogle;
