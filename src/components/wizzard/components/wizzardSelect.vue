<template>
    <div class="form-group" v-if="component.options.length">
        <label v-if="component.showLabel">{{ component.label }}</label>
        <div :class="parentClass" :data-placeholder="component.placeholder">
            <v-select class="form-control" label="text" :options="component.options" v-model="selected" @focus="addClassToParent()" @change="changeSelectValue()" @blur="checkParentClass()">
                <span slot="no-options">Nu am gasit rezultate!</span>
                <i role="presentation" slot="spiner" class="icon icon-spinner"></i>
            </v-select>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import vSelect from 'vue-select';

    Vue.component('v-select', vSelect);
    export default {
        data: () => {
          return {
              parentClass: 'nonFocusPlaceholder',
              selected: null
          };
        },
        props: ['component'],
        methods: {
        },
        mixins:{

        }

    };

</script>

<style scoped>
    div.form-control{
        padding: 0;
        border:0;
    }

    .nonFocusPlaceholder,
    .placeholder
    {
        position: relative;
        line-height: 42px;
    }
    .nonFocusPlaceholder:after{
        position: absolute;
        left: 12px;
        top: 0px;
        content: attr(data-placeholder);
        pointer-events: none;
        opacity: 1;
    }

    .placeholder::after
    {
        position: absolute;
        left: 12px;
        top: -13px;
        content: attr(data-placeholder);
        pointer-events: none;
        font-size: 0.8em;
        opacity: 0.5;
        color: #c0c0c0;
    }

    .nonFocusPlaceholder,
    .placeholder{
        height: 42px; /* Asta trebuie sa fie egal cu cea de la height */
    }

    .form-control{
        line-height: 42px;
    }

</style>