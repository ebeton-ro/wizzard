<template>
<div>
    <q-option-group :type="component.type" v-model="component.model" :options="component.options"/>
</div>
</template>

<script>
import { QOptionGroup } from 'quasar'
export default {
  props: ['component'],
  components: {
    QOptionGroup
  }
}
</script>
