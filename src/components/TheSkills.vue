<script setup>
import TheSkillBar from "./TheSkillBar.vue";
import skills from "../assets/skills.json";
const skillsKeys = Object.keys(skills);
const skillsCount = skillsKeys.length;
const skillsArray = [];
for (let i = 0; i < skillsCount; i++) {
  skillsArray.push({
    skill: skillsKeys[i],
    name: skills[skillsKeys[i]].skillName,
    percentage: skills[skillsKeys[i]].percentage,
    color: skills[skillsKeys[i]].color,
  });
}
</script>

<template>
  <div class="skills-container">
    <div class="skills-column">
        <TheSkillBar
            v-for="skill in skillsArray.slice(0, (skillsCount/2)+(skillsCount%2))"
            :key="skill.skill"
            :skill="skill.name"
            :percentage="skill.percentage"
            :color="skill.color"
      />
    </div>
    <div class="skills-column">
        <TheSkillBar
            v-for="skill in skillsArray.slice((skillsCount/2)+(skillsCount%2), skillsCount)"
            :key="skill.skill"
            :skill="skill.name"
            :percentage="skill.percentage"
            :color="skill.color"
      />
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  margin: 0;
  padding: 0vh 5vw 0vh 8vw;
}
.skills-column {
  width: 30vw;
  height: auto;
}

@media only screen and (max-width: 768px) {
  .skills-container {
    flex-direction: column;
    align-items: center;
    padding: 0vh 5vw 0vh 5vw;
  }
  .skills-column {
    width: 90vw;
  }

  .skills-column:nth-child(2) {
    margin-top: -2vh;
  }
}
</style>
