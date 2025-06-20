import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const content = [
  'نموذج إدخال تطلعات المسؤولين واتجاهات المنظمة.',
  'نموذج متطلبات المستفيدين (تصنيف داخلي/خارجي).',
  'واجهة لإدخال ومراجعة توجهات خطط التنمية الوطنية.',
  'استبيانات حول الاتجاهات العالمية واستشراف المستقبل.',
  'أدوات لصياغة الرؤية الاستراتيجية بعد الاتفاق.'
];

const AspirationsPage = () => (
  <Paper sx={{ width: '100%', maxWidth: 700, p: 4, borderRadius: 4, boxShadow: 3, bgcolor: '#fff', mt: 2 }}>
    <Typography variant="h4" sx={{ mb: 3, color: '#1976d2', fontWeight: 'bold', textAlign: 'right' }}>
      تحليل التطلعات والرؤية المستقبلية
    </Typography>
    <Box component="ul" sx={{ pr: 2, direction: 'rtl', textAlign: 'right', fontSize: 18, color: '#222' }}>
      {content.map((item, idx) => (
        <li key={idx} style={{ marginBottom: 16 }}>{item}</li>
      ))}
    </Box>
  </Paper>
);

export default AspirationsPage;
