import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const Confirmation = ({ formData }) => {
  const { t, i18n } = useTranslation();

  const renderBasicInfo = () => (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {t('basicInfo')}
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary={t('projectName')}
            secondary={formData.basicInfo?.projectName}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('organization')}
            secondary={formData.basicInfo?.organization}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('description')}
            secondary={formData.basicInfo?.description}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('startDate')}
            secondary={formData.basicInfo?.startDate?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('endDate')}
            secondary={formData.basicInfo?.endDate?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
          />
        </ListItem>
      </List>
    </Paper>
  );

  const renderPlanningTeam = () => (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {t('planningTeam')}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="primary">
          {t('internalTeam')}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('name')}</TableCell>
                <TableCell>{t('mobile')}</TableCell>
                <TableCell>{t('email')}</TableCell>
                <TableCell>{t('department')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.planningTeam?.internalTeam?.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.mobile}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="primary">
          {t('externalTeam')}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('name')}</TableCell>
                <TableCell>{t('mobile')}</TableCell>
                <TableCell>{t('email')}</TableCell>
                <TableCell>{t('organization')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.planningTeam?.externalTeam?.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.mobile}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.organization}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="primary">
          {t('committees')}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('name')}</TableCell>
                <TableCell>{t('mobile')}</TableCell>
                <TableCell>{t('email')}</TableCell>
                <TableCell>{t('committeeRole')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.planningTeam?.committees?.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.mobile}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.committeeRole}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );

  const renderTrainingContent = () => (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {t('trainingContent')}
      </Typography>
      {formData.trainingContent?.map((training, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="primary">
            {training.title}
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary={t('description')}
                secondary={training.description}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('targetAudience')}
                secondary={training.targetAudience}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('numberOfTrainees')}
                secondary={training.numberOfTrainees}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('trainingType')}
                secondary={t(training.trainingType)}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('startDate')}
                secondary={training.startDate?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('endDate')}
                secondary={training.endDate?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('location')}
                secondary={training.location}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('trainer')}
                secondary={training.trainer}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('trainingHours')}
                secondary={training.trainingHours}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('mainTopics')}
                secondary={training.mainTopics}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={t('expectedOutcomes')}
                secondary={training.expectedOutcomes}
              />
            </ListItem>
          </List>
          {index < formData.trainingContent.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Paper>
  );

  const renderEvaluation = () => (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {t('evaluation')}
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="primary">
          {t('projectObjectives')}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {formData.evaluation?.objectives}
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="primary">
          {t('keyPerformanceIndicators')}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('kpiName')}</TableCell>
                <TableCell>{t('targetValue')}</TableCell>
                <TableCell>{t('unit')}</TableCell>
                <TableCell>{t('frequency')}</TableCell>
                <TableCell>{t('responsibleParty')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.evaluation?.kpis?.map((kpi, index) => (
                <TableRow key={index}>
                  <TableCell>{kpi.name}</TableCell>
                  <TableCell>{kpi.targetValue}</TableCell>
                  <TableCell>{kpi.unit}</TableCell>
                  <TableCell>{t(kpi.frequency)}</TableCell>
                  <TableCell>{kpi.responsibleParty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="primary">
          {t('riskAssessment')}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('riskDescription')}</TableCell>
                <TableCell>{t('impact')}</TableCell>
                <TableCell>{t('probability')}</TableCell>
                <TableCell>{t('mitigation')}</TableCell>
                <TableCell>{t('owner')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.evaluation?.risks?.map((risk, index) => (
                <TableRow key={index}>
                  <TableCell>{risk.description}</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={t(risk.impact)}
                      color={risk.impact === 'critical' ? 'error' : risk.impact === 'high' ? 'warning' : 'default'}
                    />
                  </TableCell>
                  <TableCell>{t(risk.probability)}</TableCell>
                  <TableCell>{risk.mitigation}</TableCell>
                  <TableCell>{risk.owner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="primary">
          {t('successCriteria')}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {formData.evaluation?.successCriteria}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('confirmationTitle')}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {t('confirmationMessage')}
      </Typography>

      {renderBasicInfo()}
      {renderPlanningTeam()}
      {renderTrainingContent()}
      {renderEvaluation()}
    </Box>
  );
};

export default Confirmation;
