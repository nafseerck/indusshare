require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    });
    const connection = mongoose.connection;

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.MONGO_CONNECTION_URL,
        ssl: { rejectUnauthorized: false }
    });

    connection.once('open', () => {
        console.log('Database connected')
    }).catch(err => {
        console.log('Connection Failed');
    })
}

module.exports = connectDB;