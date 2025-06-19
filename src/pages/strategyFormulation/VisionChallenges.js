import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const VisionChallenges = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ p: 5, background: '#e3f2fd', border: '3px solid #1976d2', borderRadius: 2, mt: 5, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize: 40 }} gutterBottom>
        Vision and Challenges
      </Typography>
      <Typography variant="h6" sx={{ color: '#333', mt: 2 }}>
        Define your organization's vision and identify the main challenges that could impact strategic success. This section helps clarify direction and anticipate obstacles.
      </Typography>
    </Box>
  );
};

export default VisionChallenges;
