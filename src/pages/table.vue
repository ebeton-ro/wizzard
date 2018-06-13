<template>
<div>
     <q-table
      :selection="selection"
      :selected.sync="selected"
      :data="tableData"
      :columns="columns"
      :visible-columns="labels"
      row-key="name"
      color="secondary"
    >
      <!-- slot name syntax: body-cell-<column_name> -->
      <q-td slot="body-cell-desc" slot-scope="props" :props="props">
        <q-btn color="negative" flat round delete icon="delete" />
      </q-td>
      <template slot="top-right" slot-scope="props">
                <q-table-columns
                color="secondary"
                class="q-mr-sm"
                v-model="labels"
                :columns="columns"
                />
            </template>
    </q-table>
    <br><br>
    <q-tabs v-model="tabsModel">
  <q-tab v-for="tabsOption in tabsOptions" :key="tabsOption.label" :name="tabsOption.value" icon="message" slot="title">
    {{tabsOption.label}}
  </q-tab>
  <q-tab-pane v-for="panel in panels" :key="panel.label" :name="panel.value">{{panel.label}}</q-tab-pane>
</q-tabs>
 <q-stepper ref="stepper2" color="secondary" v-model="step2" :alternative-labels="alt" vertical>
        <q-step default name="first" title="Campaign">
          <p>
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.
          </p>

          <q-stepper-navigation v-if="!globalNavigation">
            <q-btn color="primary" @click="$refs.stepper2.goToStep('disabled_step')">I want to pay</q-btn>
            <q-btn color="secondary" @click="$refs.stepper2.next()">Continue</q-btn>
          </q-stepper-navigation>
        </q-step>
 </q-stepper>
</div>
</template>

<script>
import { QTable, QTd, QChip, QBtn, QTableColumns, QTabs, QTab, QTabPane, QRouteTab, QStepper, QStep, QStepperNavigation } from 'quasar'
export default {
  data () {
    return {
      tabs: [
        'a',
        'b'
      ],
      panels: [
        {label: 'Tab 1', value: 'xtab-1'},
        {label: 'Tab 2', value: 'xtab-2'},
        {label: 'Tab 3', value: 'xtab-3'}
      ],
      labels: [
        'desc',
        'calories'
      ],
      selection: 'multiple',
      selected: [
        // initial selection
        { name: 'Ice cream sandwich' }
      ],
      tabsModel: 'xtab-1',
      tabsOptions: [
        {label: 'Tab 1', value: 'xtab-1'},
        {label: 'Tab 2', value: 'xtab-2'},
        {label: 'Tab 3', value: 'xtab-3'}
      ],
      tableData: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        }
      ],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: 'name',
          sortable: true
        },
        { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ]
    }
  },
  components: {
    QTable,
    QTd,
    QChip,
    QBtn,
    QTableColumns,
    QTabs,
    QTab,
    QTabPane,
    QRouteTab
  }
}
</script>
