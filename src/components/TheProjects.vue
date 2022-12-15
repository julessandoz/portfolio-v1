<script setup>
import { ref } from "vue";
import TheProjectTile from "./TheProjectTile.vue";
import projects from "../assets/projects.json";
const projectsKeys = ref(Object.keys(projects));
const projectsArray = [];
const projectsCount = ref(projectsArray.length);
const showMore = ref(false);
const showMoreBtn = ref(projectsCount.value > 6);
const categories = new Set();
const technologies = new Set();
const allProjects = [];
const projectKey = ref(0);
for (let i = 0; i < projectsKeys.value.length; i++) {
  allProjects.push({
    project: projectsKeys.value[i],
    name: projects[projectsKeys.value[i]].Name,
    desc: projects[projectsKeys.value[i]].Description,
    image: projects[projectsKeys.value[i]].Image,
    webp: projects[projectsKeys.value[i]].WebP,
    website: projects[projectsKeys.value[i]].Website,
    github: projects[projectsKeys.value[i]].Github,
    projectFolder: projects[projectsKeys.value[i]].ProjectFolder,
    tech: projects[projectsKeys.value[i]].Technologies,
    cat: projects[projectsKeys.value[i]].Categories,
  });
  projects[projectsKeys.value[i]].Categories.forEach((cat) => {
    categories.add(cat);
  });
  projects[projectsKeys.value[i]].Technologies.forEach((tech) => {
    technologies.add(tech);
  });
}

const showCategoriesFilter = ref(false);
const showTechnologiesFilter = ref(false);
const selectedCategories = new Set();
const selectedTechnologies = new Set();
const activeFilters = ref(false);

function checkCategoryList() {
  showCategoriesFilter.value = !showCategoriesFilter.value;
  document.getElementById("category-title").classList.toggle("active");
  showCategoriesFilter.value &&
  document.getElementById("technology-title").classList.contains("active")
    ? checkTechnologyList()
    : null;
}

function checkTechnologyList() {
  showTechnologiesFilter.value = !showTechnologiesFilter.value;
  document.getElementById("technology-title").classList.toggle("active");
  showTechnologiesFilter.value &&
  document.getElementById("category-title").classList.contains("active")
    ? checkCategoryList()
    : null;
}

function checkCategoryFilter(event) {
  const target = event.target;
  target.parentElement.classList.toggle("active");
  if (target.checked) {
    selectedCategories.add(target.dataset.cat);
  } else {
    selectedCategories.delete(target.dataset.cat);
  }
  updateProjectsArray();
}

function checkTechnologyFilter(event) {
  const target = event.target;
  target.parentElement.classList.toggle("active");
  if (target.checked) {
    selectedTechnologies.add(target.dataset.tech);
  } else {
    selectedTechnologies.delete(target.dataset.tech);
  }
  updateProjectsArray();
}

function updateProjectsArray() {
  // Reset the projects array
  projectsArray.length = 0;

  // Loop through all projects
  for (let i = 0; i < allProjects.length; i++) {
    let catMatch = selectedCategories.size === 0;
    let techMatch = selectedTechnologies.size === 0;

    // Check if the current project matches the selected categories
    if (!catMatch) {
      for (let j = 0; j < allProjects[i].cat.length; j++) {
        if (selectedCategories.has(allProjects[i].cat[j])) {
          catMatch = true;
          break;
        }
      }
    }

    // Check if the current project matches the selected technologies
    if (!techMatch) {
      for (let j = 0; j < allProjects[i].tech.length; j++) {
        if (selectedTechnologies.has(allProjects[i].tech[j])) {
          techMatch = true;
          break;
        }
      }
    }

    // If the project matches both categories and technologies, add it to the array
    if (catMatch && techMatch) {
      projectsArray.push(allProjects[i]);
    }
  }

  // Update the count of projects and show/hide the "show more" button
  projectsCount.value = projectsArray.length;
  showMoreBtn.value = projectsCount.value > 6;
  showMore.value = false;
  projectKey.value += 1;
  selectedCategories.size > 0 || selectedTechnologies.size > 0
    ? (activeFilters.value = true)
    : (activeFilters.value = false);
}

function resetAllFilters() {
  selectedCategories.clear();
  selectedTechnologies.clear();
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.parentElement.classList.remove("active");
  });
  updateProjectsArray();
}

