const sequelize = require("sequelize");

const a = sequelize.define('a', {});
const b = sequelize.define('b', {});

a.hasOne (B); //
a.belongsTo (B); //
a.hasMany (B); //
a.belongsToMany (B) //

const [result, metadata] = await sequelize.query('SELECT * FROM a');
