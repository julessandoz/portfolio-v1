<script setup>
import { onMounted } from "vue";
import TheNav from "./components/TheNav.vue";
import TheSkills from "./components/TheSkills.vue";
import TheProjects from "./components/TheProjects.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faSquareGithub,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

library.add(faSquareGithub, faLinkedin, faSquareInstagram, faEnvelope, faFile);

const titleTag = document.querySelector("title");

onMounted(() => {
  document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden"
      ? (titleTag.innerText = "See you later! | Jules Sandoz")
      : (titleTag.innerText = "Welcome back! | Jules Sandoz");
  });

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "home":
            titleTag.innerHTML = "Home | Jules Sandoz";
            history.pushState(null, null, "#home");
            break;

          case "about":
            titleTag.innerHTML = "About | Jules Sandoz";
            history.pushState(null, null, "#about");
            break;

          case "skills":
            titleTag.innerHTML = "Skills | Jules Sandoz";
            history.pushState(null, null, "#skills");
            break;

          case "projects":
            titleTag.innerHTML = "Projects | Jules Sandoz";
            history.pushState(null, null, "#projects");
            break;

          case "contact":
            titleTag.innerHTML = "Contact | Jules Sandoz";
            history.pushState(null, null, "#contact");
            break;
          default:
            break;
        }
        if (entry.target.classList.contains("skill-bar")) {
          entry.target.classList.add("full");
          observer.unobserve(entry.target);
        }
        if (
          entry.target.classList.contains("link") ||
          entry.target.classList.contains("text-container") ||
          entry.target.classList.contains("cta-container") ||
          entry.target.classList.contains("img-container")
        ) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    });
  }
  const observer = new IntersectionObserver(callback, options);

  const sections = document.querySelectorAll("section");
  const skillBars = document.querySelectorAll(".skill-bar");
  const homeTextCta = document.querySelectorAll(
    "#home .text-container, #home .cta-container"
  );
  const imgContainer = document.querySelector("#about .img-container");

  observer.observe(imgContainer);
  homeTextCta.forEach((el) => {
    observer.observe(el);
  });

  skillBars.forEach((skillBar) => {
    observer.observe(skillBar);
  });
  sections.forEach((section) => {
    observer.observe(section);
  });
});
</script>

<template>
  <main>
    <div class="app">
      <TheNav />
      <section id="home">
        <div class="text-container">
          <h1>
            Hello there, <br />
            I'm Jules Sandoz
          </h1>
          <p class="subtitle">Digital Swiss Army Knife</p>
        </div>
        <div class="cta-container">
          <p>Scroll or</p>
          <a class="cta" href="#projects">Discover my projects</a>
        </div>
      </section>
      <section id="about">
        <div class="text-container">
          <h2>About me</h2>
          <p>
            Currently a last year student in Communication and Media Engineering in my
            home country of Switzerland, I enjoy working on websites, development,
            marketing, and UI.
          </p>
          <p>
            I’m a very curious person and love learning while solving problems. Great fan
            of the outdoors and amateur photographer, I like spending my free time in the
            mountains, hiking in the summer and snowboarding in the winter.
          </p>
          <p>Always interested in working on new projects with motivated people.</p>
          <a href="#contact">Let's work together!</a>
        </div>
        <div class="img-container">
          <img
            class="portrait-photo"
            v-webp:src="'/jules-sandoz.webp'"
            :src="'/jules-sandoz.jpg'"
            alt="Jules Sandoz"
          />
        </div>
      </section>
      <section id="skills">
        <div class="title-container">
          <h2>Skills</h2>
        </div>
        <div class="skills-bars">
          <TheSkills />
        </div>
      </section>
      <section id="projects">
        <div class="title-container">
          <h2>Projects</h2>
        </div>
        <TheProjects />
      </section>
      <section id="contact">
        <div class="title-container">
          <h2>Want to make something great together?</h2>
        </div>
        <div class="text-container">
          <p>
            I'm open to freelance or job offers, don't hesitate to reach out through my
            socials or by email!
          </p>
          <div class="socials">
            <div class="link">
              <a
                href="https://www.linkedin.com/in/jules-sandoz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon icon="fa-brands fa-linkedin" fixed-width />
              </a>
              <a
                class="contact-link"
                href="https://www.linkedin.com/in/jules-sandoz"
                target="_blank"
                rel="noopener noreferrer"
                >/jules-sandoz</a
              >
            </div>
            <div class="link">
              <a
                class="contact-link"
                href="https://www.instagram.com/julessandoz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon icon="fa-brands fa-square-instagram" fixed-width /> </a
              ><a
                class="contact-link"
                href="https://www.instagram.com/julessandoz/"
                target="_blank"
                rel="noopener noreferrer"
                >@julessandoz</a
              >
            </div>
            <div class="link">
              <a
                class="contact-link"
                href="https://github.com/julessandoz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon icon="fa-brands fa-square-github" fixed-width /> </a
              ><a
                class="contact-link"
                href="https://github.com/julessandoz/"
                target="_blank"
                rel="noopener noreferrer"
                >/julessandoz</a
              >
            </div>
            <div class="link">
              <a class="contact-link" href="mailto:contact@jules-sandoz.com">
                <font-awesome-icon icon="fa-solid fa-envelope" fixed-width /> </a
              ><a class="contact-link" href="mailto:contact@jules-sandoz.com"
                >contact@jules-sandoz.com</a
              >
            </div>
            <div class="link">
              <a
                class="contact-link"
                href="https://www.dropbox.com/s/tmg93yqnnv5lkgm/CV-JS.pdf?dl=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon icon="fa-solid fa-file" fixed-width /> </a
              ><a
                class="contact-link"
                href="https://www.dropbox.com/s/tmg93yqnnv5lkgm/CV-JS.pdf?dl=1"
                target="_blank"
                rel="noopener noreferrer"
                >Download my resume</a
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.app {
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.title-container {
  padding-left: 15vw;
  width: 60vw;
}

/*************************** HOME ***************************/
#home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
}

