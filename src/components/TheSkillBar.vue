<script setup>

const props = defineProps({
  skill: {},
  percentage: {},
  color: {}
});
const colorDark = props.color.dark
const colorLight = props.color.light

</script>

<template>
  <p>{{ skill }}</p>
  <div class="bar-container">
      <div class="skill-bar"></div>
  </div>
</template>

<style>
.bar-container {
  width: 100%;
  height: 10px;
  border-radius: 20px;
  margin: -10px 0 30px 0;
}

.dark .bar-container {
  background-color: rgba(238, 238, 238, 0.4);
}

.light .bar-container {
  background-color: rgba(46, 80, 119, 0.4);
}

.skill-bar {
  height: 100%;
  width: 0;
  border-radius: 20px;
  transition: width 1s ease;
}

.skill-bar.full {
  width: v-bind(percentage);
}

.dark .skill-bar {
  background: v-bind(colorDark);
}

.light .skill-bar {
  background: v-bind(colorLight);
}

/* @keyframes skillBarAnimation {
  0% {
    width: 0;
  }
  100% {
    width: v-bind(percentage);
  }
} */
</style>