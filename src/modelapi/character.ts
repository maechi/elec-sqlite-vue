// todo this file provides an API to interact with the db server
import { Character } from "../dbModels"
class NewCharacter {
    characterName: string;
    level: number;
    id?: number;

    constructor() {
        this.characterName = ''
        this.level = 1
        this.id = undefined
    }
}

const getAllCharacters = async () => {
    const characters = await Character.findAll()
    return characters
}

const createCharacter = async (character: NewCharacter) => {
    console.log("character.ts createCharacter: character", character)
    const retData = await Character.create(character)
    const addedCharacter: NewCharacter = {
        characterName: retData.characterName,
        level: retData.level,
        id: retData.id
    }
    return addedCharacter
}

const updateCharacter = async (character: NewCharacter) => {
    console.log("character.ts updateCharacter: character", character)
    const retData = await Character.update(character, {
        where: {
            id: character.id
        }
    });
}

const destroyCharacter = async (character: NewCharacter) => {
    console.log("character.ts destroyCharacter: character", character)
    const retData = await Character.destroy({
        where: {
            id: character.id
        }
    });
}
export { getAllCharacters, createCharacter, updateCharacter, destroyCharacter, NewCharacter }
