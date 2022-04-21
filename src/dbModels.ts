// todo define models here, or use a separate file for defining models and import them here!!!
import {DataTypes, Model} from "sequelize";
import {sequelize} from "@/getdb";

class User extends Model {
    public firstName!: string | null;
    public lastName!: string | null;
    public id!: number | null;
}
User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    }, {
    tableName: "users",
    sequelize
});
User.sync()



class Server extends Model {
    public serverName!: string;
    public mapName!: string;
    public id!: number;
}
Server.init({
    serverName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    mapName: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    tableName: "servers",
    sequelize
});
Server.sync()





class Tribe extends Model {
    public tribeName!: string;
    public serverId!: number;
    public id!: number;
}
Tribe.init({
    tribeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    serverId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },

}, {
    tableName: "tribes",
    sequelize
});
Tribe.sync()




class Achcat extends Model {
    public achcatName!: string;
    public id!: number;
}
Achcat.init({
    achcatName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    tableName: "achcat",
    sequelize
});
Achcat.sync()



class Achopt extends Model {
    public achoptName!: string;
    public categoryId!: number | null;
    public id!: number
}
Achopt.init({
    achoptName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    categoryId: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    tableName: "achopt",
    sequelize
});
Achopt.sync()


class Achievement extends Model {
    public achievementName!: string;
    public categoryId!: number | null;
    public bonusLevel!: boolean;
    public singleMode!: boolean;
    public showSum!: boolean;
    public id!: number;
}
Achievement.init({
    achievementName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    categoryId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    bonusLevel: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    singleMode: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    showSum: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: "achievement",
    sequelize
});
Achievement.sync()



class Character extends Model {
    public characterName!: string;
    public level!: number;
    public id!: number;
}
Character.init({
    characterName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    tableName: "character",
    sequelize
});
Character.sync();


// set One-To-Many on Server - Tribes
Server.hasMany(Tribe, {foreignKey: 'serverId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
Tribe.belongsTo(Server, {foreignKey: 'serverId', onDelete: 'RESTRICT', onUpdate: 'CASCASE'});

// set One-To-Many on Achcat - Achopt
Achcat.hasMany(Achopt, {foreignKey: 'categoryId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
Achopt.belongsTo(Achcat, {foreignKey: 'categoryId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});

// set One-To-Many on Achievement - Achcat
Achcat.hasMany(Achievement, {foreignKey: 'categoryId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
Achievement.belongsTo(Achcat, {foreignKey: 'categoryId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});

// use sync to create tables
sequelize.sync({alter: true})
    .then(response => console.log("Relations response", response))
    .catch(error => console.log("relations error", error))

export { User, Server, Tribe, Achcat, Achopt, Achievement, Character }