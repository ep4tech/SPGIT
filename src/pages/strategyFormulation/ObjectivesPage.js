import React from 'react';
import { useTranslation } from 'react-i18next';

const ObjectivesPage = () => {
  console.log('======>> We ae in pages/strategyFormulation/ObjectivesPage.js');
  const { t } = useTranslation();
  return <div>{t('strategyFormulation.objectivesPage.placeholder', 'Objectives Page coming soon.')}</div>;
};

export default ObjectivesPage;
