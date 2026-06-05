import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

const reportData = [
  { quarter: 'Q1', series1: 35, series2: 48 },
  { quarter: 'Q2', series1: 45, series2: 12 },
  { quarter: 'Q3', series1: 30, series2: 50 },
  { quarter: 'Q4', series1: 40, series2: 30 },
];

const pieData = [
  { name: 'Series 1', value: 40 },
  { name: 'Series 2', value: 30 },
  { name: 'Series 3', value: 30 },
];

const COLORS = ['#1976d2', '#ffb300', '#d32f2f'];

const ReportsPage = () => {
  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="overline" display="block" gutterBottom>
          Reports
        </Typography>
        <Typography variant="h4">Monthly overview</Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          A high-level summary of the latest report metrics and key outcomes.
        </Typography>
        <Box sx={{ display: 'grid', gap: 2, mt: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[
            { label: 'Page Views', value: '1.2K' },
            { label: 'New Reports', value: '24' },
            { label: 'Average Watch Time', value: '4m 08s' },
          ].map((item) => (
            <Paper key={item.label} variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="h5" sx={{ mt: 1 }}>
                {item.value}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Box sx={{ flex: 1, minWidth: 280, height: 320 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Quarterly Trend
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reportData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="series1" fill="#1976d2" />
                <Bar dataKey="series2" fill="#ffb300" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <Box sx={{ width: 280, height: 320 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ReportsPage;