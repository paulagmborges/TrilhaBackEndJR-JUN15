const { Model } = require("objection");
const Knex = require("../database/db.Config");

Model.knex(Knex);

class User extends Model {
  static get tableName() {
    return "user";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "email", "password"],
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
      },
    };
  }
}

module.exports = User;
