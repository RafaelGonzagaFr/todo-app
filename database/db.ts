import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgresql://postgres:CWIKICtwBksniNRJyUmMVpgdbXPytzgD@autorack.proxy.rlwy.net:25848/railway');

export const connectDB = async () => {
  try {
    sequelize.authenticate();
    console.log('Conexão estabelecida')
  } catch (e) {
    console.error('Incapaz de se conectar ao banco de dados: ', e)
  }
}

