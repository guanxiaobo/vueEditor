<template>
    <div class="eqc-header">
        <div class="logo"></div>
        <div class="head">
            <comp-head/>
        </div>
    </div>
</template>
<script>
import CompHead from './CompHead.vue';
export default {
    components: {
        CompHead
    }
}
</script>
<style lang="scss">
.eqc-header {
    width: 100%;
    height: 56px;
    background-color: #ffffff;
    border-bottom: solid 1px #ccd5db;
    .logo {
        width: 56px;
        height: 56px;
        position: absolute;
        background-image: url('../../image/icon.svg');
        background-repeat: no-repeat;
        background-size: contain;
        border-right: solid 1px #ccd5db;
        em {
            font-size: 45px;
        }
    }
    .head {
        height: 56px;
        margin: 0 auto;
    }
}
</style>
