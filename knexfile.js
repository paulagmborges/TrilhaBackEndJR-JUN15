// Update with your config settings.
const path = require("path");
console.log("__dirname:", __dirname);
console.log(
  "Migrations directory:",
  path.resolve(__dirname, "src", "database", "migrations")
);

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "db.sqlite"),
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
  },
};
