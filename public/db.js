const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./ws.db");

db.serialize(function () {
  //->Create table
  db.run(`CREATE TABLE IF NOT EXISTS ideas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title TEXT,
    category TEXT,
    description TEXT,
    link TEXT
  )`);

  //->Insert into
  // const query = `INSERT INTO ideas(
  //   image,
  //   title,
  //   category,
  //   description,
  //   link
  // ) VALUES(
  //   ?,?,?,?,?
  // )`;
  // const values = [
  //   "https://image.flaticon.com/icons/svg/2729/2729007.svg",
  //   "Curso de programação",
  //   "Estudo",
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,inventore voluptate! Facilis dolor harum esse libero exercitationem eius, quod officiis quam pariatur sunt neque aliquam repellendus. Cumque quia eius sit!",
  //   null,
  // ];
  // db.run(query, values, function (err) {
  //   if (err) return console.log(err);
  //   console.log(this);
  // });

  // db.all(`SELECT * FROM ideas`, function (err, rows) {
  //   if (err) return console.log(err);
  //   console.log(rows);
  // });

  //-> Delete register
  // db.run(`DELETE FROM ideas WHERE id=?`, [1], function (err) {
  //   if (err) return console.log(err);
  //   console.log("Deletei", this);
  // });
});

module.exports = db;
