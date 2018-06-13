<template>
<q-layout>
    <q-layout-header>
        <h5>First step</h5>
        <p>Add Item</p>
    </q-layout-header>
    <q-page-container style="position: relative; margin: 20px auto;">
        <q-field>
            <q-input color="black" inverted class="inputField" v-model="plu" type="number" float-label="PLU" />
        </q-field>
        <br><br>
        <q-field>
            <q-input color="black" inverted class="inputField" v-model="itemName" type="text" float-label="Item name" />
        </q-field>
        <br><br>
        <q-field>
            <q-input color="black" inverted class="inputField" v-model="description" type="text" float-label="Description" />
        </q-field>
        <br><br>
        <q-uploader class="inputField" :url="url" color="black" inverted float-label="Upload picture"/>
        <br><br>
        <q-btn class="button" push color="black" label="Continue" />
    </q-page-container>
</q-layout>

</template>

<script>
import { QLayout, QPageContainer, QLayoutHeader, QLayoutFooter, QField, QInput, QUploader, QBtn } from 'quasar'
export default {
  name: 'PageOne',
  data () {
    return {
      plu: '',
      itemName: '',
      description: '',
      url: ''
    }
  },
  components: {
    QLayout,
    QPageContainer,
    QLayoutHeader,
    QLayoutFooter,
    QField,
    QInput,
    QUploader,
    QBtn
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.inputField
    width 300px
    float center
    position relative
    margin 10px auto
.button
    position relative
    margin 10px 800px
    width 100px
</style>
