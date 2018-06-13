<template>
<q-layout>
    <q-layout-header>
        <h5>{{step.title}}</h5>
    </q-layout-header>
    <q-page-container style="position: relative; margin: 20px auto;">
        <appComp :components="step.components"></appComp>
    </q-page-container>
</q-layout>
</template>

<script>
import { QLayout, QLayoutHeader, QPageContainer, QToggle } from 'quasar'
import wizardComp from './wizardComponents.vue'
export default{
  props: ['step'],
  data () {
    return {
      checked: true
    }
  },
  components: {
    QLayout,
    QLayoutHeader,
    QPageContainer,
    appComp: wizardComp,
    QToggle
  }
}
</script>
