<script setup>
import { ref } from "vue";
import TheProjectTile from './TheProjectTile.vue';
import projects from '../assets/projects.json';
const projectsKeys = Object.keys(projects);
const projectsCount = projectsKeys.length;
const projectsArray = [];
const showMore = ref(false);
for (let i = 0; i < projectsCount; i++) {
    projectsArray.push({
        project: projectsKeys[i],
        name: projects[projectsKeys[i]].Name,
        desc: projects[projectsKeys[i]].Description,
        image: projects[projectsKeys[i]].Image,
        webp: projects[projectsKeys[i]].WebP,
        website: projects[projectsKeys[i]].Website,
        github: projects[projectsKeys[i]].Github,
        projectFolder: projects[projectsKeys[i]].ProjectFolder,
        tech: projects[projectsKeys[i]].Technologies,
        cat: projects[projectsKeys[i]].Categories,
    });
}

</script>

<template>
    <div class="projects-container">
        <TheProjectTile v-for="project in projectsArray.slice(0, 6)" :id="project.project" :name="project.name"
            :desc="project.desc" :img="project.image" :webp="project.webp" :website="project.website" :github="project.github"
            :projectFolder="project.projectFolder" :tech="project.tech" :categories="project.cat" />
        <TheProjectTile v-if="showMore" v-for="project in projectsArray.slice(6)" :id="project.project" :name="project.name"
            :desc="project.desc" :img="project.image" :webp="project.webp" :website="project.website" :github="project.github"
            :projectFolder="project.projectFolder" :tech="project.tech" :categories="project.cat" />        
    </div>
    <div class="cta-container">
        <button v-if="!showMore" class="cta" @click="showMore = true">Show more</button>
        <button v-if="showMore" class="cta" @click="showMore = false">Show less</button>
    </div>
</template>

<style>
.projects-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 0;
    padding: 0vh 5vw 5vh 13vw;
}

.cta-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0;
    padding: 0vh 5vw 5vh 13vw;
}

button.cta {
    background-color: transparent;
    border: 2px solid #f06449;
    border-radius: 5px;
    color: #f06449;
    font-size: clamp(1rem, 1.5vw, 2rem);
    padding: 0.5rem 1rem;
    margin: 0;
    cursor: pointer;
    width: 16%;
    height: 10%;
    transition: background-color 0.5s ease, width 0.5s ease, height 0.5s ease;
}

button.cta:hover {
    background-color: #3c6799;
    width: 18%;
    height: 11%;
}
</style>