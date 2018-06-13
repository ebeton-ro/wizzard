<template>
    <div class="card">
        <div class="card-header">
            <span style="display: inline-block; background-color: aqua; width: 25px; height: 25px; border-radius: 50%; line-height: 25px; text-align: center; margin-right: 5px">{{ step.order }}</span>
            <span>{{ step.title }}</span>
        </div>
        <div class="card-body">
            <wizzard-componets :components="step.components" ></wizzard-componets>
        </div>
    </div>
</template>

<script>
    import wizzardComponents from './wizzardComponents.vue';

    export default {
        props: ['step'],
        components: {
            wizzardComponets: wizzardComponents
        }
    }
</script>

<style scoped>
    .card{
        margin-bottom: 10px;
    }
</style>