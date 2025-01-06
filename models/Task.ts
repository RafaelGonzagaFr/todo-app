import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


class Task extends Model {}


Task.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "task",
  }
)



export default Task;