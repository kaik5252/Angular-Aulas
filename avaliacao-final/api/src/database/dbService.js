const mysql = require("mysql2");

async function connection() {
  return new Promise((res, rej) => {
    const conn = mysql.createConnection({
      host: process.env.DB_HOSTNAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    conn.connect((error) => {
      if (error) {
        console.error("Erro ao tentar estabelecer conexão com o banco >>> ", error);
        rej(error);
      } else {
        res(conn);
      }
    });
  });
}

module.exports = {
  addData: async (data) => {
    var conn;

    try {
      const sql = `INSERT INTO ${data.table} (${data.fields.join(", ")}) VALUES (${data.fields.map(() => "?").join(", ")})`;
      conn = await connection();
      console.log(sql);

      const [rows] = await conn.promise().query(sql, data.values);
      return rows;

    } catch (error) {
      console.error("Erro no adicionar um registro no banco >>> ", error);
      throw error;

    } finally {
      if (conn) {
        conn.end();
      }
    }
  },

  // Exibir/Listar os registros do banco
  readData: async (data) => {
    var conn;

    try {
      const aditional = data.aditional === undefined ? "" : data.aditional;
      const fields = data.fields === undefined ? '*' : data.fields.join(", ");
      const sql = `SELECT ${fields} FROM ${data.table} ${aditional}`;
      console.log(sql);

      conn = await connection();
      if (sql.includes("?")) {
        const [rows] = await conn.promise().query(sql, data.values);
        return rows;

      } else {
        const [rows] = await conn.promise().query(sql);
        return rows;
      }

    } catch (error) {
      console.error("Erro na consulta no banco >>> ", error);
      throw error;

    } finally {
      if (conn) {
        conn.end();
      }
    }
  }
}