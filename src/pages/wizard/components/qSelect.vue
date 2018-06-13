<template>
<div>
<q-select multiple v-if="component.multiple" :name="component.name" :float-label="component.floatLabel" v-model="component.model" :options="component.options"/>
<q-select v-if="!component.multiple" :name="component.name" :float-label="component.floatLabel" v-model="component.model" :options="component.options"/>
</div>
</template>

<script>
import { QSelect } from 'quasar'
export default {
  props: ['component'],
  data () {
    return {
      vatRate: [],
      vatRate1: ''
    }
  },
  components: {
    QSelect
  }
}
</script>

<style>
</style>
