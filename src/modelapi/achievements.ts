// todo this file provides an API to interact with the db server
import {Achcat, Achievement} from "../dbModels"
class NewAchievement {
    achievementName: string;
    categoryId: number | null;
    bonusLevel: boolean;
    singleMode: boolean;
    showSum: boolean;
    id?: number;

    constructor() {
        this.achievementName = '';
        this.categoryId = null;
        this.bonusLevel = false;
        this.singleMode = false;
        this.showSum = false;
        this.id = undefined;
    }
}

const getAllAchievements = async () => {
    const achievements = await Achievement.findAll({include: Achcat})
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
export { getAllAchievements, createAchievement, updateAchievement, destroyAchievement, NewAchievement }
