<script setup>
import { ref, watchEffect, computed } from "vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faXmark);
window.addEventListener("resize", checkScreen);
window.addEventListener("hashchange", function () {
  const hash = window.location.hash;
  const navLinks = document.querySelectorAll(".links a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === hash) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

const displayMode = ref("light");
const displayModeCode = ref("rgba(237, 230, 227, 0.95)");
const logoPath = ref(`/logo-JS-${displayMode.value}.jpg`);
const logoPathWebp = ref(`/logo-JS-${displayMode.value}.webp`);
watchEffect(() => {
  logoPath.value = `url(/logo-JS-${displayMode.value}.jpg)`;
  logoPathWebp.value = `url(/logo-JS-${displayMode.value}.webp)`;
});

function toggleMode() {
  displayMode.value === "dark"
    ? (displayMode.value = "light")
    : (displayMode.value = "dark");
  if (displayMode.value === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    document.querySelectorAll(".theme-switcher-icon").forEach((icon) => {
      icon.classList.remove("lightMode");
      icon.classList.add("darkMode");
    });
    displayModeCode.value = "rgba(46, 80, 119, 0.95)";
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.querySelectorAll(".theme-switcher-icon").forEach((icon) => {
      icon.classList.add("lightMode");
      icon.classList.remove("darkMode");
    });
    displayModeCode.value = "rgba(237, 230, 227, 0.95)";
  }
}

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value;
  document.body.style.overflowY = mobileNav.value ? "hidden" : "auto";
}

const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(window.innerWidth);
const displayHamburger = computed(() => {
  return mobileNav && mobile;
});

function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 768) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
  return;
}
checkScreen();

function scrollToSection(e) {
  e.preventDefault();
  let target = e.target.attributes.href ? e.target.attributes.href.value : "#home";
  const section = document.querySelector(target);
  section.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <nav>
    <div class="nav-container">
      <div class="logo">
        <a href="#home" @click="scrollToSection($event)">
          <div class="logo-img" v-webp:bgs="[logoPathWebp, logoPath]"></div>
        </a>
      </div>
      <div class="hamb">
        <span class="hamburger" @click="toggleMobileNav()" v-if="displayHamburger">
          <font-awesome-icon icon="fa-solid fa-bars" fixed-width /> </span
        ><span class="xmark" @click="toggleMobileNav()" v-else>
          <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
        </span>
      </div>
      <button class="side-menu" />
      <div class="links" v-show="!mobile">
        <a href="#about" @click="scrollToSection($event)">About</a>
        <a href="#skills" @click="scrollToSection($event)">Skills</a>
        <a href="#projects" @click="scrollToSection($event)">Projects</a>
        <a href="#contact" @click="scrollToSection($event)">Contact</a>
        <div class="theme-switcher">
          <div class="theme-switcher-icon lightMode" @click="toggleMode()"></div>
        </div>
      </div>
      <div class="dropdown-links links" v-show="mobileNav">
        <a href="#about" @click="toggleMobileNav()">About</a>
        <a href="#skills" @click="toggleMobileNav()">Skills</a>
        <a href="#projects" @click="toggleMobileNav()">Projects</a>
        <a href="#contact" @click="toggleMobileNav()">Contact</a>
        <div class="theme-switcher">
          <div class="theme-switcher-icon lightMode" @click="toggleMode()"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.hamb {
  display: none;
  position: relative;
  width: 30px;
  height: 30px;
  z-index: 1;
}

/* media query for mobile */
@media (max-width: 768px) {
  .logo {
    position: absolute;
    top: 0;
    left: 0;
  }

  .logo-img {
    width: 80px;
    height: 80px;
    background-size: cover;
    /* background-image: v-bind(logoPath); */
  }

  .hamb {
    display: block;
    position: fixed;
    top: 20px;
    right: 40px;
    z-index: 2;
    font-size: 2em;
    cursor: pointer;
  }

  .xmark {
    display: block;
    position: fixed;
    top: 10px;
    right: 20px;
    z-index: 2;
    font-size: 1.4em;
    cursor: pointer;
  }

  .side-menu {
    display: none;
    position: fixed;
    top: 30px;
    right: 40px;
  }

  .dark .dropdown-links {
    background: #2e5077;
  }

  .light .dropdown-links {
    background: #ede6e3;
  }

  .dropdown-links {
    display: flex;
    top: 0;
    right: 0;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  .dropdown-links a {
    text-decoration: none;
    color: inherit;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3vh;
    width: 50vw;
    text-align: center;
    padding: 1vh 0;
  }

  .dropdown-links a.active {
    color: #f06449;
  }

  .theme-switcher {
    margin-top: 2rem;
  }

  .theme-switcher-icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }

  .theme-switcher-icon.darkMode {
    background-color: #2e5077;
  }

  .theme-switcher-icon.lightMode {
    background-color: #ede6e3;
  }
}

@media (min-width: 769px) {
  nav {
    height: auto;
    width: 100vw;
    position: fixed;
    z-index: 100;
    background: v-bind(displayModeCode);
  }

  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-left: clamp(10vw, 30vw, 50vw);
    padding-right: clamp(2vw, 5vw, 10vw);
  }

  .links a {
    font-size: clamp(1.2rem, 1vw, 2rem);
    text-decoration: none;
    color: inherit;
  }

  .logo {
    padding-left: 10vw;
  }

  .logo-img {
    width: 80px;
    height: 80px;
    background-size: cover;
    background-image: v-bind(logoPath);
  }

  .links a:hover:not(.active) {
    color: #f06449;
    font-size: clamp(1.3rem, 1.1vw, 2rem);
    -webkit-transition: font-size 0.5s;
    -moz-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
  }

  .links a.active {
    color: #f06449;
    font-weight: 500;
    cursor: default;
  }
}

.theme-switcher-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.darkMode {
  background-image: url("../assets/darkmode.svg");
  background-size: cover;
}

.lightMode {
  background-image: url("../assets/lightmode.svg");
  background-size: cover;
  color: #2e5077;
}

.side-menu {
  display: none;
}
</style>
