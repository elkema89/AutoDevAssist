const {Model, DataTypes, Sequelize} = require('sequelize');

const FRONTEND_TABLE = 'front';

class Front extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: FRONTEND_TABLE,
            modelName: 'frontend',
            timestamps: true
        }
    }
}

const FrontSchema={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    lenguage:{
        allowNull: false,
        type:DataTypes.STRING,
        field:'lenguage'
    },
    frameworks:{
        allowNull:true,
        type: DataTypes.ARRAY(Sequelize.INTEGER),
        field:'frameworks'
    }
}

module.exports = {Front , FrontSchema};