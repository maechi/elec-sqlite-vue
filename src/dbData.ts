// initial Data

import {Server, Tribe, Achcat, Achopt, Achievement, Character, CharacterAchievement} from './dbModels'

function importDemoServers() {
    return Server.bulkCreate([
        {id: 1, serverName: 'Server 1', mapName: 'Map A'},
        {id: 2, serverName: 'Server 2', mapName: 'Map B'},
        {id: 3, serverName: 'Server 3', mapName: 'Map C'}
    ], { validate: true })
}

function importDemoTribes() {
    return Tribe.bulkCreate([
        {id: 1, tribeName: 'Tribe 1', serverId: 1},
        {id: 2, tribeName: 'Tribe 2', serverId: 2},
        {id: 3, tribeName: 'Tribe 3.1', serverId: 3},
        {id: 4, tribeName: 'Tribe 3.2', serverId: 3}
    ], { validate: true })

}

function importDemoAchcats() {
    return Achcat.bulkCreate([
        {id: 1, achcatName: 'Chibi'},
        {id: 2, achcatName: 'Boss'},
        {id: 3, achcatName: 'Gen1 Mission'},
        {id: 4, achcatName: 'Gen2 Mission'},
        {id: 101, achcatName: 'A-Category 1'},
        {id: 102, achcatName: 'A-Category 2'},
        {id: 103, achcatName: 'A-Category 3'}
    ], { validate: true })

}

function importDemoAchopt() {
     return Achopt.bulkCreate([
         // Chibi
         {id: 1, achoptName: 'Level 1', categoryId: 1},
         {id: 2, achoptName: 'Level 2', categoryId: 1},
         {id: 3, achoptName: 'Level 3', categoryId: 1},
         {id: 4, achoptName: 'Level 4', categoryId: 1},
         {id: 5, achoptName: 'Level 5', categoryId: 1},
         // Boss
         {id: 11, achoptName: 'Gamma', categoryId: 2},
         {id: 12, achoptName: 'Beta', categoryId: 2},
         {id: 13, achoptName: 'Alpha', categoryId: 2},
         // Gen1 Mission
         {id: 21, achoptName: 'Gamma', categoryId: 3},
         {id: 22, achoptName: 'Beta', categoryId: 3},
         {id: 23, achoptName: 'Alpha', categoryId: 3},
         // Gen2 Mission
         {id: 31, achoptName: 'Gamma', categoryId: 4},
         {id: 32, achoptName: 'Beta', categoryId: 4},
         {id: 33, achoptName: 'Alpha', categoryId: 4},

         {id: 101, achoptName: 'C1-Option 1.2', categoryId: 101},
         {id: 102, achoptName: 'C1-Option 1.3', categoryId: 101},
         {id: 103, achoptName: 'C1-Option 2.1', categoryId: 102},
         {id: 104, achoptName: 'C1-Option 2.2', categoryId: 102},
         {id: 105, achoptName: 'C1-Option 3.1', categoryId: 103},
         {id: 106, achoptName: 'C1-Option 3.2', categoryId: 103}
     ], { validate: true })

 }

function importDemoAchievements() {
    return Achievement.bulkCreate([
        {id: 1, achievementName: 'Chibi Level', categoryId: 1, bonusLevel: 1, singleMode: true, showSum: false},

        {id: 11, achievementName: 'Broodmother',       categoryId: 2, bonusLevel: null, singleMode: true, showSum: false},
        {id: 12, achievementName: 'Megapicethus',      categoryId: 2, bonusLevel: null, singleMode: true, showSum: false},
        {id: 13, achievementName: 'Dragon',            categoryId: 2, bonusLevel: null, singleMode: true, showSum: false},
        {id: 14, achievementName: 'Manticore',         categoryId: 2, bonusLevel: null, singleMode: true, showSum: false},
        {id: 15, achievementName: 'Dinopithecus King', categoryId: 2, bonusLevel: null, singleMode: true, showSum: false},
        {id: 16, achievementName: 'King Titan',        categoryId: 2, bonusLevel: null, singleMode: true, showSum: false},

        {id: 21, achievementName: 'Overseer',           categoryId: 2, bonusLevel: 5, singleMode: true, showSum: false},
        {id: 22, achievementName: 'Rockwell',           categoryId: 2, bonusLevel: 5, singleMode: true, showSum: false},
        {id: 23, achievementName: 'Master Controller', categoryId: 2, bonusLevel: 5, singleMode: true, showSum: false},
        {id: 24, achievementName: 'Rockwell Gen2',     categoryId: 2, bonusLevel: 5, singleMode: true, showSum: false},

        {id: 31, achievementName: 'Choose Your Own Adventure', categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 32, achievementName: 'Circuit Chase',      categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 33, achievementName: 'Code Red',           categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 34, achievementName: 'Downriver Run',      categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 35, achievementName: 'Ferox Cull',         categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 36, achievementName: 'Life Support',       categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 37, achievementName: 'Maewing Poach',      categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 38, achievementName: 'Paracer Roundup',    categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 39, achievementName: 'Shadowmane Prowl',   categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 40, achievementName: 'Slide and Glide',    categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 41, achievementName: 'Slipstream Sweep',   categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 42, achievementName: 'Star Dolphin',       categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 43, achievementName: 'Starwing Strike',    categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 44, achievementName: 'Survive the ARK',    categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 45, achievementName: 'Team Downriver Run', categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 46, achievementName: 'Velonasaur Stalk',   categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},
        {id: 47, achievementName: 'Bulbdog Fetch',      categoryId: 4, bonusLevel: null, singleMode: false, showSum: true},

        {id: 101, achievementName: 'Achievement 1.1', categoryId: 101, bonusLevel: null, singleMode: false, showSum: false},
        {id: 102, achievementName: 'Achievement 1.2', categoryId: 101, bonusLevel: null, singleMode: false, showSum: false},
        {id: 103, achievementName: 'Achievement 1.3', categoryId: 101, bonusLevel: null, singleMode: false, showSum: false},
        {id: 104, achievementName: 'Achievement 2.1', categoryId: 102, bonusLevel: null, singleMode: false, showSum: false},
        {id: 105, achievementName: 'Achievement 2.2', categoryId: 102, bonusLevel: null, singleMode: false, showSum: false},
        {id: 106, achievementName: 'Achievement 3.1', categoryId: 103, bonusLevel: null, singleMode: false, showSum: false},
        {id: 107, achievementName: 'Achievement 3.2', categoryId: 103, bonusLevel: null, singleMode: false, showSum: false}
    ], { validate: true })

}

function importDemoCharacters() {
    return Character.bulkCreate([
        {id: 1, characterName: 'Character 1', level: 10},
        {id: 2, characterName: 'Character 2', level: 20},
        {id: 3, characterName: 'Character 3', level: 30},
    ], { validate: true })

}

function importDemoCharacterAchievements() {
    return CharacterAchievement.bulkCreate([
        {id: 1, characterId: 1, achievementId: 1, achievementOptionId: 3}
    ], {validate: true})
}

function importDemoData() {
    //
    console.log("start importDemoData");
    importDemoServers()
        .then(() => importDemoTribes()
            .then(() => importDemoAchcats()
                .then(() => importDemoAchopt()
                    .then(() => importDemoAchievements()
                        .then(() => importDemoCharacters()
                            .then(() => importDemoCharacterAchievements()
                                .then(() => console.log("end importDemoData"))
                            )
                        )
                    )
                )
            )
        )
}

export {importDemoData}