updateProjectsArray();
</script>

<template>
  <div class="filter-container">
    <h3>Filter</h3>
    <div class="reset" v-if="activeFilters" @click="resetAllFilters()">Reset All</div>
    <div class="filter">
      <div
        class="filter-title"
        id="category-title"
        for="category"
        @click="checkCategoryList()"
      >
        Categories
      </div>
      <div class="filter-options">
        <div
          class="filter-option"
          v-show="showCategoriesFilter"
          v-for="category in categories"
          :key="category"
        >
          <input
            type="checkbox"
            :id="category"
            :data-cat="category"
            @input="checkCategoryFilter($event)"
          />
          <label :for="category">{{ category }}</label>
        </div>
      </div>
    </div>
    <div class="filter">
      <div
        class="filter-title"
        id="technology-title"
        for="technologyFilter"
        @click="checkTechnologyList()"
      >
        Technologies
      </div>
      <div class="filter-options">
        <div
          class="filter-option"
          v-show="showTechnologiesFilter"
          v-for="technology in technologies"
          :key="technology"
        >
          <input
            type="checkbox"
            :id="technology"
            :data-tech="technology"
            @input="checkTechnologyFilter($event)"
          />
          <label :for="technology">{{ technology }}</label>
        </div>
      </div>
    </div>
  </div>
  <div class="projects-container">
    <TheProjectTile
      v-for="project in projectsArray.slice(0, 6)"
      :key="projectKey"
      :id="project.project"
      :name="project.name"
      :desc="project.desc"
      :img="project.image"
      :webp="project.webp"
      :website="project.website"
      :github="project.github"
      :projectFolder="project.projectFolder"
      :tech="project.tech"
      :categories="project.cat"
    />
    <div class="more-container projects-container">
      <TheProjectTile
        v-if="showMore"
        v-for="project in projectsArray.slice(6)"
        :id="project.project"
        :name="project.name"
        :desc="project.desc"
        :img="project.image"
        :webp="project.webp"
        :website="project.website"
        :github="project.github"
        :projectFolder="project.projectFolder"
        :tech="project.tech"
        :categories="project.cat"
      />
    </div>
  </div>
  <div class="cta-container" v-if="showMoreBtn">
    <button v-if="!showMore" class="cta" @click="showMore = true">Show more</button>
    <button v-if="showMore" class="cta" @click="showMore = false">Show less</button>
  </div>
</template>

<style>
.filter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0;
  padding: 0vh 5vw 2vh 15vw;
}

.filter-container h3 {
  font-size: clamp(1.6rem, 2.1vw, 3.1rem);
  margin: 0 0 2vh 0;
}

.filter-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: clamp(1.2rem, 1.5vw, 2rem);
  margin: 0 0 1vh 0;
  cursor: pointer;
  border: 2px solid #3c6799;
  border-radius: 5px;
  width: 15vw;
  height: 3.5vh;
  transition: background-color 0.3s ease-in-out;
}

.filter-title.active,
.filter-title:hover {
  background-color: #3c6799;
  color: #f3f1ef;
}

.filter-title.active:hover {
  background-color: #f3f1ef;
  color: #3c6799;
}

.filter-options {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 2vh 0;
  padding: 0;
}

.filter-option {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid #3c6799;
  border-radius: 5px;
  width: 15vw;
  height: 2.5vh;
  margin: 0 0 1vh 0;
  padding: 0;
  transition: background-color 0.3s ease-in-out;
}

.filter-option.active,
.filter-option:hover {
  background-color: #3c6799;
  color: #f3f1ef;
}

.filter-option.active:hover {
  background-color: #f3f1ef;
  color: #3c6799;
}

.filter-options input[type="checkbox"] {
  display: none;
}

.filter-option label {
  width: 100%;
  height: 90%;
  text-align: center;
}

.reset {
  margin: 0 0 2vh 0;
  padding: 0;
  font-size: clamp(1rem, 1.3vw, 1.5rem);
  cursor: pointer;
  color: #f06449;
  text-decoration: underline;
}

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
  width: 18%;
  height: 11%;
}

.dark button.cta:hover {
  background-color: #3c6799;
}

.light button.cta:hover {
  background-color: #f3f1ef;
}
</style>
