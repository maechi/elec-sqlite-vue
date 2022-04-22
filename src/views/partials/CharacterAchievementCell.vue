<template>
    <template v-if="this.achievement.singleMode">
        <select class="form-select" v-model="this.characterAchievement.achievementOptionId">
            <option value=""></option>
            <option v-for="achopts in this.achievement.Achcat.Achopts" :key="achopts.id" :value="achopts.id">
                {{ achopts.achoptName}}
            </option>
        </select>
    </template>

    <template v-else>
        <template v-for="achopts in this.achievement.Achcat.Achopts" :key="achopts.id">
            <input type="checkbox"> {{ achopts.achoptName }}<br/>
        </template>
    </template>



    <pre >{{ characterAchievements }}</pre>
</template>

<script>
    import {defineComponent} from 'vue'
    import {Op} from "sequelize";
    import {CharacterAchievement} from "@/dbModels";

    export default defineComponent({
        name: "CharacterAchievementCell",
        props: {
            achievement: Object,
            character: Object
        },
        data() {
            return {
                characterAchievements: {}
            }
        },
        computed: {
            characterAchievement: function () {
                if(this.characterAchievements.length == 1) {
                    return this.characterAchievements[0]
                }
                return false
            }
        },
        mounted() {
            this.loadCharacterAchievements();
        },
        methods: {
            loadCharacterAchievements: function () {
                CharacterAchievement.findAll({
                    where: {
                        [Op.and]: {
                            characterId: this.character.id,
                            achievementId: this.achievement.id
                        }
                    }
                })
                    .then(result => {
                        console.log("loadCharacterAchievement result", result);
                        this.characterAchievements = result;
                    })
                    .catch(error => {
                        console.log("loadCharacterAchievement error", error);
                    })
            }
        }
    })
</script>