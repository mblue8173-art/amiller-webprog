import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '../../components/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const stats = [
  { label: 'Total Users', value: '9' },
  { label: 'Average Age', value: '47.8' },
  { label: 'Total Reports', value: '12' },
  { label: 'Active Sessions', value: '18' },
];

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <div>
            <Typography variant="overline" display="block" gutterBottom>
              Summary
            </Typography>
            <Typography variant="h4" component="h1">
              Welcome back
            </Typography>
          </div>
          <Button to="/dashboard/reports" variant="primary">
            View Reports
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {stats.map((stat) => (
            <Grid key={stat.label} item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ minHeight: 120 }}>
                <CardContent>
                  <Typography variant="h4" component="div">
                    {stat.value}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="overline" display="block" gutterBottom>
              Activity
            </Typography>
            <Typography variant="h6" gutterBottom>
              Recent performance
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              The dashboard keeps the latest user activity, session performance, and action items in one place.
            </Typography>
            {['New user signups increased by 12%', 'Report downloads spiked after the latest update', 'Average session length is steady at 6m 20s'].map((note) => (
              <Paper key={note} variant="outlined" sx={{ p: 2, mb: 1 }}>
                <Typography>{note}</Typography>
              </Paper>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="overline" display="block" gutterBottom>
              Actions
            </Typography>
            <Typography variant="h6" gutterBottom>
              Next steps
            </Typography>
            <Box component="ul" sx={{ pl: 2, mt: 2, color: 'text.secondary' }}>
              <li>Review user reports and adjust the content strategy.</li>
              <li>Share the latest analytics with the creative team.</li>
              <li>Check for any users with stale session activity.</li>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;