#home .text-container {
  min-width: 35vw;
  max-width: 40vw;
  padding: 30vh 5vw 3vh 15vw;
  overflow: hidden;
  transform: translate(0, 200px);
  transition: transform 1s ease;
}

#home .text-container.visible {
  transform: translate(0, 0);
}

#home .cta-container {
  max-width: 60vw;
  min-width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: translate(0, -200px);
  transition: transform 1s ease;
}

#home .cta-container.visible {
  transform: translate(0, 0);
}

@media only screen and (max-width: 768px) {
  #home {
    height: 100vh;
    padding-top: 13vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #home .text-container {
    min-width: 80vw;
    max-width: 80vw;
    padding: 0;
    overflow: hidden;
  }

  #home .cta-container {
    max-width: 80vw;
    min-width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  #home .cta-container p {
    margin-top: 20vh;
  }

  #home .cta-container .cta {
    height: 100%;
    font-size: clamp(1.3rem, 1.5vw, 2rem);
    width: 50%;
  }
}

/******** TEXT ********/
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bold;
  line-height: 1.2;
  margin: 0 0 4vh 0;
  padding: 0;
}

.subtitle {
  font-size: clamp(1.5rem, 2vw, 3rem);
  font-weight: medium;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

.cta-container p {
  font-size: clamp(1rem, 1.3vw, 2rem);
  font-weight: medium;
  line-height: 1.5;
  margin: 40vh 0 2vh 0;
  padding: 0;
}

a.cta {
  background-color: transparent;
  border: 2px solid #f06449;
  border-radius: 5px;
  color: #f06449;
  font-size: clamp(1rem, 1.5vw, 2rem);
  text-align: center;
  line-height: 4.5vh;
  margin: 0;
  padding: 1vh 0.2vw;
  cursor: pointer;
  width: 40%;
  height: 10%;
  transition: 0.5s ease;
}

a.cta:hover {
  width: 41%;
  height: 11%;
  line-height: 4.7vh;
  padding: 1.2vh 0.2vw;
}

.dark a.cta:hover {
  background-color: #3c6799;
}

.light a.cta:hover {
  background-color: #f3f1ef;
}

/*************************** ABOUT ***************************/
#about {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 10vh;
  padding-top: 13vh;
}

#about .text-container {
  padding-left: 15vw;
  width: 40vw;
}

#about .img-container {
  width: 60vw;
  opacity: 0;
  transform: translate(200px, 0);
  transition: opacity 2s, transform 1s ease;
}

#about .img-container.visible {
  transform: translate(0, 0);
  opacity: 1;
}

#about p,
#about a,
#contact p {
  font-size: clamp(16px, 1.2vw, 2rem);
  font-weight: medium;
  line-height: 1.5;
  margin: 0 0 2vh 0;
  padding: 0;
  text-align: justify;
}

h2 {
  font-size: clamp(1.8rem, 2.5vw, 3.5rem);
  font-weight: bold;
  line-height: 1.2;
  margin: 0 0 4vh 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #f06449;
}

a:hover {
  text-decoration: underline;
}

img.portrait-photo {
  width: 35vw;
  border-radius: 0 400% 400% 0;
  /* margin-top: 2vh; */
  float: right;
  transform: scaleX(-1);
}

@media only screen and (max-width: 768px) {
  #about {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
    margin-bottom: 10vh;
    padding-top: 5vh;
  }

  #about .text-container {
    padding: 0 5vw;
    width: auto;
  }

  #about .img-container {
    width: auto;
    opacity: 1 !important;
    transform: translate(0, 0) !important;
  }

  #about p,
  #about a,
  #contact p {
    font-size: clamp(16px, 1.2vw, 2rem);
    font-weight: medium;
    line-height: 1.5;
    margin: 0 0 2vh 0;
    padding: 0;
    text-align: left;
  }

  h2 {
    font-size: clamp(1.8rem, 2.5vw, 3.5rem);
    font-weight: bold;
    line-height: 1.2;
    margin: 0 0 4vh 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #f06449;
  }

  a:hover {
    text-decoration: underline;
  }

  img.portrait-photo {
    width: 80vw;
    height: 80vw;
    margin-top: 5vh;
    border-radius: 50%;
    transform: scaleX(-1);
  }
}

/*************************** SKILLS ***************************/
#skills {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 13vh;
}

#skills .skills-bars {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  #skills {
    padding-top: 5vh;
  }
}

/*************************** PROJECTS ***************************/
#projects {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 13vh;
}

@media only screen and (max-width: 768px) {
  #projects {
    padding-top: 5vh;
  }
}

/*************************** CONTACT ***************************/
#contact {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 13vh;
}

#contact .text-container {
  padding-left: 15vw;
  width: 40vw;
}

.socials {
  margin-top: 10vh;
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20vh;
}

.socials .link {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3vh;
}

.socials a {
  font-size: clamp(16px, 1.2vw, 2rem);
  line-height: 1.5;
}

.socials svg {
  font-size: 4em;
  margin-bottom: 0.5vh;
}

.dark svg {
  color: #ede6e3 !important;
}

.light svg {
  color: #3c6799 !important;
}

@media only screen and (max-width: 768px) {
  #contact {
    padding-top: 8vh;
  }

  #contact .text-container {
    width: 78vw;
  }
}
</style>
