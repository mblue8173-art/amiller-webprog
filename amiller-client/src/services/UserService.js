import defaultUsers from '../data/users';

const STORAGE_KEY = 'amiller_users_v1';

function init() {
  if (typeof window === 'undefined') return;
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
  }
}

export function fetchUsers() {
  init();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

export function createUser(user) {
  const users = fetchUsers();
  const id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const newUser = {
    id,
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    username: user.username || '',
    email: user.email || '',
    role: user.role || 'Viewer',
    status: user.status || 'Active',
    gender: user.gender || '',
    age: user.age || '',
    contactNumber: user.contactNumber || '',
  };
  users.push(newUser);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return newUser;
}

export function findUserByEmail(email) {
  if (!email) return null;
  const users = fetchUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}
