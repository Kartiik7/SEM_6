const mongoose = require('mongoose');

// ─── Student Schema ───────────────────────────────────────────────────────────
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Student name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    course: {
      type: String,
      required: [true, 'Course name is required'],
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// ─── Export Model ─────────────────────────────────────────────────────────────
module.exports = mongoose.model('Student', studentSchema);
