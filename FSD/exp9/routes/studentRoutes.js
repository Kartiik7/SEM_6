const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// ─────────────────────────────────────────────────────────────────────────────
// @route   POST /api/students
// @desc    Create a new student
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const { name, email, course } = req.body;

    // Basic field check
    if (!name || !email || !course) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, course) are required',
      });
    }

    const student = new Student({ name, email, course });
    const saved = await student.save();

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: saved,
    });
  } catch (err) {
    // Duplicate email error
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'A student with this email already exists',
      });
    }
    res.status(500).json({ success: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   GET /api/students
// @desc    Get all students
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   GET /api/students/:id
// @desc    Get single student by ID
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.status(200).json({ success: true, data: student });
  } catch (err) {
    // Invalid MongoDB ObjectId
    if (err.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID format',
      });
    }
    res.status(500).json({ success: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   PUT /api/students/:id
// @desc    Update a student by ID
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.put('/:id', async (req, res) => {
  try {
    const { name, email, course } = req.body;

    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, course },
      {
        new: true,           // return updated document
        runValidators: true, // run schema validators on update
      }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: updated,
    });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID format',
      });
    }
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Email already in use by another student',
      });
    }
    res.status(500).json({ success: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   DELETE /api/students/:id
// @desc    Delete a student by ID
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: deleted,
    });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID format',
      });
    }
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
