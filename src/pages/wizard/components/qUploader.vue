<template>
<div>
    <q-uploader :name="component.name" :url="url" :float-label="component.floatLabel"/>
        <br><br>
</div>
</template>

<script>
import { QUploader } from 'quasar'
export default{
  props: ['component'],
  data () {
    return {
      url: ''
    }
  },
  components: {
    QUploader
  }
}
</script>
