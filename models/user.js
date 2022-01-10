module.exports = (sequelize, DataType) => {
  const User = sequelize.define("User", {
    username: {
      type: DataType.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      onDelete: "cascade",
    });
    User.hasOne(models.Profile, {
      onDelete: "cascade",
    });
  };

  return User;
};
