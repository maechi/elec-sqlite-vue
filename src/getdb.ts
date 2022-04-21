import { remote } from "electron";
import path from 'path';
import { Sequelize } from 'sequelize';
declare const __static: string;

// todo try loading db from userData

const univDb = path.join(remote.app.getPath("userData"), "data.db")

// todo the below is the path to local db under src/data.db
const isBuild = process.env.NODE_ENV === 'production';
const locDb = path.join(
    // eslint-disable-next-line
    isBuild ? __dirname : __static,
    '../src/data.db',
);


// setup the connection to make sure it works
const sequelize = new Sequelize({
    dialect: 'sqlite',
    // todo change this to locDb for using db inside src/data.db
    storage: locDb,
    // ** db event logging true in dev and false in production
    logging: (process.env.NODE_ENV !== 'production') ? true : false,
    define: {
        timestamps: false,
        underscored: true,
    },
});

// import models
import './dbModels'

export { sequelize };
