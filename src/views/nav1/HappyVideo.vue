<template>
    <div id="video">
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div>
                    <ul style="list-style: none" v-loading="listLoading">
                        <li v-for="i in dataList" :key="dataList.uid">
                            <div>
                                <img style="border-radius: 50%;" :src=i.header height="30" width="30"/>
                                <span class="data-text">{{i.name}}</span>
                            </div>
                            <p><span>{{i.text}}</span></p>
                            <p>
                                <video controls class="data-video">
                                    <source :src=i.video type="video/ogg"/>
                                    <source :src=i.video type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </p>
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
                            :total="400" v-show="dataList.length!==0">
                    </el-pagination>
                </div>
                <span v-show="dataList.length===0">暂无数据...</span>
                <!--				<button @click="scrollToTop">回到顶部</button>-->
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
                pageSize: 5,
                pageSizes: [2, 3, 5, 10, 20],
                currentPage: 1,
                listLoading: false,
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            backTop() {
                document.getElementById("video").scrollIntoView();
            },
            getData() {
                this.listLoading = true;
                get('', {type: "video", page: this.currentPage, count: this.pageSize}).then((data) => {
                    if (data.code === 200) {
                        this.dataList = data.result;
                    }
                });
                this.listLoading = false;
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.getData();
                this.backTop();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getData();
                this.backTop();
            },
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

    .data-video {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>