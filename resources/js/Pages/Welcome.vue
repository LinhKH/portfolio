<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from '@/Layouts/Frontend.vue';
import Hero from '../Components/Frontend/Hero.vue';
import Promote from "@/Components/Frontend/Promote.vue";
import About from "@/Components/Frontend/About.vue";

</script>

<template>
    <Head title="Welcome to Linh's portfolio" />
    <FrontendLayout>
        <!-- Hero primary -->
        <Hero />
        <!-- Promote tail-100 -->
        <Promote />
        <!-- About -->
        <About />
        <!-- Skills -->
        <!-- Hero primary -->

    </FrontendLayout>
</template>

<style>

</style>
