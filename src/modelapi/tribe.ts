// todo this file provides an API to interact with the db server
//todo table making it easier to work with
//import { Tribe } from "../dbModels"
//interface NewTribe {
//    tribeName: string;
//    serverId: number | null;
//    id?: number | null;
//}
import {Server, Tribe} from "../dbModels"
import {NewServer} from "@/modelapi/server";

class NewTribe {
    tribeName: string;
    serverId: number | null;
    id?: number;

    constructor() {
        this.tribeName = ''
        this.serverId = null
        this.id = undefined
    }

}

const getAllTribes = async () => {
    const tribes = await Tribe.findAll({ include: Server })
    return tribes
}

const createTribe = async (tribe: NewTribe) => {
    console.log("tribe.ts createTribe: tribe", tribe)
    const retData = await Tribe.create(tribe)
    const addedTribe: NewTribe = {
        tribeName: retData.tribeName,
        serverId: retData.serverId,
        id: retData.id
    }
    return addedTribe
}

const updateTribe = async (tribe: NewTribe) => {
    console.log("tribe.ts updateTribe: tribe", tribe)
    const retData = await Tribe.update(tribe, {
        where: {
            id: tribe.id
        }
    });
}

const destroyTribe = async (tribe: NewTribe) => {
    console.log("tribe.ts destroyTribe: tribe", tribe)
    const retData = await Tribe.destroy({
        where: {
            id: tribe.id
        }
    });
}
export { getAllTribes, createTribe, updateTribe, destroyTribe, NewTribe }