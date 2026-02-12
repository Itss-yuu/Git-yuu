const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kampus_api',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.log('❌ DB ERROR:', err);
    return;
  }
  console.log('✅ Database connected');
});

module.exports = db;
