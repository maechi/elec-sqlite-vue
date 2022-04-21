// todo this file provides an API to interact with the db server
import { Achcat } from "../dbModels"
class NewAchcat {
    achcatName: string;
    id?: number;

    constructor() {
        this.achcatName = ''
        this.id = undefined
    }
}

const getAllAchcat = async () => {
    const achcats = await Achcat.findAll()
    return achcats
}

const createAchcat = async (achcat: NewAchcat) => {
    console.log("achievement_category.ts createAchcat: achcat", achcat)
    const retData = await Achcat.create(achcat)
    const addedAchcat: NewAchcat = {
        achcatName: retData.achcatName,
        id: retData.id
    }
    return addedAchcat
}

const updateAchcat = async (achcat: NewAchcat) => {
    console.log("achievement_category.ts updateAchcat: achcat", achcat)
    const retData = await Achcat.update(achcat, {
        where: {
            id: achcat.id
        }
    });
}

const destroyAchcat = async (achcat: NewAchcat) => {
    console.log("achievement_category.ts destroyAchcat: achcat", achcat)
    const retData = await Achcat.destroy({
        where: {
            id: achcat.id
        }
    });
}
export { getAllAchcat, createAchcat, updateAchcat, destroyAchcat, NewAchcat }