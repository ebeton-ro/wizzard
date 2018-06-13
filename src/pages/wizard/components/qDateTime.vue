<template>
<div>
    <q-datetime v-model="component.model" type="date"/>
</div>
</template>

<script>
import { QDatetime } from 'quasar'
export default {
  props: ['component'],
  components: {
    QDatetime
  }
}
</script>
