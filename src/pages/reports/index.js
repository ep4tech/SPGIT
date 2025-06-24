import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const reports = [
  { id: 'projectSummary', title: 'Project Summary Report', description: 'Overview of all projects, statuses, and key metrics.' },
  { id: 'committeeActivity', title: 'Committee Activity Report', description: 'Detailed activities, meetings, and assignments for all committees.' },
  { id: 'trainingParticipation', title: 'Training Participation Report', description: 'Attendance and completion rates for all training programs.' },
  { id: 'executionProgress', title: 'Execution Progress Report', description: 'Milestones and progress tracking for all execution tasks.' },
  { id: 'monitoringFeedback', title: 'Monitoring Feedback Report', description: 'Summary of feedback received in all monitoring sections.' },
  { id: 'strategyKPI', title: 'Strategy KPI Report', description: 'Key performance indicators for strategic objectives.' },
  { id: 'resourceUtilization', title: 'Resource Utilization Report', description: 'Analysis of resource allocation and usage across projects.' }
];

const ReportsSection = () => (
  <Box p={3}>
    <Typography variant="h4" gutterBottom>Reports</Typography>
    <Grid container spacing={2}>
      {reports.map(report => (
        <Grid item xs={12} md={6} lg={4} key={report.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{report.title}</Typography>
              <Typography variant="body2" color="textSecondary">{report.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ReportsSection;
