require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/notificationRoutes');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('/', routes);

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
