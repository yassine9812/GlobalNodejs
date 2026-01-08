const express = require('express');
const morgan = require('morgan'); // For logging HTTP requests

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1. Middlewares

app.use(morgan('dev')); // Logging middleware
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

// Middleware to add request time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//2. Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

module.exports = app;
