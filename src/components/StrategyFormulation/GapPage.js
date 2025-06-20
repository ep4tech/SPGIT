import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const content = [
  'مصفوفة التحديات التي تواجه المنظمة.',
  'مدخلات مؤشرات نجاح الرؤية.',
  'أدوات مقارنة لـ تحليل الفجوة بين الواقع والرؤية.',
  'أدوات تقييم وتسجيل القضايا الاستراتيجية الأساسية.',
  'نماذج توثيق عواقب فشل القضايا الاستراتيجية.'
];

const GapPage = () => (
  <Paper sx={{ width: '100%', maxWidth: 700, p: 4, borderRadius: 4, boxShadow: 3, bgcolor: '#fff', mt: 2 }}>
    <Typography variant="h4" sx={{ mb: 3, color: '#1976d2', fontWeight: 'bold', textAlign: 'right' }}>
      تحليل الفجوة والتحديات الاستراتيجية
    </Typography>
    <Box component="ul" sx={{ pr: 2, direction: 'rtl', textAlign: 'right', fontSize: 18, color: '#222' }}>
      {content.map((item, idx) => (
        <li key={idx} style={{ marginBottom: 16 }}>{item}</li>
      ))}
    </Box>
  </Paper>
);

export default GapPage;
s.
      </Typography>
    </Box>
  );
};

export default VisionChallenges;
