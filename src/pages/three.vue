<template>
<q-layout>
    <q-layout-header>
        <h5>Third step</h5>
        <p>Category</p>
    </q-layout-header>
    <q-page-container>
                <q-select class="left" style="width:240px;" color="black" id="select" float-label="Category" v-model="category" :options="selectOptions" inverted/>
                <q-btn class="" color="secondary" push label="">
                    <q-icon name="add" />
                </q-btn>
    </q-page-container>
</q-layout>
</template>

<script>
import { QLayout, QPageContainer, QLayoutHeader, QLayoutFooter, QField, QInput, QUploader, QBtn, QToggle, QSelect } from 'quasar'
export default{
  data () {
    return {
      category: '',
      selectOptions: [
        {
          label: 'ciorbe',
          value: 'ciorbe'
        },
        {
          label: 'fripturi',
          value: 'fripturi'
        }
      ]
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
    QBtn,
    QToggle,
    QSelect
  }
}
</script>

<style lang="stylus">

</style>
