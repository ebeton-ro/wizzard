<template>
    <div id="app" class="col-lg-12">
        <app-wizzard :wizzard="wizzard"></app-wizzard>
    </div>
</template>

<script>
    import wizzard from './components/wizzard/wizzard.vue';

    export default {
        name: 'App',
        data() {
            return {
                wizzard: {
                    steps: [
                        {
                            title: 'STEP 1',
                            order: 1,
                            components: [{
                                    type: 'text',
                                    label: 'INPUT ELEMENT',
                                    name: 'name',
                                    wizztype: 'input',
                                    placeholder: 'INPUT ELEMENT',
                                    showLabel: false,
                                },
                                {
                                    type: 'select',
                                    label: 'SELECT ELEMENT',
                                    name: 'selectElement',
                                    wizztype: 'select',
                                    placeholder: 'SELECT ELEMENT',
                                    options: [
                                        { value: '1',
                                          text: 'Option 1' },
                                        { value: '2',
                                          text: 'Option 2' },
                                        { value: '3',
                                            text: 'Option 3' },
                                        { value: '4',
                                            text: 'Option 4' },
                                        { value: '5',
                                            text: 'Option 5' },
                                        { value: '6',
                                            text: 'Option 6' },
                                        { value: '7',
                                            text: 'Option 7' },
                                        { value: '8',
                                            text: 'Option 8' },
                                        { value: '9',
                                            text: 'Option 9' },
                                        { value: '10',
                                            text: 'Option 10' },
                                        { value: '11',
                                            text: 'Option 11' },
                                        { value: '12',
                                            text: 'Option 12' },
                                    ],
                                    showLabel: true,
                                },
                            ],
                            actions: [
                                {
                                    action: 'step()',
                                    type: 'vue',

                                }
                            ],
                            show: true,
                        },
                        {
                            title: 'Pasul 2',
                            order: 2,
                            components: [{
                                type: 'text',
                                label: 'Test',
                                name: 'test',
                                wizztype: 'input',
                            },],
                            show: false,
                        },
                        {
                            title: 'Pasul 3',
                            order: 3,
                            show: false,
                        },
                        {
                            title: 'Pasul 4',
                            order: 4,
                            show: false,
                        },
                    ]
                },
            };
        },
        components: {
            appWizzard: wizzard
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
