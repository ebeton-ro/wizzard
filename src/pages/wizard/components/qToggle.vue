<template>
<div>
            <q-toggle color="secondary" :name="component.name" class="toggle" :label="component.floatLabel" left-label v-model="checked"/>
</div>
</template>

<script>
import { QToggle } from 'quasar'
export default{
  components: {
    qToggle: QToggle
  },
  props: ['component'],
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang="stylus">
.toggle
    position relative
    float center
    margin 30px 50px
</style>
