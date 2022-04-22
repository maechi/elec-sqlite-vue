// initial Data

import { Server, Tribe, Achcat, Achopt, Achievement, Character } from './dbModels'

function importDemoData() {
    Server.bulkCreate([
        {id: 1, serverName: 'Server 1', mapName: 'Map A'},
        {id: 2, serverName: 'Server 2', mapName: 'Map B'},
        {id: 3, serverName: 'Server 3', mapName: 'Map C'}
    ]);
    /**/
    Tribe.bulkCreate([
        {id: 1, tribeName: 'Tribe 1', serverId: 1},
        {id: 2, tribeName: 'Tribe 2', serverId: 2},
        {id: 3, tribeName: 'Tribe 3.1', serverId: 3},
        {id: 4, tribeName: 'Tribe 3.2', serverId: 3}
    ]);

    Achcat.bulkCreate([
        {id: 1, achcatName: 'A-Category 1'},
        {id: 2, achcatName: 'A-Category 2'},
        {id: 3, achcatName: 'A-Category 3'}
    ]);

    Achopt.bulkCreate([
        {id: 1, achoptName: 'C1-Option 1.1', categoryId: 1},
        {id: 2, achoptName: 'C1-Option 1.2', categoryId: 1},
        {id: 3, achoptName: 'C1-Option 1.3', categoryId: 1},
        {id: 4, achoptName: 'C1-Option 2.1', categoryId: 2},
        {id: 5, achoptName: 'C1-Option 2.2', categoryId: 2},
        {id: 6, achoptName: 'C1-Option 3.1', categoryId: 3},
        {id: 7, achoptName: 'C1-Option 3.2', categoryId: 3}
    ]);

    Achievement.bulkCreate([
        {id: 1, achievementName: 'Achievement 1.1', categoryId: 1, bonusLevel: false, singleMode: false, showSum: false},
        {id: 2, achievementName: 'Achievement 1.2', categoryId: 1, bonusLevel: false, singleMode: false, showSum: false},
        {id: 3, achievementName: 'Achievement 1.3', categoryId: 1, bonusLevel: false, singleMode: false, showSum: false},
        {id: 4, achievementName: 'Achievement 2.1', categoryId: 2, bonusLevel: false, singleMode: false, showSum: false},
        {id: 5, achievementName: 'Achievement 2.2', categoryId: 2, bonusLevel: false, singleMode: false, showSum: false},
        {id: 6, achievementName: 'Achievement 3.1', categoryId: 3, bonusLevel: false, singleMode: false, showSum: false},
        {id: 7, achievementName: 'Achievement 3.2', categoryId: 3, bonusLevel: false, singleMode: false, showSum: false}
    ]);

    Character.bulkCreate([
        {id: 1, characterName: 'Character 1', level: 10},
        {id: 2, characterName: 'Character 2', level: 20},
        {id: 3, characterName: 'Character 3', level: 30},
    ]);
    /**/
}

export {importDemoData}