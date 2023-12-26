<script setup>
import { ref, onMounted } from "vue";
const showMobileMenu = ref("false");
</script>

<template>
    <nav class="w-full fixed z-20 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div
            class="container flex flex-wrap justify-between items-center mx-auto"
        >
            <a
                href="http://128.199.85.33/about"
                target="_blank"
                class="flex items-center space-x-3 rtl:space-x-reverse"
            >
                <img
                    src="http://localhost:8000/img/logo2.png"
                    class="mr-3 h-6 sm:h-9"
                    alt="Linh Dev Logo"
                />
                <span
                    class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                    >Linh Dev</span
                >
            </a>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                @click="showMobileMenu = !showMobileMenu"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
            <div
                class="w-full md:block md:w-auto"
                :class="{ hidden: showMobileMenu }"
                id="navbar-default"
            >
                <ul
                    class="flex flex-col p-4 mt-4 rounded-lg border border-light-tail-500 dark:border-dark-navy-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0"
                >
                    <li>
                        <a
                            href="#"
                            class="block py-2 pr-4 pl-3 text-light-tail-500 rounded dark:text-dark-navy-100 hover:text-light-tail-100 dark:hover:text-white"
                            aria-current="page"
                            >Home</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
