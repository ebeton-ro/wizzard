<template>
<q-layout>
    <q-layout-header>
        <h3>Wizzard</h3>
    </q-layout-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
</q-layout>
</template>

<script>
import { openURL, QLayout, QPageContainer, QLayoutHeader, QLayoutFooter } from 'quasar'

export default {
  name: 'LayoutDefault',
  methods: {
    openURL
  },
  components: {
    QLayout,
    QPageContainer,
    QLayoutHeader,
    QLayoutFooter

  }
}
</script>

<style>
</style>
