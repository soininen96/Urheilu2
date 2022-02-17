const mysql = require("mysql");
const express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(3005, () => console.log("Serveri valmiina"));

const conn = mysql.createConnection({
  host: "localhost",
  user: "********",
  password: "**********",
  database: "urheilijat2",
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) {
    console.log("Tapahtui virhe yhdistettäessä tietokantaan");
  }
  console.log("Yhteys muodostettu");
});

//CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-type", "application/json");
  next();
});

//Kaikki urheilijat
app.get("/urheilijat", (req, res) => {
  conn.query("SELECT * FROM urheilija", (err, rows) => {
    if (err) {
      throw err;
    }
    return res.status(200).json(rows);
  });
});

//Hae urheilijat lajin mukaan
app.get("/lajiurheilijat/:laji", (req, res) => {
  const laji = String(req.params.laji);
  conn.query("SELECT * FROM urheilija WHERE laji=?", laji, (err, rows) => {
    if (err) throw err;
    res.end(JSON.stringify(rows[0]));
  });
});

//Kaikki f1 kuskit
app.get("/urheilijat/f1", (req, res) => {
  conn.query("SELECT * FROM urheilija WHERE laji='f1'", (err, rows) => {
    if (err) {
      throw err;
    }
    return res.status(200).json(rows);
  });
});

//Kaikki nhl pelaajat
app.get("/urheilijat/nhl", (req, res) => {
  conn.query("SELECT * FROM urheilija WHERE laji='nhl'", (err, rows) => {
    if (err) {
      throw err;
    }
    return res.status(200).json(rows);
  });
});

//Kaikki keihäänheittäjät
app.get("/urheilijat/keihas", (req, res) => {
  conn.query("SELECT * FROM urheilija WHERE laji='keihas'", (err, rows) => {
    if (err) {
      throw err;
    }
    return res.status(200).json(rows);
  });
});

//Yksittäinen urheilija id:n mukaan
app.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  conn.query("SELECT * FROM urheilija WHERE id=?", id, (err, rows) => {
    if (err) throw err;
    res.end(JSON.stringify(rows[0]));
  });
});

//Lisää urheilija
app.post("/lisaa", (req, res) => {
  let urheilija = req.body;
  console.log(urheilija);
  if (!urheilija) {
    return res
      .status(400)
      .send({ error: true, message: "Urheilija -objektia ei muodostunut" });
  }
  conn.query(
    "INSERT INTO urheilija SET ? ",
    urheilija,
    function (error, results, fields) {
      if (error) throw error;
      return res.send(JSON.stringify({ id: results.insertId, ...urheilija }));
    }
  );
});

//Päivitä urheilija
app.put("/urheilija/:id", (req, res) => {
  const id = Number(req.params.id);
  const paivitettyUrheilija = req.body;
  conn.query(
    "UPDATE urheilija SET ? WHERE id = ?;",
    [paivitettyUrheilija, req.params.id],
    function (error, results) {
      if (error) throw error;
      conn.query("SELECT * FROM urheilija WHERE id=?", id, (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows[0]));
      });
    }
  );
});

//Urheilija poisto
app.delete("/urheilija/:id", (req, res) => {
  console.log("serverin poiston id:");
  const id = Number(req.params.id);
  console.log(id);
  conn.query(
    "DELETE FROM urheilija Where id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      return;
    }
  );
});

module.exports = app;
