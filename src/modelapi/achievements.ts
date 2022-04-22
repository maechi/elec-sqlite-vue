// todo this file provides an API to interact with the db server
import {Achcat, Achopt, Achievement, CharacterAchievement} from "../dbModels"
class NewAchievement {
    achievementName: string;
    categoryId: number | null;
    bonusLevel: number | null;
    singleMode: boolean;
    showSum: boolean;
    id?: number;

    constructor() {
        this.achievementName = '';
        this.categoryId = null;
        this.bonusLevel = null;
        this.singleMode = false;
        this.showSum = false;
        this.id = undefined;
    }
}

const getAllAchievements = async () => {
    const achievements = await Achievement.findAll({include: Achcat})
    return achievements
}
const getAllAchievementsWithOptions = async () => {
    const achievements = await Achievement.findAll({
        include: [
            {model: Achcat,
                include: [Achopt]
            },
            {model: CharacterAchievement}
            ]})
    return achievements
}

const createAchievement = async (achievement: NewAchievement) => {
    console.log("achievements.ts createAchievement: achievement", achievement)
    const retData = await Achievement.create(achievement)
    const addedAchievement: NewAchievement = {
        achievementName: retData.achievementName,
        categoryId: retData.categoryId,
        bonusLevel: retData.bonusLevel,
        singleMode: retData.singleMode,
        showSum: retData.showSum,
        id: retData.id
    }
    return addedAchievement
}

const updateAchievement = async (achievement: NewAchievement) => {
    console.log("achievements.ts updateAchievement: achievement", achievement)
    const retData = await Achievement.update(achievement, {
        where: {
            id: achievement.id
        }
    });
}

const destroyAchievement = async (achievement: NewAchievement) => {
    console.log("achievements.ts destroyAchievement: achievement", achievement)
    const retData = await Achievement.destroy({
        where: {
            id: achievement.id
        }
    });
}
export { getAllAchievements, getAllAchievementsWithOptions, createAchievement, updateAchievement, destroyAchievement, NewAchievement }
