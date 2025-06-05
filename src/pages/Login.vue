import RouterLink from 'vue-router';
<script lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <div
      class="w-full md:w-1/3 flex flex-col justify-start items-center px-8 py-4 bg-white z-10"
    >
      <img
        src="/src/assets/font.png"
        alt="Manitas Mágicas"
        class="w-78 h-auto mb-4 mt-8"
      />
      <form class="w-full max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Usuario"
          class="w-64 mx-auto block px-4 py-2 mb-4 rounded-full bg-gray-100 text-gray border border-gray-300 focus:outline-none text-center"
        />
        <input
          type="password"
          placeholder="Contraseña"
          class="w-64 mx-auto block px-4 py-2 mb-8 rounded-full bg-gray-100 text-gray border border-gray-300 focus:outline-none text-center"
        />
        <RouterLink to="/home">
          <button
            type="submit"
            class="w-48 mx-auto block bg-[#48D1CC] text-white font-semibold py-2 rounded-full shadow-md hover:bg-[#2fc1b0] transition"
          >
            <RouterLink to="/home" class="text-white"> Entrar</RouterLink>
          </button>
        </RouterLink>
        <div class="text-center text-xs mt-4 text-gray-500">
          <a href="#" class="hover font-bold text-gray-400">Crear cuenta</a>
        </div>
      </form>
    </div>

    <div class="w-full md:w-[78%] relative overflow-hidden">
      <img
        src="/src/assets/Inicio_sesion.png"
        alt="Fondo terapéutico"
        class="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
        style="
          object-position: center 1rem;
          transform: scale(1.4);
          transform-origin: center;
        "
      />

      <div
        class="absolute inset-0"
        style="background-color: rgba(72, 209, 204, 0.6); z-index: 5"
      ></div>

      <div
        class="relative z-10 flex items-center justify-start h-full pl-10 pt-48"
      >
        <img
          src="/src/assets/Icono_inicio_de_sesion.png"
          alt="Mascota"
          class="w-120 h-120 sm:w-96 md:w-80 lg:w-96"
        />
      </div>
    </div>
  </div>
</template>
