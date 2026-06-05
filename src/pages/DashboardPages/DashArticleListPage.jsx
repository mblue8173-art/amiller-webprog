import { useMemo, useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

// Sample articles data
const articlesData = [
  {
    id: 1,
    title: 'Getting Started with React',
    author: 'Ma. Anne Tacardon',
    category: 'Technology',
    createdAt: '2024-01-15',
    status: 'Published',
    views: 1250,
  },
  {
    id: 2,
    title: 'Web Design Best Practices',
    author: 'Jarred Laurence Azul',
    category: 'Design',
    createdAt: '2024-01-20',
    status: 'Published',
    views: 980,
  },
  {
    id: 3,
    title: 'Introduction to MongoDB',
    author: 'Psyren John Alvarez',
    category: 'Database',
    createdAt: '2024-02-01',
    status: 'Draft',
    views: 450,
  },
  {
    id: 4,
    title: 'JavaScript Tips & Tricks',
    author: 'Allaine Ansis Penson',
    category: 'Technology',
    createdAt: '2024-02-05',
    status: 'Published',
    views: 2100,
  },
  {
    id: 5,
    title: 'CSS Grid Layout Guide',
    author: 'Karris Joan Bangayan',
    category: 'Design',
    createdAt: '2024-02-10',
    status: 'Published',
    views: 1650,
  },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'title', headerName: 'Title', flex: 1.5, minWidth: 250 },
  { field: 'author', headerName: 'Author', flex: 1, minWidth: 180 },
  { field: 'category', headerName: 'Category', flex: 1, minWidth: 120 },
  { field: 'createdAt', headerName: 'Created', flex: 1, minWidth: 120 },
  { field: 'status', headerName: 'Status', flex: 0.8, minWidth: 100 },
  { field: 'views', headerName: 'Views', flex: 0.8, minWidth: 80 },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    minWidth: 140,
    sortable: false,
    renderCell: () => (
      <Stack direction="row" spacing={1}>
        <Button size="small" variant="contained">
          View
        </Button>
        <Button size="small" variant="outlined">
          Edit
        </Button>
      </Stack>
    ),
  },
];

const DashArticleListPage = () => {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [rows, setRows] = useState(articlesData);

  const filteredRows = useMemo(
    () =>
      rows.filter((row) => {
        const matchesQuery = [row.title, row.author].some((field) =>
          field.toLowerCase().includes(query.toLowerCase())
        );
        const matchesCategory = categoryFilter ? row.category === categoryFilter : true;
        const matchesStatus = statusFilter ? row.status === statusFilter : true;
        return matchesQuery && matchesCategory && matchesStatus;
      }),
    [query, categoryFilter, statusFilter, rows]
  );

  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} spacing={2}>
        <Box>
          <Typography variant="overline" display="block" gutterBottom>
            Articles
          </Typography>
          <Typography variant="h4">Article Directory</Typography>
        </Box>
        <Button variant="contained" sx={{ height: 40 }}>
          Add Article
        </Button>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3}>
        <TextField
          label="Search articles"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title or author"
          fullWidth
        />
        <TextField
          select
          label="Category"
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value)}
          fullWidth
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Design">Design</option>
          <option value="Database">Database</option>
        </TextField>
        <TextField
          select
          label="Status"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          fullWidth
        >
          <option value="">All Status</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </TextField>
      </Stack>

      <Box sx={{ height: 520, width: '100%' }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
      </Box>
    </Paper>
  );
};

export default DashArticleListPage;
