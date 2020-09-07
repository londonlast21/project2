const { Sequelize } = require("sequelize/types");

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(proccess.env.JAWSDB_URL);

} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });


} 
