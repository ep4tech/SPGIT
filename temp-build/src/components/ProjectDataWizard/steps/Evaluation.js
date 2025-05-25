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

const Evaluation = ({ formData, setFormData }) => {
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
      evaluation: {
        ...prev.evaluation,
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
        evaluation: {
          ...prev.evaluation,
          kpis: [...(prev.evaluation?.kpis || []), { ...newKpi }],
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
        evaluation: {
          ...prev.evaluation,
          risks: [...(prev.evaluation?.risks || []), { ...newRisk }],
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
      evaluation: {
        ...prev.evaluation,
        kpis: prev.evaluation.kpis.filter((_, i) => i !== index),
      },
    }));
  };

  const handleDeleteRisk = (index) => {
    setFormData((prev) => ({
      ...prev,
      evaluation: {
        ...prev.evaluation,
        risks: prev.evaluation.risks.filter((_, i) => i !== index),
      },
    }));
  };

  const impactLevels = ['low', 'medium', 'high', 'critical'];
  const probabilityLevels = ['unlikely', 'possible', 'likely', 'veryLikely'];
  const measurementFrequencies = ['daily', 'weekly', 'monthly', 'quarterly', 'yearly'];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {t('evaluation')}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            {t('projectObjectives')}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            label={t('objectives')}
            value={formData.evaluation?.objectives || ''}
            onChange={handleChange('objectives')}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            {t('keyPerformanceIndicators')}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="contained"
              onClick={() => setKpiDialogOpen(true)}
              startIcon={<AddIcon />}
            >
              {t('addKpi')}
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t('kpiName')}</TableCell>
                  <TableCell>{t('description')}</TableCell>
                  <TableCell>{t('targetValue')}</TableCell>
                  <TableCell>{t('unit')}</TableCell>
                  <TableCell>{t('frequency')}</TableCell>
                  <TableCell>{t('responsibleParty')}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.evaluation?.kpis?.map((kpi, index) => (
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

        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            {t('riskAssessment')}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="contained"
              onClick={() => setRiskDialogOpen(true)}
              startIcon={<AddIcon />}
            >
              {t('addRisk')}
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t('riskDescription')}</TableCell>
                  <TableCell>{t('impact')}</TableCell>
                  <TableCell>{t('probability')}</TableCell>
                  <TableCell>{t('mitigation')}</TableCell>
                  <TableCell>{t('contingency')}</TableCell>
                  <TableCell>{t('owner')}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.evaluation?.risks?.map((risk, index) => (
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

        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            {t('successCriteria')}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            label={t('successCriteria')}
            value={formData.evaluation?.successCriteria || ''}
            onChange={handleChange('successCriteria')}
          />
        </Grid>
      </Grid>

      <Dialog open={kpiDialogOpen} onClose={() => setKpiDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{t('addKpi')}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('kpiName')}
                value={newKpi.name}
                onChange={handleKpiChange('name')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label={t('targetValue')}
                value={newKpi.targetValue}
                onChange={handleKpiChange('targetValue')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label={t('description')}
                value={newKpi.description}
                onChange={handleKpiChange('description')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('unit')}
                value={newKpi.unit}
                onChange={handleKpiChange('unit')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>{t('frequency')}</InputLabel>
                <Select
                  value={newKpi.frequency}
                  onChange={handleKpiChange('frequency')}
                  label={t('frequency')}
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
                label={t('responsibleParty')}
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
        <DialogTitle>{t('addRisk')}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={2}
                label={t('riskDescription')}
                value={newRisk.description}
                onChange={handleRiskChange('description')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>{t('impact')}</InputLabel>
                <Select
                  value={newRisk.impact}
                  onChange={handleRiskChange('impact')}
                  label={t('impact')}
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
                <InputLabel>{t('probability')}</InputLabel>
                <Select
                  value={newRisk.probability}
                  onChange={handleRiskChange('probability')}
                  label={t('probability')}
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
                label={t('mitigation')}
                value={newRisk.mitigation}
                onChange={handleRiskChange('mitigation')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label={t('contingency')}
                value={newRisk.contingency}
                onChange={handleRiskChange('contingency')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label={t('owner')}
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

export default Evaluation;
