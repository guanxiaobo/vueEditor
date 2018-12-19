<template>
    <div class="eqc-template">
        <ul class="tab-panel">
            <li>
                <em class="eqf-palette-l"></em>
                <span>元素模版</span>
            </li>
            <li>
                <em class="eqf-box-l"></em>
                <span>功能模版</span>
            </li>
            <li>
                <em class="eqf-template-l"></em>
                <span>单叶模版</span>
            </li>
            <li>
                <em class="eqf-vipdiamond-l"></em>
                <span>vip模版</span>
            </li>
            <li>
                <em class="eqf-apply-l"></em>
                <span>我的申请</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.eqc-template {
    position: fixed;
    width: 56px;
    height: 100%;
    border-right: solid 1px #ccd5db;
    background-color: #FFFFFF;
    .tab-panel {
        li {
            height: 72px;
            color: #333;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all .3s;
            em {
                font-size: 18px;
                margin-bottom: 5px;
            }
            span {
                font-size: 12px;
            }
            &:hover {
                color: #FFFFFF;
                cursor: pointer;
                background-color: #1593ff;
            }
        }
    }
}
</style>


