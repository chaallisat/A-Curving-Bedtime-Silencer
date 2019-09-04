module.exports = function(sequelize, DataTypes) {
  const userTask = sequelize.define("userTask", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 11]
      }
    },
    taskid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 11]
      }
    },
    actualstartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    actualenddate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    taskstatus: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    }
  });
  return userTask;
};
