const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth_routes');
const userRoutes = require('./routes/user_routes');

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

module.exports = app;