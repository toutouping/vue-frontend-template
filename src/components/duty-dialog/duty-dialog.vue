<template>
    <div class="select-duty-dialog">
        <el-dialog
            :close-on-click-modal="false"
            :show-close="false"
            title="选择负责人"
            :visible.sync="showSelectDuty"
            width="500">
            <div class="tree-content">
                <el-input v-model="filterName" v-if="showFilterName" size="mini" placeholder="请输入责任人进行过滤"></el-input>
                <el-tree :data="treeList" :props="defaultProps" default-expand-all
                    @node-click="handleNodeFn"></el-tree>
            </div>
            <div class="person-list" v-loading="isPageLoading">
                <el-transfer v-model="selectList"
                    :data="dutyList"
                    :titles="['待选责任人', '已选责任人']"></el-transfer>
            </div>
            <span slot="footer" class="dialog footer">
            <el-button @click="dialogCancel">取消</el-button>
            <el-button type="primary" @click="dialogConfirm">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
import model from './duty-dialog.js';
export default {
  ...model
};
</script>

<style lang="scss" >
.select-duty-dialog {
    width: 100px;
    .el-dialog{
    width: 735px;
    .el-dialog__body {
        padding: 20px 20px 10px 20px;
        height: 434px;
        display: flex;
        overflow-y: hidden;
        .tree-content {
            width: 180px;
            padding-right: 10px;
            border-right: solid 1px #ebeef5;
            height: 100%;
            display: flex;
            flex-direction: column;
            .el-input {
                padding-bottom: 5px;
            }
            .el-tree {
                flex: 1;
                overflow: auto;
            }
        }
        .person-list {
        flex: 1;
        padding-left: 20px;
        .el-transfer {
            .el-transfer__buttons {
            padding: 0 10px;
            }
            .el-transfer-panel__body {
            height: 358px;
            .el-transfer-panel__list {
                height: 100%;
                .el-transfer-panel__item {
                .el-checkbox__input {
                    display: none;
                }
                &.el-checkbox .el-checkbox__label{
                    padding-left: 0;
                }
                }
            }
            }
        }
        }
    }
    .footer {
        .el-button--primary {
        background: rgb(80,227,194);
        border: rgb(80,227,194);
        color: #ffffff;
        &:hover {
            background: rgba(80,227,194,0.8);
            border: rgba(80,227,194,0.8);
        }
        }
    }
    }
}
</style>
