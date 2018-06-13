<template>
<div>
    <q-btn :name="component.name" id="addBtn" color="secondary" push label="">
        <q-icon name="add" />
    </q-btn>
    <br><br>
</div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'
export default {
  props: ['component'],
  components: {
    QBtn,
    QIcon
  }
}
</script>
