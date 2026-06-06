const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: false },
    role: { type: String, enum: ['Admin', 'Editor', 'Viewer', 'Contributor', 'Publisher'], default: 'Viewer' },
    status: { type: String, enum: ['Active', 'Pending', 'Inactive'], default: 'Pending' },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (passwordAttempt) {
  return await bcryptjs.compare(passwordAttempt, this.password);
};

module.exports = mongoose.model('User', userSchema);
