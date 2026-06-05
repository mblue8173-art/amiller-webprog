import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import usersData from '../../data/users';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Full Name', flex: 1, minWidth: 180 },
  { field: 'username', headerName: 'Username', flex: 1, minWidth: 160 },
  { field: 'email', headerName: 'Email', flex: 1.5, minWidth: 220 },
  { field: 'role', headerName: 'Role', flex: 1, minWidth: 130 },
  { field: 'status', headerName: 'Status', flex: 1, minWidth: 120 },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    minWidth: 140,
    sortable: false,
    renderCell: () => (
      <Stack direction="row" spacing={1}>
        <Button size="small" variant="contained">
          Edit
        </Button>
        <Button size="small" variant="outlined">
          Disable
        </Button>
      </Stack>
    ),
  },
];

const initialNewUser = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  role: 'Viewer',
  status: 'Active',
  age: '',
  contactNumber: '',
};

const initialErrors = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  age: '',
  contactNumber: '',
};

const UsersPage = () => {
  const [query, setQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState(initialNewUser);
  const [errors, setErrors] = useState(initialErrors);
  const [rows, setRows] = useState(
    usersData.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      username: user.username,
      email: user.email,
      role: user.role,
      status: user.status,
    }))
  );

  const filteredRows = useMemo(
    () =>
      rows.filter((row) => {
        const matchesQuery = [row.name, row.username, row.email].some((field) =>
          field.toLowerCase().includes(query.toLowerCase())
        );
        const matchesRole = roleFilter ? row.role === roleFilter : true;
        const matchesStatus = statusFilter ? row.status === statusFilter : true;
        return matchesQuery && matchesRole && matchesStatus;
      }),
    [query, roleFilter, statusFilter, rows]
  );

  const validate = () => {
    const newErrors = { ...initialErrors };
    if (!newUser.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!newUser.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!newUser.username.trim()) newErrors.username = 'Username is required.';
    else if (newUser.username.includes(' ')) newErrors.username = 'Username cannot contain spaces.';
    if (!newUser.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUser.email)) newErrors.email = 'Enter a valid email address.';
    if (!newUser.age.trim()) newErrors.age = 'Age is required.';
    else if (!/^[0-9]+$/.test(newUser.age)) newErrors.age = 'Age must be a number.';
    if (!newUser.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required.';
    else if (!/^\d{11}$/.test(newUser.contactNumber)) newErrors.contactNumber = 'Contact number must be exactly 11 digits.';
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewUser(initialNewUser);
    setErrors(initialErrors);
  };

  const handleChange = (field) => (event) => {
    setNewUser((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const id = rows.length + 1;
    setRows((prev) => [
      ...prev,
      {
        id,
        name: `${newUser.firstName.trim()} ${newUser.lastName.trim()}`,
        username: newUser.username.trim(),
        email: newUser.email.trim(),
        role: newUser.role,
        status: newUser.status,
      },
    ]);
    handleClose();
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} spacing={2}>
        <Box>
          <Typography variant="overline" display="block" gutterBottom>
            Users
          </Typography>
          <Typography variant="h4">User Directory</Typography>
        </Box>
        <Button variant="contained" size="small" onClick={handleOpen} sx={{ height: 40 }}>
          Add User
        </Button>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3}>
        <TextField
          label="Search users"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name, username, or email"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select value={roleFilter} label="Role" onChange={(event) => setRoleFilter(event.target.value)}>
            <MenuItem value="">All Roles</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Editor">Editor</MenuItem>
            <MenuItem value="Viewer">Viewer</MenuItem>
            <MenuItem value="Contributor">Contributor</MenuItem>
            <MenuItem value="Publisher">Publisher</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select value={statusFilter} label="Status" onChange={(event) => setStatusFilter(event.target.value)}>
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Box sx={{ height: 520, width: '100%' }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="First Name"
              value={newUser.firstName}
              onChange={handleChange('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
            />
            <TextField
              label="Last Name"
              value={newUser.lastName}
              onChange={handleChange('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName}
              fullWidth
            />
            <TextField
              label="Username"
              value={newUser.username}
              onChange={handleChange('username')}
              error={!!errors.username}
              helperText={errors.username || 'Username must not contain spaces.'}
              fullWidth
            />
            <TextField
              label="Email"
              value={newUser.email}
              onChange={handleChange('email')}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              label="Contact Number"
              value={newUser.contactNumber}
              onChange={handleChange('contactNumber')}
              error={!!errors.contactNumber}
              helperText={errors.contactNumber || 'Use 11 digits only.'}
              fullWidth
            />
            <TextField
              label="Age"
              value={newUser.age}
              onChange={handleChange('age')}
              error={!!errors.age}
              helperText={errors.age}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label="Role" value={newUser.role} onChange={handleChange('role')}>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Editor">Editor</MenuItem>
                <MenuItem value="Viewer">Viewer</MenuItem>
                <MenuItem value="Contributor">Contributor</MenuItem>
                <MenuItem value="Publisher">Publisher</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label="Status" value={newUser.status} onChange={handleChange('status')}>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save User
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default UsersPage;