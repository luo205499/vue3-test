<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div>
                    <ul style="list-style: none" v-loading="listLoading">
                        <li v-for="i in dataList" :key="dataList.uid">
                            <div class="">
                                <img style="border-radius: 50%;" :src=i.header height="30" width="30"/>
                                <span class="data-text">{{i.name}}</span>
                            </div>
                            <p>{{i.text}}</p>
                            <p class="data-love"><i style="color: rgba(255,65,70,0.76)" class="fa fa-heart-o"></i><span
                                    class="data-up">{{i.up}}</span></p>
                        </li>
                    </ul>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes=pageSizes
                            :page-size=pageSize
                            layout="total,sizes, prev, pager, next, jumper"
                            :total="400" v-show="dataList.length!=0">
                    </el-pagination>
                </div>
                <span v-show="dataList.length==0">暂无数据...</span>
            </el-col>

        </el-row>

    </div>
</template>
<script>
    import {get} from "../../api/api";

    export default {
        data() {
            return {
                dataList: [],
                currentPage: 1,
                listLoading: false,
                pageSize:5,
                pageSizes:[5,10,20]
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                this.listLoading = true;
                this.page = this.page + 1;
                get('', {type: "text", page: this.currentPage, count: this.pageSize}).then((data) => {
                    this.listLoading = false;
                    if (data.code == 200) {
                        this.dataList = data.result;
                    }
                }).catch((err) => {
                    this.listLoading = false;
                })
            },
            handleSizeChange(val) {
                this.pageSize=val;
                this.getData();
            },
            handleCurrentChange(val) {
                this.currentPage=val;
                this.getData();
            }
        }
    }

</script>

<style scoped>
    .data-text {
        font-size: 12px;
        font-weight: bold;
        margin-left: 10px;
    }

    .data-up {
        margin-left: 5px;
        font-size: 12px;
    }

    .data-love {
        text-align: right;
    }

    .more {
        margin-left: 40px;
        width: 100px;
    }
</style>