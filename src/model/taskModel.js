const { Model } = require("objection");
const Knex = require("../database/db.Config");

Model.knex(Knex);

class Task extends Model {
  static get tableName() {
    return "task"; 
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "description", "user_id"],
      properties: {
        id: { type: "integer" },
        title: { type: "string", maxLength: 255 },
        description: { type: "string" },
        completed: { type: "boolean", default: false },
        user_id: { type: "integer" },
      },
    };
  }

  static get relationMappings() {
    const User = require("./userModel"); 

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "task.user_id",
          to: "user.id",
        },
      },
    };
  }
}

module.exports = Task;
