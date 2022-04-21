// todo this file provides an API to interact with the db server
import { Server } from "../dbModels"
class NewServer {
    serverName: string;
    mapName: string;
    id?: number;

    constructor() {
        this.serverName = ''
        this.mapName = ''
        this.id = undefined
    }
}

const getAllServers = async () => {
    const servers = await Server.findAll()
    return servers
}

const createServer = async (server: NewServer) => {
    console.log("server.ts createServer: server", server)
    const retData = await Server.create(server)
    const addedServer: NewServer = {
        serverName: retData.serverName,
        mapName: retData.mapName,
        id: retData.id
    }
    return addedServer
}

const updateServer = async (server: NewServer) => {
    console.log("server.ts updateServer: server", server)
    const retData = await Server.update(server, {
        where: {
            id: server.id
        }
    });
}

const destroyServer = async (server: NewServer) => {
    console.log("server.ts destroyServer: server", server)
    const retData = await Server.destroy({
        where: {
            id: server.id
        }
    });
}
export { getAllServers, createServer, updateServer, destroyServer, NewServer }