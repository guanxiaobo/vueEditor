<template>
    <div class="comp_panel">
        <div>
            <ul>
                <li v-eqx-text>
                    <em class="eqf-t"></em>
                    <span>文本</span>
                </li>
                <li>
                    <em class="eqf-image-l"></em>
                    <span>图片</span>
                </li>
                <li>
                    <em class="eqf-background-l"></em>
                    <span>背景</span>
                </li>
                <li>
                    <em class="eqf-music-l"></em>
                    <span>音乐</span>
                </li>
                <li>
                    <em class="eqf-shape-l"></em>
                    <span>形状</span>
                </li>
                <li>
                    <em class="eqf-widgets-l"></em>
                    <span>组件</span>
                </li>
                <li>
                    <em class="eqf-form-l"></em>
                    <span>表单</span>
                </li>
                <li>
                    <em class="eqf-specialsence-l"></em>
                    <span>特效</span>
                </li>
                <li>
                    <em class="eqf-flask-l"></em>
                    <span>实验室</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.comp_panel {
    width: 600px;
    height: 100%;
    margin: 0 auto;
    ul {
        li {
            width: 60px;
            height: 56px;
            color: #333;
            display: inline-block;
            position: relative;
            text-align: center;
            padding-top: 8px;
            cursor: pointer;
            transition: all .3s;
            &:hover {
                color: #ffffff;
                background-color: #1593ff;
            }
            em {
                font-size: 20px;
            }
            span {
                width: 60px;
                height: 24px;
                position: absolute;
                left: 0;
                bottom: 2px;
                font-size: 12px;
                line-height: 24px;
            }
        }
    }
}
</style>


