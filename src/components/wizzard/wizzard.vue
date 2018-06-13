<template>
    <div>
        <wizzard-step v-for="(step, index) in wizzard.steps" :step="step" v-if="step.show" :key="'step_'+index"></wizzard-step>
    </div>
</template>

<script>
    import wizzardStep from './wizzardSteps.vue';


    export default {
        name: 'wizzard',
        props: ['wizzard'],
        components: {
            wizzardStep: wizzardStep,
        }
    }
</script>

<style scoped>

</style>