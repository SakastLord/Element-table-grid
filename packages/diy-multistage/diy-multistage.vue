<template>
  <div class="div-popup" v-if="Recursion">
    <div class="content">
        <slot></slot>
    </div>
    <div class="mask" @click="$emit('update:show', false)"></div>
  </div>
</template>

<script>
// import diyTable from '../diy-table/main'
// import data from '../../src/views/data'
export default {
    name: 'popup',
    props: {
        Recursion: {
            default: true
        },
        show: {
            default: false
        }
    },
    data() {
        return {
            // tableData: data
        }
    },
    methods: {
        handleCheckAllChange(e) {
            if (e.target.tagName === 'INPUT') {
                return false
            }
            var off = this.checkAll
            this.tableData.forEach(el => {
                this.$set(el, 'check', !off)
            })
        }
    },
    computed: {
        checkAll() {
            const checkIndex = this.tableData.findIndex(el => !el.check)
            return checkIndex === -1 ? true : false
        }
    }
}
</script>

<style scoped>
.div-popup{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
}
.div-popup .content{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: max-content;
    height: 80%;
    padding: 20px;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    z-index: 1;
    overflow-y: auto;
}
.div-popup .leftFunctional{
    position: absolute;
    bottom: 10px;
}
.div-popup .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
}
</style>