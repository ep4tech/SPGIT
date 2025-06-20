import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const content = [
  'أداة اعتماد ونشر الأهداف على جميع أقسام العمادة.',
  'واجهة لبناء المشاريع والبرامج لكل هدف استراتيجي.',
  'نماذج لتحديد المتطلبات الإدارية والمالية للتنفيذ.',
  'أداة تنسيق البرامج داخليًا (بين الأقسام) وخارجيًا (مع الشركاء).',
  'محرر لتوثيق البرامج والمشاريع (PDF، صور، روابط، ...).'
];

const DeploymentPage = () => (
  <Paper sx={{ width: '100%', maxWidth: 700, p: 4, borderRadius: 4, boxShadow: 3, bgcolor: '#fff', mt: 2 }}>
    <Typography variant="h4" sx={{ mb: 3, color: '#1976d2', fontWeight: 'bold', textAlign: 'right' }}>
      نشر الأهداف وبناء البرامج
    </Typography>
    <Box component="ul" sx={{ pr: 2, direction: 'rtl', textAlign: 'right', fontSize: 18, color: '#222' }}>
      {content.map((item, idx) => (
        <li key={idx} style={{ marginBottom: 16 }}>{item}</li>
      ))}
    </Box>
  </Paper>
);

export default DeploymentPage;
