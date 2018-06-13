<template>
    <div>
        <component v-for="(component, index) in components" :component="component" :is="component.compType" :key="'component_'+index"></component>
    </div>
</template>

<script>
import qInput from './components/qInput.vue'
import qUploader from './components/qUploader.vue'
import qButton from './components/qBtn.vue'
import qToggle from './components/qToggle.vue'
import qSelect from './components/qSelect.vue'
import addBtn from './components/addBtn.vue'
import qOptionGroup from './components/qOptionGroup.vue'
import qDateTime from './components/qDateTime.vue'
import qTable from './components/qTable.vue'
import qTabs from './components/qTabs.vue'
export default{
  props: ['components'],
  components: {
    qInput,
    qUploader,
    qButton,
    qToggle,
    qSelect,
    addBtn,
    qOptionGroup,
    qDateTime,
    qTable,
    qTabs
  }
}
</script>
