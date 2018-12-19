<template>
    <div class="eqc-content">
        <the-template></the-template>
        <the-workspace></the-workspace>  
        <the-page-manage></the-page-manage>
    </div>
</template>

<script>
import TheTemplate from './template/TheTemplate.vue';
import ThePageManage from './manager/ThePageManage.vue';
import TheWorkspace from './workspace/TheWorkspace.vue';
export default {
    components: {
        TheTemplate,
        ThePageManage,
        TheWorkspace
    }
}
</script>
<style lang="scss">
.eqc-content {
    position: absolute;
    width: 100%;
    height: calc(100% - 56px);
}
</style>


