<template>
    <div class="form-group" style="position: relative">
        <label v-if="component.showLabel">{{ component.label }}</label>
        <div :class="parentClass" :data-placeholder="component.placeholder">
        <input :type="component.type" class="form-control" @focus="addClassToParent()" @blur="checkParentClass()" v-model="value">
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                value: '',
                parentClass: 'nonFocusPlaceholder',
            };
        },
        props: ['component'],
        methods:{
            addClassToParent: function(){
                this.parentClass = 'placeholder';
            },
            checkParentClass: function(el){
                if(this.value.length == 0){
                    this.parentClass = 'nonFocusPlaceholder';
                }
            }
        },
    }
</script>

<style scoped>
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
    .placeholder,
    input{
        height: 42px; /* Asta trebuie sa fie egal cu cea de la height */
    }

    input{
        padding: 0 12px; /* Asta trebuie sa fie egal cu leftul de la placeholder::after */
    }
</style>