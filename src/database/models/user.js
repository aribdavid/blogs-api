module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      foreignKey: 'id',
      as: 'blogsPosts',
      onDelete: 'CASCADE'
    });
  }

  return User;
};