// index.js
// File utama untuk memanggil modul dan menampilkan hasil di terminal

const konversi = require('./rumusSuhu');
const chalk = require('chalk');

// contoh nilai celcius
const celcius = 30;

// panggil fungsi dari modul
const hasil = konversi(celcius);

// tampilkan hasil dengan warna menggunakan chalk
console.log(chalk.blue(`Suhu dalam Celcius: ${celcius}°C`));
console.log(chalk.green(`Suhu dalam Fahrenheit: ${hasil}°F`));
