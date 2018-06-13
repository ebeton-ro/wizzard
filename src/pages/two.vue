<template>
<q-layout>
    <q-layout-header>
        <h5>Second step</h5>
        <p>Price</p>
    </q-layout-header>
    <q-page-container>
        <div style="position: relative; width: 50%; float: left;">
            <q-field>
                <q-input color="black" inverted class="inputField" v-model="basePrice" type="number" float-label="Pret de baza" />
            </q-field>
        </div>
        <div style="position: relative; width: 50%; float: right;">
            <q-toggle class="toggle" label="Free Price" v-model="checked" left-label/>
        </div>
        <br><br>
        <div style="margin-left: 174px; height: 250px;">
            <q-select color="black" id="select" float-label="Vat rate %" v-model="vatRate" :options="selectOptions" inverted/>
            <br><br>
                <div style="position: relative; width: 40%; float: left;">
                    <q-field helper="Working with price groups is an advanced feature.">
                        <q-input v-model="price" color="black" inverted type="text" float-label="Price Group"/>
                    </q-field>
                </div>
                <div style="position: relative; width: 50%; float: right;">
                    <q-btn color="secondary" push label="">
                        <q-icon name="add" />
                    </q-btn>
                </div>
        </div>
        <div style="position: relative; width: 73%; margin: 10px auto;">
            <q-btn push color="secondary" label="Continue"/>
        </div>
    </q-page-container>
</q-layout>
</template>

<script>
import { QLayout, QPageContainer, QLayoutHeader, QLayoutFooter, QField, QInput, QUploader, QBtn, QToggle, QSelect } from 'quasar'
export default {
  name: 'PageTwo',
  data () {
    return {
      basePrice: '',
      vatRate: '',
      priceGroup: [],
      checked: true,
      price: '',
      selectOptions: [
        {
          label: 'vat1',
          value: 'vat1'
        },
        {
          label: 'vat2',
          value: 'vat2'
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
.toggle
    position relative
    float center
    margin 30px 50px
#select
    width 57%
    position relative
</style>
