<template>
    <div class="eqc-workspace">
        <the-editor></the-editor>
    </div>
</template>
<script>
import TheEditor from './TheEditor.vue';
export default {
    components: {
        TheEditor
    }
}
</script>
<style lang="scss">
.eqc-workspace {
    position: absolute;
    top: 0;
    left: 56px;
    width: calc(100% - 316px);
    height: 100%;
    background-color: #eeeeee;
}
</style>

