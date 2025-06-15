import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Typography,
  Box,
  Grid,
  Rating,
  FormControl,
  FormLabel,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

const Monitoring = ({ formData, setFormData }) => {
  const { t } = useTranslation();
  const [kpiDialogOpen, setKpiDialogOpen] = React.useState(false);
  const [riskDialogOpen, setRiskDialogOpen] = React.useState(false);
  const [newKpi, setNewKpi] = React.useState({
    name: '',
    description: '',
    targetValue: '',
    unit: '',
    frequency: '',
    responsibleParty: '',
  });
  const [newRisk, setNewRisk] = React.useState({
    description: '',
    impact: '',
    probability: '',
    mitigation: '',
    contingency: '',
    owner: '',
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      monitoring: {
        ...prev.monitoring,
        [field]: event.target.value,
      },
    }));
  };

  const handleKpiChange = (field) => (event) => {
    setNewKpi((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleRiskChange = (field) => (event) => {
    setNewRisk((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleAddKpi = () => {
    if (newKpi.name && newKpi.targetValue) {
      setFormData((prev) => ({
        ...prev,
        monitoring: {
          ...prev.monitoring,
          kpis: [...(prev.monitoring?.kpis || []), { ...newKpi }],
        },
      }));
      setNewKpi({
        name: '',
        description: '',
        targetValue: '',
        unit: '',
        frequency: '',
        responsibleParty: '',
      });
      setKpiDialogOpen(false);
    }
  };

  const handleAddRisk = () => {
    if (newRisk.description && newRisk.impact && newRisk.probability) {
      setFormData((prev) => ({
        ...prev,
        monitoring: {
          ...prev.monitoring,
          risks: [...(prev.monitoring?.risks || []), { ...newRisk }],
        },
      }));
      setNewRisk({
        description: '',
        impact: '',
        probability: '',
        mitigation: '',
        contingency: '',
        owner: '',
      });
      setRiskDialogOpen(false);
    }
  };

  const handleDeleteKpi = (index) => {
    setFormData((prev) => ({
      ...prev,
      monitoring: {
        ...prev.monitoring,
        kpis: prev.monitoring.kpis.filter((_, i) => i !== index),
      },
    }));
  };

  const handleDeleteRisk = (index) => {
    setFormData((prev) => ({
      ...prev,
      monitoring: {
        ...prev.monitoring,
        risks: prev.monitoring.risks.filter((_, i) => i !== index),
      },
    }));
  };

  const impactLevels = ['low', 'medium', 'high', 'critical'];
  const probabilityLevels = ['unlikely', 'possible', 'likely', 'veryLikely'];
  const measurementFrequencies = ['daily', 'weekly', 'monthly', 'quarterly', 'yearly'];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('monitoring.title')}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            {t('evaluation.projectObjectives')}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            label={t('evaluation.objectives')}
            value={formData.monitoring?.objectives || ''}
            onChange={handleChange('objectives')}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            {t('evaluation.keyPerformanceIndicators')}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="contained"
              onClick={() => setKpiDialogOpen(true)}
              startIcon={<AddIcon />}
            >
              {t('evaluation.addKpi')}
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t('evaluation.kpiName')}</TableCell>
                  <TableCell>{t('evaluation.kpiDescription')}</TableCell>
                  <TableCell>{t('evaluation.targetValue')}</TableCell>
                  <TableCell>{t('evaluation.unit')}</TableCell>
                  <TableCell>{t('evaluation.frequency')}</TableCell>
                  <TableCell>{t('evaluation.responsibleParty')}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.monitoring?.kpis?.map((kpi, index) => (
                  <TableRow key={index}>
                    <TableCell>{kpi.name}</TableCell>
                    <TableCell>{kpi.description}</TableCell>
                    <TableCell>{kpi.targetValue}</TableCell>
                    <TableCell>{kpi.unit}</TableCell>
                    <TableCell>{t(kpi.frequency)}</TableCell>
                    <TableCell>{kpi.responsibleParty}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteKpi(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {monitoringTab === 2 && (
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
              {t('evaluation.riskAssessment')}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={() => setRiskDialogOpen(true)}
                startIcon={<AddIcon />}
              >
                {t('evaluation.addRisk')}
              </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t('evaluation.riskDescription')}</TableCell>
                    <TableCell>{t('evaluation.impact')}</TableCell>
                    <TableCell>{t('evaluation.probability')}</TableCell>
                    <TableCell>{t('evaluation.mitigation')}</TableCell>
                    <TableCell>{t('evaluation.contingency')}</TableCell>
                    <TableCell>{t('evaluation.owner')}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {formData.monitoring?.risks?.map((risk, index) => (
                    <TableRow key={index}>
                      <TableCell>{risk.description}</TableCell>
                      <TableCell>{t(risk.impact)}</TableCell>
                      <TableCell>{t(risk.probability)}</TableCell>
                      <TableCell>{risk.mitigation}</TableCell>
                      <TableCell>{risk.contingency}</TableCell>
                      <TableCell>{risk.owner}</TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteRisk(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
      </Grid>

      <Dialog open={kpiDialogOpen} onClose={() => setKpiDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{t('evaluation.addKpi')}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('evaluation.kpiName')}
                value={newKpi.name}
                onChange={handleKpiChange('name')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('evaluation.targetValue')}
                value={newKpi.targetValue}
                onChange={handleKpiChange('targetValue')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label={t('evaluation.description')}
                value={newKpi.description}
                onChange={handleKpiChange('description')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('evaluation.unit')}
                value={newKpi.unit}
                onChange={handleKpiChange('evaluation.unit')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>  
              <FormControl fullWidth>
                <InputLabel>{t('evaluation.frequency')}</InputLabel>
                <Select
                  value={newKpi.frequency}
                  onChange={handleKpiChange('frequency')}
                  label={t('evaluation.frequency')}
                >
                  {measurementFrequencies.map((freq) => (
                    <MenuItem key={freq} value={freq}>
                      {t(freq)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('evaluation.responsibleParty')}
                value={newKpi.responsibleParty}
                onChange={handleKpiChange('responsibleParty')}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setKpiDialogOpen(false)}>
            {t('cancel')}
          </Button>
          <Button onClick={handleAddKpi} variant="contained" color="primary">
            {t('add')}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={riskDialogOpen} onClose={() => setRiskDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{t('evaluation.addRisk')}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={2}
                label={t('evaluation.riskDescription')}
                value={newRisk.description}
                onChange={handleRiskChange('description')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>{t('evaluation.impact')}</InputLabel>
                <Select
                  value={newRisk.impact}
                  onChange={handleRiskChange('impact')}
                  label={t('evaluation.impact')}
                >
                  {impactLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {t(level)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>{t('evaluation.probability')}</InputLabel>
                <Select
                  value={newRisk.probability}
                  onChange={handleRiskChange('probability')}
                  label={t('evaluation.probability')}
                >
                  {probabilityLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {t(level)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={2}
                label={t('evaluation.mitigation')}
                value={newRisk.mitigation}
                onChange={handleRiskChange('mitigation')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label={t('evaluation.contingency')}
                value={newRisk.contingency}
                onChange={handleRiskChange('contingency')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label={t('evaluation.owner')}
                value={newRisk.owner}
                onChange={handleRiskChange('owner')}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRiskDialogOpen(false)}>
            {t('cancel')}
          </Button>
          <Button onClick={handleAddRisk} variant="contained" color="primary">
            {t('add')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Monitoring;
