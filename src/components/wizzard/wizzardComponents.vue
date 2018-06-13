<template>
    <div>
        <component v-for="(component, index) in components" :is="componentName(component.wizztype)" :component="component" :key="'component_'+index"></component>
    </div>
</template>

<script>
    import wizzardInput from './components/wizzardInput.vue';
    import wizzardSelect from './components/wizzardSelect.vue';
    export default {
        props: ['components'],
        methods:{
            componentName(string){
                return 'wizzard-'+string.toLowerCase();
            }
        },
        components: {
            wizzardInput,
            wizzardSelect,
        }
    }
</script>

<style scoped>

</style>