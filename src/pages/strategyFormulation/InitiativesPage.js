import React from 'react';
import { useTranslation } from 'react-i18next';

const InitiativesPage = () => {
  console.log('======>> We ae in pages/strategyFormulation/InitiativesPage.js');
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('strategyFormulation.initiativesPage.title', 'Initiatives Page')}</h1>
      <p>{t('strategyFormulation.initiativesPage.description', 'This page is under construction. Please check back later.')}</p>
    </div>
  );
};

export default InitiativesPage;
