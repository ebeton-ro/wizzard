<template>
<div>
    <q-table :filter="filter" :selection="component.selection" :selected.sync="component.selected" :columns="columns" :data="tableData" :title="component.title" :visible-columns="component.visibleColumns" row-key="name">
            <q-td slot="body-cell-actions" slot-scope="props" :props="props">
                    <q-btn color="negative" flat round delete icon="edit" @click="editRow" />
                    <q-btn color="negative" flat round delete icon="delete" @click="deleteRow" />
            </q-td>
             <template slot="top-left" slot-scope="props">
                <q-search hide-underline v-model="filter" />
            </template>
            <template slot="top-right" slot-scope="props">
                <q-table-columns
                color="secondary"
                class="q-mr-sm"
                v-model="component.visibleColumns"
                :columns="columns"
                />
            </template>
    </q-table>
</div>
</template>

<script>
import { QTable, QBtn, QTd, QTr, QSearch, QTableColumns } from 'quasar'
export default {
  props: ['component'],
  data () {
    return {
      filter: ''
    }
  },
  components: {
    QTable,
    QBtn,
    QTd,
    QTr,
    QSearch,
    QTableColumns
  },
  computed: {
    visibleColumns () {
      var visibleColumns = []
      for (var i = 0; i < this.component.visibleColumns.length; i++) {
        visibleColumns[i] = this.component.visibleColumns[i]
      }
      return visibleColumns
    },
    columns () {
      var columns = []
      for (var i = 0; i < this.component.columns.length; i++) {
        columns[i] = this.component.columns[i]
      }
      return columns
    },
    tableData () {
      var tableData = []
      for (var i = 0; i < this.component.tableData.length; i++) {
        tableData[i] = this.component.tableData[i]
      }
      return tableData
    }
  },
  methods: {
    deleteRow () {
      this.$q.notify({
        color: 'secondary',
        icon: 'delete',
        message: `Will delete the selected row later, ok?`
      })
    },
    editRow () {
      this.$q.notify({
        color: 'secondary',
        icon: 'edit',
        message: `Will edit the row later, ok?`
      })
    }
  }
}
</script>
