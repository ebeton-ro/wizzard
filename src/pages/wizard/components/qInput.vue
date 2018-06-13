<template>
<div>
            <q-input :name="component.name" :type="component.type" :float-label="component.floatLabel" rows="2" v-model="value" />
            <br><br>
</div>
</template>

<script>
import { QInput, QField } from 'quasar'
export default{
  props: ['component'],
  data () {
    return {
      value: ''
    }
  },
  components: {
    QInput,
    QField
  }
}
</script>
