<script lang="ts" setup>
import { useRouter, RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="mascot-section">
      <img src="@/assets/manitas.jpg" alt="" class="mascot" />
    </div>
    <div class="text-section">
      <p class="description">
        La manera entretenida, efectiva y gratuita de aprender lenguaje de
        señas.
      </p>
      <button class="start-button font-bold">
        <RouterLink to="/login" class="font-bold">EMPEZAR</RouterLink>
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100vh;
  box-sizing: border-box;
}

.mascot-section {
  position: relative;
}

.mascot {
  width: 450px;
  max-width: 100%;
}

.speech-bubble {
  position: absolute;
  top: -30px;
  left: 100px;
  background: white;
  border-radius: 50%;
  padding: 1rem;
  font-weight: bold;
  font-size: 0.8rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 120px;
  text-align: center;
}

.text-section {
  margin-top: 10rem;
  margin-left: 2rem;
  text-align: center;
  max-width: 400px;
}

.description {
  text-align: start;
  font-weight: bold;
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 1.5rem;
}

.start-button {
  background-color: #f25c3b;
  color: white;
  padding: 0.5rem 2rem;
  padding-left: 100px;
  padding-right: 100px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
}

.start-button:hover {
  background-color: #e04e2e;
}
</style>
