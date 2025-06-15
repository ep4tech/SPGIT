import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Box,
  Paper,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  AppBar,
  Toolbar,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BasicInfo from './steps/BasicInfo';
import Documents from './steps/Documents';
import PlanningTeam from './steps/PlanningTeam';

import Evaluation from './steps/Evaluation';
import Confirmation from './steps/Confirmation';

const ProjectDataWizard = ({ onClose, projectId, initialData = null, onDataUpdate, startAtBasicInfo = false }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isRtl = i18n.language === 'ar';
  const [activeStep, setActiveStep] = useState(0);
  
  const emptyFormData = {
    basicInfo: {
      projectName: '',
      organizationName: '',
      responsiblePerson: '',
      jobTitle: '',
      mobile: '',
      email: '',
      startDate: null,
      generalNotes: ''
    },
    documents: {
      officialDecision: null,
      commitmentMinutes: null,
      goalDocument: null,
      scopeDocument: null,
      workPlan: null,
      financialPlan: null,
      obstaclesAndSolutions: null,
      benefitsAnalysis: null,
      futureStudies: null,
      leadershipParticipation: null,
      externalCoordination: null
    },
    planningTeam: {
      internalTeam: [],
      externalTeam: [],
      committees: [],
    }
  };

  const [formData, setFormData] = useState(initialData || emptyFormData);

  const steps = [
    { label: t('basicInfo.title'), component: BasicInfo },
    { label: t('basicInfo.documentsTitle'), component: Documents },
    { label: t('basicInfo.planningTeamTitle'), component: PlanningTeam },
    { label: t('basicInfo.evaluationTitle'), component: Evaluation },
    { label: t('basicInfo.confirmationTitle'), component: Confirmation }
  ];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSaveAndExit = () => {
    if (onDataUpdate) {
      onDataUpdate(formData);
    }
    localStorage.setItem('projectData', JSON.stringify(formData));
    onClose();
  };

  const handleSubmit = () => {
    if (onDataUpdate) {
      onDataUpdate(formData);
    }
    localStorage.setItem('projectData', JSON.stringify(formData));
    onClose();
  };

  const CurrentStepComponent = steps[activeStep].component;

  const handleStepUpdate = (stepData) => {
    const newFormData = { ...formData };
    const stepKey = Object.keys(emptyFormData)[activeStep];
    newFormData[stepKey] = stepData;
    setFormData(newFormData);
    if (onDataUpdate) {
      onDataUpdate(newFormData);
    }
    localStorage.setItem('projectData', JSON.stringify(newFormData));
  };

  return (
    <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'background.default',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column'
      }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1 }}>
            {t('projectData')}
          </Typography>
          <IconButton color="inherit" onClick={onClose} size="large">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 4, flex: 1, overflow: 'auto' }}>
      <Paper sx={{ p: 3, width: '100%', maxWidth: 1200, mx: 'auto', direction: isRtl ? 'rtl' : 'ltr' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5">
            {t('projectData')}
          </Typography>
          <Button
            variant="outlined"
            onClick={onClose}
          >
            {t('back')}
          </Button>
        </Box>

      <Stepper activeStep={activeStep} nonLinear sx={{ mb: 4 }}>
        {steps.map((step, idx) => (
          <Step key={step.label}>
            <StepLabel
              onClick={() => setActiveStep(idx)}
              style={{ cursor: 'pointer' }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mb: 4 }}>
        <CurrentStepComponent
          formData={formData[Object.keys(emptyFormData)[activeStep]] || {}}
          onUpdate={handleStepUpdate}
          isRtl={isRtl}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: isRtl ? 'flex-start' : 'flex-end', gap: 2 }}>
        <Button
          variant="outlined"
          onClick={handleSaveAndExit}
        >
          {t('basicInfo.saveAndExit')}
        </Button>
        {activeStep > 0 && (
          <Button
            onClick={handleBack}
          >
            {t('back')}
          </Button>
        )}
        <Button
          variant="contained"
          onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
        >
          {activeStep === steps.length - 1 ? t('submit') : t('next')}
        </Button>
      </Box>
      </Paper>
      </Box>
      <Box sx={{ p: 3, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
        <Button onClick={onClose} sx={{ mr: 1 }}>
          {t('cancel')}
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length}
        >
          {activeStep === steps.length - 1 ? t('submit') : t('next')}
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectDataWizard;
