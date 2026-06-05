import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, name: 'Jon Snow', email: 'jon@example.com', role: 'Editor', status: 'Active' },
  { id: 2, name: 'Arya Stark', email: 'arya@example.com', role: 'Contributor', status: 'Pending' },
  { id: 3, name: 'Jamie Lannister', email: 'jamie@example.com', role: 'Admin', status: 'Active' },
  { id: 4, name: 'Daenerys Targaryen', email: 'daenerys@example.com', role: 'Publisher', status: 'Active' },
];

const columns = [
  { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
  { field: 'email', headerName: 'Email', flex: 1.5, minWidth: 220 },
  { field: 'role', headerName: 'Role', flex: 1, minWidth: 130 },
  { field: 'status', headerName: 'Status', flex: 1, minWidth: 120 },
];

const UsersPage = () => {
  return (
    <Paper sx={{ p: 3, minHeight: 520 }}>
      <Typography variant="overline" display="block" gutterBottom>
        Users
      </Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        User Directory
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
      </div>
    </Paper>
  );
};

export default UsersPage;