const router = require('./routes/index');
const { sequelize } = require('./utils/dbConfig');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', router);
const PORT = process.env.PORT

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Unable to create tables, shutting down...', error);
    process.exit(1);
  });

app.listen(PORT, () => console.log(`app started at ${PORT}...`));
