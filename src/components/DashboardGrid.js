import React from 'react';
import { Grid, Card, CardContent, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DashboardGrid = ({ tiles }) => {
  const navigate = useNavigate();
  console.log('inside DashboardGrid tiles: ', tiles);
  return (
    <Grid container spacing={3}>
      {tiles.map((tile) => (
        <Grid item xs={12} sm={6} md={4} key={tile.id}>
          <Card
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
            onClick={() => {
              if (tile.route) {
                navigate(tile.route);
              }
            }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', p: 3 }}>
              <Box sx={{ mb: 2, color: 'primary.main' }}>
                {tile.icon}
              </Box>
              <Typography variant="h5" component="div" align="center" gutterBottom>
                {tile.title}
              </Typography>
              <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 1 }}>
                {tile.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardGrid;
