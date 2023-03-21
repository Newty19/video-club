module.exports = (sequelize, type) => {
    const Copy = sequelize.define('copys', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        number: type.INTEGER,
        lastName: type.STRING,
    });
    return Copy;
};