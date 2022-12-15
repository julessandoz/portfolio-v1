<script setup>
import { ref } from "vue";
const props = defineProps({
  id: {},
  name: {},
  desc: {},
  img: {},
  webp: {},
  categories: {},
  tech: {},
  website: {},
  github: {},
  projectFolder: {},
});
const modal = ref(false);
const bgColor = ref();
function toggleModal(e) {
  console.log(e.target.classList.contains("toggle"));
  if (e.target.classList.contains("toggle")) {
    modal.value = !modal.value;
    modal.value
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
    document.body.classList.contains("dark")
      ? (bgColor.value = "#2e5077")
      : (bgColor.value = "#ede6e3");
  }
}
</script>

<template>
  <div
    class="tile-container"
    :id="id"
    @click="toggleModal($event)"
    :data-cat="categories"
  >
    <img v-webp:src="webp" :src="img" :alt="name" />
    <div class="tile-overlay toggle"></div>
    <div class="overlay-text toggle">
      <h3 class="tile-title toggle">{{ name }}</h3>
    </div>
  </div>
  <div class="modal-container toggle" @click="toggleModal($event)" v-if="modal">
    <div class="modal" @click="">
      <div class="modal-header">
        <span class="material-symbols-outlined closeBtn toggle">close</span>
        <div class="header-image">
          <img class="banner" v-webp:src="webp" :src="img" :alt="name" />
        </div>
        <div class="header-text">
          <h3>{{ name }}</h3>
        </div>
      </div>
      <div class="modal-body">
        <div class="description-container">
          <p>{{ desc }}</p>
        </div>
        <div class="links-container">
          <a
            class="project-link"
            :href="website"
            target="_blank"
            rel="noopener noreferrer"
            v-if="website"
            >Website</a
          >
          <a
            class="project-link"
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            v-if="github"
            >Github</a
          >
          <a
            class="project-link"
            :href="projectFolder"
            target="_blank"
            rel="noopener noreferrer"
            v-if="projectFolder"
            >Folder (FR)</a
          >
        </div>
        <div class="tech-container">
          <h4>Technologies used</h4>
          <ol class="tech-list">
            <li class="tech-item" v-for="tech in tech" :key="tech">{{ tech }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tile-container {
  position: relative;
  top: 4vh;
  left: 0;
  width: 400px;
  height: 400px;
  margin: 2% 0;
  border-radius: 5%;
  transition: top 1s ease;
}

.tile-container.visible {
  top: 0;
}

.modal-container .tile-container {
  top: 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.tile-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #2e5077;
}

.tile-container:hover .tile-overlay {
  opacity: 0.6;
  border-radius: 5%;
}

.overlay-text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  color: #ede6e3;
  margin: 0;
  padding: 0;
}

.tile-container:hover .overlay-text {
  opacity: 1;
}

.overlay-text h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  overflow-y: hidden;
}

.modal {
  position: relative;
  width: 40%;
  height: 90%;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: v-bind(bgColor);
}

.modal-header {
  position: relative;
  width: 100%;
  height: 35%;
  overflow-y: hidden;
}

.modal-body {
  position: relative;
  width: 80%;
  height: 65%;
  padding-top: 5%;
  overflow-x: hidden;
  overflow-y: hidden;
}

.description-container p {
  font-size: 1rem;
  font-weight: medium;
  line-height: 1.5rem;
  text-align: justify;
}

.links-container {
  position: relative;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10% 0;
}

.project-link {
  font-size: 1.1rem;
  font-weight: bold;
  color: #ede6e3;
  text-decoration: none;
  text-align: center;
  width: 20%;
  height: 70%;
  padding-top: 3%;
  background-color: #f06449;
  border-radius: 5%;
}

.project-link:hover {
  border-color: transparent;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.2);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  margin: 0;
}

.tech-item {
  /* list-style: none; */
  font-size: 1rem;
  font-weight: medium;
  margin: 1%;
  padding: 0;
}

.closeBtn {
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 2rem;
  cursor: pointer;
  color: #f06449;
  z-index: 107;
}

.header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: 105;
}

.header-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: 106;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(237, 230, 227, 0.6);
  color: #2e5077;
  font-size: 2.3rem;
}
@media only screen and (max-width: 768px) {
  .tile-overlay {
    opacity: 0.6;
    border-radius: 5%;
  }
  .overlay-text {
    opacity: 1;
  }

  .overlay-text h3 {
    text-align: center;
  }

  .modal {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    z-index: 999;
  }

  .modal-header {
    height: 20%;
    z-index: 998;
  }

  .modal-header .header-text {
    text-align: center;
  }

  .modal-body {
    height: 75%;
    padding-top: 3vh;
  }

  .description-container p {
    font-size: 0.95rem;
    font-weight: medium;
    line-height: 1.5rem;
    text-align: justify;
  }

  .project-link {
    width: 28%;
    height: auto;
    padding: 3% 1%;
    font-size: clamp(0.9rem, 1.3vw, 1.5rem);
  }

  .cta-container button.cta {
    width: 45%;
    height: 15%;
    font-size: clamp(1.3rem, 1.5vw, 2rem);
  }
}
</style>
