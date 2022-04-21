// todo this file provides an API to interact with the db server
import { Achopt, Achcat } from "../dbModels"
class NewAchopt {
    achoptName: string
    categoryId: number | null
    id?: number

    constructor() {
        this.achoptName = ''
        this.categoryId = null
        this.id = undefined
    }
}

const getAllAchopt = async () => {
    const achopts = await Achopt.findAll({ include: Achcat })
    return achopts
}

const createAchopt = async (achopt: NewAchopt) => {
    console.log("achievement_option.ts createAchopt: achopt", achopt)
    const retData = await Achopt.create(achopt)
    const addedAchopt: NewAchopt = {
        achoptName: retData.achoptName,
        categoryId: retData.categoryId,
        id: retData.id
    }
    return addedAchopt
}

const updateAchopt = async (achopt: NewAchopt) => {
    console.log("achievement_option.ts updateAchopt: achopt", achopt)
    const retData = await Achopt.update(achopt, {
        where: {
            id: achopt.id
        }
    });
}

const destroyAchopt = async (achopt: NewAchopt) => {
    console.log("achievement_option.ts destroyAchopt: achopt", achopt)
    const retData = await Achopt.destroy({
        where: {
            id: achopt.id
        }
    });
}
export { getAllAchopt, createAchopt, updateAchopt, destroyAchopt, NewAchopt }