# MERN Stack Setup & Enhancement Implementation

## ✅ Backend Setup (Completed)

### Created Backend Server Structure
- **Directory**: `username-server/`
- **Package.json**: Configured with Express, MongoDB, JWT, bcryptjs
- **.env**: MongoDB connection and JWT secret
- **config/db.js**: MongoDB connection setup
- **models/User.js**: User schema with password hashing
- **controllers/userController.js**: User CRUD + Authentication
  - `registerUser`: Creates users in MongoDB
  - `loginUser`: Authenticates users (prevents Viewers from logging in)
  - `getAllUsers`, `getUserById`, `updateUser`, `deleteUser`: CRUD operations
- **routes/userRoutes.js**: API endpoints
- **index.js**: Express server entry point

### Backend Features Implemented
✅ Role-based access control (Admin, Editor, Viewer, Contributor, Publisher)  
✅ Viewers cannot log in (backend validation in `loginUser`)  
✅ User registration with password hashing (bcryptjs)  
✅ JWT authentication tokens  

## ✅ Frontend Enhancements (Completed)

### 1. Authentication System
- **AuthContext**: Manages user state and token across app
- **API Service** (`src/services/api.js`): Backend communication

### 2. Enhancement 1: Access Control for Editors
- **UsersPage**: Editors cannot access (shows error message)
- **SignInPage**: Viewers cannot log in (backend enforces this)

### 3. Enhancement 2: DashArticleListPage
- **New Page**: `src/pages/DashboardPages/DashArticleListPage.jsx`
- Sample articles data with search and filter functionality
- Available at `/dashboard/articles`
- Mirrored UsersPage structure (DataGrid, search, filters)

### 4. Enhancement 3: SignUp Creates Users
- **SignUpPage**: Now sends data to backend via `registerUser` API
- Creates user in MongoDB with all fields
- Auto-login after successful registration
- Form validation (11-digit contact, age, username, password requirements)

### 5. Additional Features
- **SignInPage**: Now authenticates with backend via `loginUser` API
- **DashLayout**: 
  - Added Articles navigation link
  - Logout button functional (clears auth context)
- **App.jsx**: Wrapped with AuthProvider for global auth state

## 🚀 How to Run

### Terminal 1: Start Backend Server
\`\`\`bash
cd "C:\Users\Mhayumi\Downloads\amiller 1\amiller\amiller-webprog\username-server"
npm start
# Server runs on http://localhost:5000
\`\`\`

**Note**: Make sure MongoDB is running (use MongoDB Compass or `mongod`)

### Terminal 2: Start Frontend Dev Server
\`\`\`bash
cd "C:\Users\Mhayumi\Downloads\amiller 1\amiller\amiller-webprog\amiller-client"
npm run dev
# Frontend runs on http://localhost:5173
\`\`\`

## 📝 Test Flow

1. **Sign Up**: Create an account at `/auth/signup`
   - Data saved to MongoDB
   - Auto-login after registration
   - Redirects to dashboard

2. **Sign In**: Login at `/auth/signin`
   - Try with Viewer role → Blocked (enhancement 1)
   - Admin/Editor roles → Success

3. **Dashboard Access**:
   - Admin/Publisher/Contributor: Can access Users page
   - Editor: Cannot access Users page → Error message (enhancement 1)
   - Viewer: Cannot log in (enhancement 1)

4. **Articles Page**: View at `/dashboard/articles` (enhancement 2)
   - Search articles by title/author
   - Filter by category/status
   - See sample data

5. **Add User**: In Users page, add users that save to MongoDB

## 🔑 MongoDB Collections

The backend creates a `users` collection in `username-db` with fields:
- firstName, lastName, username, email, password (hashed)
- contactNumber, age, gender, role, status
- timestamps

## 📦 Key Dependencies Added

**Backend**:
- express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv

**Frontend**:
- No new dependencies (uses existing MUI, Vite)

## ⚠️ Security Notes

- JWT tokens stored in localStorage
- Passwords hashed with bcrypt
- Update .env JWT_SECRET in production
- Change MongoDB connection string if not local
