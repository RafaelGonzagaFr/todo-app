import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import Task from "./Task";


class User extends Model {}

User.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "user",
  }
)

User.hasMany(Task);
Task.belongsTo(User);

export default User;