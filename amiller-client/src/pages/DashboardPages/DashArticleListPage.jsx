import React, { useMemo, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid } from '@mui/x-data-grid';
import articles from '../../assets/article-content';

const makeRows = (articles) =>
  articles.map((a, idx) => ({
    id: idx + 1,
    slug: a.name,
    title: a.title,
    paragraphs: a.content ? a.content.length : 0,
    preview: a.content?.[0]?.substring(0, 120) || a.description,
    status: 'Active',
  }));

const DashArticleListPage = () => {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [rows, setRows] = useState(() => makeRows(articles));

  const handleDisable = (id) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status: r.status === 'Active' ? 'Inactive' : 'Active' } : r)));
  };

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'slug', headerName: 'Slug', flex: 1, minWidth: 160 },
      { field: 'title', headerName: 'Title', flex: 1, minWidth: 200 },
      { field: 'paragraphs', headerName: 'Paragraphs', width: 120 },
      { field: 'preview', headerName: 'Preview', flex: 2, minWidth: 250 },
      { field: 'status', headerName: 'Status', width: 120 },
      {
        field: 'actions',
        headerName: 'Actions',
        flex: 1,
        minWidth: 160,
        sortable: false,
        renderCell: (params) => (
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="contained" onClick={() => alert(`Edit article ${params.row.title}`)}>
              Edit
            </Button>
            <Button size="small" component={Link} to={`/articles/${params.row.slug}`} variant="outlined">
              View
            </Button>
            <Button size="small" variant="outlined" color="error" onClick={() => handleDisable(params.row.id)}>
              Disable
            </Button>
          </Stack>
        ),
      },
    ],
    []
  );

  const filteredRows = useMemo(
    () =>
      rows.filter((row) => {
        const matchesQuery = [row.title, row.slug, row.preview].some((field) =>
          field.toLowerCase().includes(query.toLowerCase())
        );
        const matchesStatus = statusFilter ? row.status === statusFilter : true;
        return matchesQuery && matchesStatus;
      }),
    [query, statusFilter, rows]
  );

  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="flex-start" spacing={2} mb={3}>
        <Box>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            Articles
          </Typography>
          <Typography variant="h4">Dashboard Article List</Typography>
        </Box>
        <Button component={Link} to="/dashboard/articles/new" variant="contained" sx={{ height: 42 }}>
          Add Article
        </Button>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3} alignItems="center">
        <TextField label="Search articles" value={query} onChange={(e) => setQuery(e.target.value)} fullWidth />
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel>Status Filter</InputLabel>
          <Select value={statusFilter} label="Status Filter" onChange={(e) => setStatusFilter(e.target.value)}>
            <MenuItem value="">All Statuses</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Box sx={{ height: 520, width: '100%' }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={10} rowsPerPageOptions={[10, 20]} disableSelectionOnClick />
      </Box>
    </Paper>
  );
};

export default DashArticleListPage;
