const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// env path
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Connection URI
const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT_APP}/${process.env.DB_NAME}`;

//mongo connect
mongoose
  .connect(uri)
  .then(() => {
    console.log(`Conecct to MongoDB  port ${process.env.DB_PORT_APP} `);
  })
  .catch((err) => {
    console.error(`Erro in  MongoDB connection:', ${err}`);
  });

module.exports = mongoose; // eu
