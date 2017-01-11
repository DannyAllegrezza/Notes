<template>
    <div>
        <div id="beepsWraper">
            <beep v-for="beep in beeps" :beep="beep"></beep>
        </div>
    </div>
</template>

<script>
    import Beep from 'components/dash/Beep.vue';

    export default {
        name: 'BeepList',
        components: {
            beep: Beep,
        },
        created: function () {
            this.beeps = [];
            this.getBeeps();
        },
        data: function () {
            return {
                beeps: []
            }
        },
        methods: {
            getBeeps: function () {
                this.$http.get('/beeps')
                        .then(function (res) {
                            this.beeps = res.body.data;
                        })
            }
        }
    }
</script>

<style scoped>
    #beepsWraper {
        margin: 0 -20px;
    }

    #beepsLoading {
        padding: 40px;
    }

    #beepsLoading i {
        font-size: 40px;
    }
</style>