require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

let produk = [];

/* ================= LOGIN ================= */
app.post("/auth/login", (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        status: "error",
        message: "Data login tidak boleh kosong"
      });
    }

    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.json({ token });

  } catch (err) {
    next(err);
  }
});

/* ================= MIDDLEWARE ================= */
function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        status: "error",
        message: "Token tidak ada"
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();

  } catch (err) {
    return res.status(403).json({
      status: "error",
      message: "Token invalid / expired"
    });
  }
}

/* ================= GET PRODUK ================= */
app.get("/api/produk", verifyToken, (req, res, next) => {
  try {
    res.status(200).json(produk);
  } catch (err) {
    next(err);
  }
});

/* ================= POST PRODUK ================= */
app.post("/api/produk", verifyToken, (req, res, next) => {
  try {
    const { nama, harga } = req.body;

    if (!nama || harga === undefined) {
      return res.status(400).json({
        status: "error",
        message: "Nama dan harga wajib diisi"
      });
    }

    if (harga < 0) {
      return res.status(400).json({
        status: "error",
        message: "Harga tidak boleh bernilai negatif"
      });
    }

    const newProduk = {
      id: produk.length + 1,
      nama,
      harga
    };

    produk.push(newProduk);

    res.status(200).json({
      status: "success",
      data: newProduk
    });

  } catch (err) {
    next(err);
  }
});

/* ================= GLOBAL ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message || "Terjadi kesalahan server"
  });
});

module.exports = app;

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server jalan di http://localhost:3000");
  });
}
;