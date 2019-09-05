<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12" :offset="6"><div>
				<ul style="list-style: none" v-loading="listLoading">
					<li v-for="i in dataList" :key="dataList.uid">
						<div class="">
							<img style="border-radius: 50%;" :src=i.header height="30" width="30"/>
							<span class="data-text">{{i.name}}</span>
						</div>
						<p><span>{{i.text}}</span></p>
						<p><img class="data-img" :src=i.images /></p>
						<p class="data-love"><i style="color: rgba(255,65,70,0.76)" class="fa fa-heart-o"></i><span class="data-up">{{i.up}}</span></p>
					</li>
				</ul>
			</div>
				<el-button v-show="dataList.length!=0" type="button" class="more" @click="getData()">再爽一次</el-button>
				<span v-show="dataList.length==0">暂无数据...</span>
			</el-col>

		</el-row>

	</div>
</template>
<script>
	import {get} from "../../api/api";
	export default {
		data(){
			return{
				dataList:[],
				page: 1,
				listLoading:false,
			}
		},
		mounted() {
			this.getData();
		},
		methods:{
			getData(){
				this.listLoading=true;
				this.page=this.page+1;
				get('',{type:"photo",page:this.page,count:10}).then((data)=>{
					this.listLoading=false;
					if(data.code==200){
						this.dataList=data.result;
						console.log(data);
					}
				}).catch((err)=>{
					this.listLoading=false;
				})
			},
		}
	}

</script>

<style scoped>
	.data-text{
		font-size: 12px;
		font-weight: bold;
		margin-left: 10px;
	}
	.data-up{
		margin-left: 5px;
		font-size: 12px;
	}
	.data-love{
		text-align: right;
	}
	.more{
		margin-left: 40px;
		width: 100px;
	}
	.data-img{
		width: 100%;
		height: 100%;
		background-position: center;
		background-size:cover;
		background-repeat: no-repeat;
	}
</style>