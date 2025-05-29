<template>
    <div class="home-page bg-[#b6eaf5] min-h-screen flex flex-col font-['Fredoka One']">
        <!-- Header -->
        <header class="header bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <div class="logo w-24 h-24">
                <img src="@/assets/Logo.png" alt="Logo" class="logo-img w-full h-full" />
            </div>
            <div
                class="header-icons-container flex items-center justify-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                <img src="@/assets/configuracion.png" alt="configuracion" />
                <img src="@/assets/home.png" alt="home" />
                <img src="@/assets/game.png" alt="game" />
            </div>
            <div class="donar flex items-center justify-end">
                <img src="@/assets/donar.png" alt="donar" />
            </div>
        </header>

        <!-- Body -->
        <main class="main-content flex p-12 gap-8 items-start">
            <!-- Tarjeta lateral izquierda -->
            <section class="side-card w-1/4 flex flex-col gap-6">
                <div class="user-card bg-white rounded-3xl p-4 flex items-start gap-4 text-left">
                    <img src="@/assets/persona.png" alt="persona"
                        class="user-img w-16 h-16 rounded-full object-cover" />
                    <div class="user-info flex flex-col gap-1">
                        <p class="font-bold text-[18px]">Emiliano Rodríguez</p>
                        <span class="font-normal text-[12px]">Principiante</span>
                        <!-- Barra de progreso con 25% verde y 75% gris -->
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-[#db1414] h-1.5 rounded-full" style="width: 20%"></div>
                        </div>
                    </div>
                </div>

                <div class="stage-info bg-white rounded-3xl p-4 flex flex-col gap-4 text-left">
                    <div class="flex items-center gap-4">
                        <img src="@/assets/persona.png" alt="persona"
                            class="user-img w-16 h-16 rounded-full object-cover" />
                        <div class="user-info flex flex-col gap-1">
                            <p class="font-bold text-[18px]">Etapa 1</p>
                            <p class="font-normal text-[12px]">Clase 3</p>
                            <div class="bg-gray-200 rounded-full h-1.5">
                                <div class="bg-[#42b43e] h-1.5 rounded-full" style="width: 20%"></div>
                            </div>
                        </div>
                    </div>
                    <img src="@/assets/abcdario.jpeg" alt="abcdario" class="abecedario-img w-[80%] mt-0 self-center" />
                </div>
            </section>

            <!-- Tarjetas centrales -->
            <section class="cards grid grid-cols-2 gap-x-20 gap-6 justify-center content-start flex-1 ml-8">
                <div
                    class="card bg-[#42b43e] p-4 rounded-xl shadow-sm text-center w-52 h-auto flex flex-col justify-between">
                    <h3 class="text-white my-2 font-bold text-[25px]">Etapa 1</h3>
                    <p class="text-white text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                        eiusmod
                        tempor incidunt ut labore et dolore</p>
                    <button class="mt-4 py-2 px-4 rounded-full bg-white text-[#42b43e] font-bold">Continuar</button>
                </div>
                <div
                    class="card bg-[#5188ff] p-4 rounded-xl shadow-sm text-center w-52 h-auto flex flex-col justify-between">
                    <h3 class="text-white my-2 font-bold text-[25px]">Etapa 2</h3>
                    <p class="text-white text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                        eiusmod
                        tempor incidunt ut labore et dolore</p>
                    <button
                        class="mt-4 py-2 px-4 rounded-full bg-white text-[#5188ff] opacity-60 cursor-not-allowed font-bold">Iniciar</button>
                </div>
                <div
                    class="card bg-[#ed9c37] p-4 rounded-xl shadow-sm text-center w-52 h-auto flex flex-col justify-between">
                    <h3 class="text-white my-2 font-bold text-[25px]">Etapa 3</h3>
                    <p class="text-white text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                        eiusmod
                        tempor incidunt ut labore et dolore</p>
                    <button disabled
                        class="mt-4 py-2 px-4 rounded-full bg-white text-[#ed9c37] opacity-60 cursor-not-allowed font-bold">Iniciar</button>
                </div>
                <div
                    class="card bg-[#ff3b3b] p-4 rounded-xl shadow-sm text-center w-52 h-auto flex flex-col justify-between">
                    <h3 class="text-white my-2 font-bold text-[25px]">Etapa 4</h3>
                    <p class="text-white text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                        eiusmod
                        tempor incidunt ut labore et dolore</p>
                    <button disabled
                        class="mt-4 py-2 px-4 rounded-full bg-white text-[#ff3b3b] opacity-60 cursor-not-allowed font-bold">Iniciar</button>
                </div>
            </section>

            <!-- Personaje -->
            <div class="character-area w-1/3 flex items-end justify-center mt-26 -ml-2">
                <img src="@/assets/monito.png" alt="Personaje" class="character-img h-auto" />
            </div>
        </main>
    </div>
</template>

<script setup>

</script>