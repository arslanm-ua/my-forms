import mysql from 'mysql2/promise'

// Erstelle den Connection Pool für die Datenbank
const db = mysql.createPool({
  host: process.env.DB_HOST, // Hostname aus .env-Datei
  user: process.env.DB_USER, // Benutzername
  password: process.env.DB_PASSWORD, // Passwort
  database: process.env.DB_NAME, // Datenbankname
  waitForConnections: true,
  connectionLimit: 10,
})

export default db