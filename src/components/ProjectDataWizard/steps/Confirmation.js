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
        {t('basicInfo.title')}
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary={t('basicInfo.projectName')}
            secondary={formData.basicInfo?.projectName}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('basicInfo.organization')}
            secondary={formData.basicInfo?.organization}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('basicInfo.description')}
            secondary={formData.basicInfo?.description}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('basicInfo.startDate')}
            secondary={formData.basicInfo?.startDate?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('basicInfo.endDate')}
            secondary={formData.basicInfo?.endDate?.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}
          />
        </ListItem>
      </List>
    </Paper>
  );

  const renderPlanningTeam = () => (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {t('basicInfo.planningTeam')}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="primary">
          {t('basicInfo.internalTeam')}
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
          {t('basicInfo.externalTeam')}
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
          {t('basicInfo.committees')}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('name')}</TableCell>
                <TableCell>{t('mobile')}</TableCell>
                <TableCell>{t('email')}</TableCell>
                <TableCell>{t('basicInfo.committeeRole')}</TableCell>
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

  const renderEvaluation = () => (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {t('evaluation.title')}
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="primary">
          {t('basicInfo.projectObjectives')}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {formData.evaluation?.objectives}
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="primary">
          {t('evaluation.keyPerformanceIndicators')}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('evaluation.kpiName')}</TableCell>
                <TableCell>{t('evaluation.targetValue')}</TableCell>
                <TableCell>{t('evaluation.unit')}</TableCell>
                <TableCell>{t('evaluation.frequency')}</TableCell>
                <TableCell>{t('evaluation.responsibleParty')}</TableCell>
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
          {t('evaluation.riskAssessment')}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('evaluation.riskDescription')}</TableCell>
                <TableCell>{t('evaluation.impact')}</TableCell>
                <TableCell>{t('evaluation.probability')}</TableCell>
                <TableCell>{t('evaluation.mitigation')}</TableCell>
                <TableCell>{t('evaluation.owner')}</TableCell>
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
          {t('basicInfo.successCriteria')}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {formData.basicInfo?.successCriteria}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('basicInfo.confirmationTitle')}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {t('basicInfo.confirmationMessage')}
      </Typography>

      {renderBasicInfo()}
      {renderPlanningTeam()}
      {renderTrainingContent()}
      {renderEvaluation()}
    </Box>
  );
};

export default Confirmation;
