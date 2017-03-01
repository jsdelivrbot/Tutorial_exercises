//
//  User model
//

module.exports = (sequelize, DataType) => {

  /**
  * @description: Define model user model via sequalize
  * @param 1    : Name of model
  * @param 2    : Object defining data attributes
  * @param 3    : Static model functions
  */
  const Users = sequelize.define("Users", {
    id:{
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    name:{
      type: DataType.STRING,
      allowNull: false,
      validate: { notEmpty: true }
      },
    password:{
      type: DataType.STRING,
      allowNull: false,
      validate: { notEmpty: true }
      },
    email:{
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true }
      }
    },
    {
      classMethods:{
        associate: (models) => {
          Users.hasMany(models.Tasks);
        }
      }
    });

    return Users

}
