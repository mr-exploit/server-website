import { Sequelize } from "sequelize";
//utk koneksi mysql
const db = new Sequelize('silah', 'admin', 'Kucing1011', {
    // host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    host: "db-server.cwltokssd1g2.ap-southeast-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql"
});

export default db;