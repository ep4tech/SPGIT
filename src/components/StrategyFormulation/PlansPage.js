import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const content = [
  'أداة لرسم مصفوفة الأهداف والاستراتيجيات.',
  'واجهات لتصميم: الخطط التنفيذية بعيدة المدى (5 سنوات).',
  'واجهات لتصميم: الخطط التنفيذية قصيرة المدى (سنة).',
  'أدوات رسم مصفوفة الخطط والبرامج مع الجهات التنفيذية.'
];

const PlansPage = () => (
  <Paper sx={{ width: '100%', maxWidth: 700, p: 4, borderRadius: 4, boxShadow: 3, bgcolor: '#fff', mt: 2 }}>
    <Typography variant="h4" sx={{ mb: 3, color: '#1976d2', fontWeight: 'bold', textAlign: 'right' }}>
      رسم الخطط التنفيذية والمصفوفات
    </Typography>
    <Box component="ul" sx={{ pr: 2, direction: 'rtl', textAlign: 'right', fontSize: 18, color: '#222' }}>
      {content.map((item, idx) => (
        <li key={idx} style={{ marginBottom: 16 }}>{item}</li>
      ))}
    </Box>
  </Paper>
);

export default PlansPage;
