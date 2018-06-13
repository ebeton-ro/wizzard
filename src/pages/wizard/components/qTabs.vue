<template>
<div>
<q-tabs :v-model="component.tabsModel">
  <q-tab v-for="tab in tabs" :key="tab.label" :name="tab.name" icon="message" slot="title">
    {{tab.label}}
  </q-tab>
  <q-tab-pane v-for="panel in panels" :key="panel.label" :name="panel.name">{{panel.label}}</q-tab-pane>
</q-tabs>
</div>
</template>

<script>
import { QTabs, QTab, QTabPane, QRouteTab } from 'quasar'
export default {
  props: ['component'],
  components: {
    QRouteTab,
    QTabs,
    QTab,
    QTabPane
  },
  computed: {
    tabs () {
      var tabs = []
      for (var i = 0; i < this.component.tabs.length; i++) {
        tabs[i] = this.component.tabs[i]
      }
      return tabs
    },
    panels () {
      var panels = []
      for (var i = 0; i < this.component.panels.length; i++) {
        panels[i] = this.component.panels[i]
      }
      return panels
    }
  }
}
</script>
