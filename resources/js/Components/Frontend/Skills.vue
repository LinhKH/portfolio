<script setup>
defineProps({
    skills: Object,
});
</script>
<template>
    <section class="bg-light-tail-100 dark:bg-dark-navy-500 py-16">
        <div class="container mx-auto">
            <div class="flex flex-col items-center text-center">
                <h2 class="section-title">Skills</h2>
            </div>
            <div class="flex flex-wrap gap-6 mt-4 justify-center">
                <div class="" v-for="skill in skills.data" :key="skill.id">
                    <img :src="skill.image" :alt="skill.name" width="170" class="lg:h-20" />
                </div>
            </div>
        </div>
    </section>
</template>
