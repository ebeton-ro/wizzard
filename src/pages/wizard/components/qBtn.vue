<template>
<div>
    <q-btn color="secondary" :name="component.name" class="button" push :label="component.floatLabel"/>
</div>
</template>

<script>
import { QBtn } from 'quasar'
export default {
  props: ['component'],
  components: {
    QBtn
  }
}
</script>

<style lang="stylus" scoped>
.button
    width 100px
</style>
