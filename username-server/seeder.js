const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/username-db';

const users = [
  {
    firstName: 'Ma. Anne',
    lastName: 'Tacardon',
    username: 'maannetacardon',
    email: 'ma.anne.tacardon@wireframe.com',
    password: 'Password123!',
    contactNumber: '09170000000',
    age: 28,
    gender: 'Female',
    role: 'Admin',
    status: 'Active',
  },
  {
    firstName: 'Jarred Laurence',
    lastName: 'Azul',
    username: 'jarredazul',
    email: 'jarred.azul@wireframe.com',
    password: 'Password123!',
    contactNumber: '09170000001',
    age: 32,
    gender: 'Male',
    role: 'Viewer',
    status: 'Active',
  },
  {
    firstName: 'Psyren John',
    lastName: 'Alvarez',
    username: 'psyrenalvarez',
    email: 'psyren.alvarez@wireframe.com',
    password: 'Password123!',
    contactNumber: '09170000002',
    age: 24,
    gender: 'Male',
    role: 'Editor',
    status: 'Inactive',
  },
  {
    firstName: 'Allaine Ansis',
    lastName: 'Penson',
    username: 'allainepenson',
    email: 'allaine.penson@wireframe.com',
    password: 'Password123!',
    contactNumber: '09170000003',
    age: 29,
    gender: 'Female',
    role: 'Editor',
    status: 'Active',
  },
  {
    firstName: 'Karris Joan',
    lastName: 'Bangayan',
    username: 'karrisbangayan',
    email: 'karris.bangayan@wireframe.com',
    password: 'Password123!',
    contactNumber: '09170000004',
    age: 26,
    gender: 'Female',
    role: 'Viewer',
    status: 'Active',
  },
];

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await connectDB();
    await User.deleteMany();
    await User.create(users);
    console.log('Data imported successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error importing data:', error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await User.deleteMany();
    console.log('Data destroyed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error destroying data:', error.message);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
