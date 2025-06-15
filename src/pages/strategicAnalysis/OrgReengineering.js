import React from 'react';
import { useTranslation } from 'react-i18next';

const OrgReengineering = () => {
  const { t } = useTranslation();
  return <div>{t('strategicAnalysis.orgReengineering.placeholder', 'Org Reengineering page coming soon.')}</div>;
};

export default OrgReengineering;
