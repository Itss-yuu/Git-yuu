const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

// koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kampus_api"
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("Database connected");
  }
});

// TEST ROOT
app.get("/", (req, res) => {
  res.send("API jalan");
});

// =======================
// GET ALL DOSEN
// =======================
app.get("/api/dosen", (req, res) => {
  db.query("SELECT * FROM dosen", (err, result) => {
    if (err) return res.json({ error: err });
    res.json(result);
  });
});

// =======================
// POST DOSEN
// =======================
app.post("/api/dosen", (req, res) => {
  const { nidn, nama_dosen, gender, prodi, email } = req.body;

  const sql = "INSERT INTO dosen (nidn, nama_dosen, gender, prodi, email) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [nidn, nama_dosen, gender, prodi, email], (err, result) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Data berhasil ditambah", result });
  });
});

app.listen(3000, () => {
  console.log("Server jalan di port 3000");
});// GET semua dosen
app.get('/api/dosen', (req, res) => {
  db.query('SELECT * FROM dosen', (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});// =======================
// PUT (UPDATE) DOSEN
// =======================
app.put("/api/dosen/:nidn", (req, res) => {
  const { nidn } = req.params;
  const { nama_dosen, gender, prodi, email } = req.body;

  const sql = `
    UPDATE dosen 
    SET nama_dosen = ?, gender = ?, prodi = ?, email = ?
    WHERE nidn = ?
  `;

  db.query(sql, [nama_dosen, gender, prodi, email, nidn], (err, result) => {
    if (err) return res.json({ error: err });

    if (result.affectedRows === 0) {
      return res.json({ message: "Data tidak ditemukan" });
    }

    res.json({ message: "Data berhasil diupdate" });
  });
});// =======================
// DELETE DOSEN
// =======================
app.delete("/api/dosen/:nidn", (req, res) => {
  const { nidn } = req.params;

  const sql = "DELETE FROM dosen WHERE nidn = ?";

  db.query(sql, [nidn], (err, result) => {
    if (err) return res.json({ error: err });

    if (result.affectedRows === 0) {
      return res.json({ message: "Data tidak ditemukan" });
    }

    res.json({ message: "Data berhasil dihapus" });
  });
});