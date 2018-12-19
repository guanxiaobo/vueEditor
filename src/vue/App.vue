<template>
    <div id="eq_main">
        <the-head/>
        <the-scene-content/>
    </div>
</template>

<script>
import TheHead from './scene/home/header/TheHead.vue';
import TheSceneContent from './scene/home/TheSceneContent.vue';
export default {
    name: 'App',
    components: {
        TheHead,
        TheSceneContent
    }
}
</script>

<style lang="scss">
body,html {
    height: 100%;
}
body {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #eee;
}
* {
    box-sizing: border-box;
}
ul {
    margin: 0;
    padding: 0;
    li {
        list-style: none;
    }
}
#eq_main {
    height: 100%;
    color: #1593ff;
}
// 清除浮动
.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}
</style>


