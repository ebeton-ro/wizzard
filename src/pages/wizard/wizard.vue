<template>
<div>
    <appSteps v-for="(step, index) in wizard.steps" :step="step" v-if="step.show" :key="'step_'+index"></appSteps>
</div>
</template>

<script>
import Wizardstep from './wizardStep.vue'
export default{
  name: 'wizard',
  props: ['wizard'],
  components: {
    appSteps: Wizardstep
  }
}
</script>
