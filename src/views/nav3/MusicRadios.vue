<template>
	<section>
		<el-table
				:data="dataList"
				style="width: 100%">
			<el-table-column
					type="index"
					width="50">
			</el-table-column>
			<el-table-column
					prop="cate_sname"
					label="频道"
					width="180">
			</el-table-column>
			<el-table-column
					prop="name"
					label="电台名"
					width="180">
			</el-table-column>
			<el-table-column
					label="图片">
				<template slot-scope="scope">
					<el-image :src="scope.row.thumb" style="width: 60px;"></el-image>
				</template>
			</el-table-column>
		</el-table>
	</section>
</template>

<script>
	import {get} from "../../api/api";
	export default {
		data(){
			return{
				dataList:[],
				page: 3,
			}
		},
		mounted() {
			this.getData();
		},
		methods:{
			getData(){
				get('https://api.apiopen.top/musicBroadcasting',{}).then((data)=>{
					console.log(data);
					if(data.code==200){
						this.dataList=data.result[0].channellist;
					}
				})
			},
		}
	}

</script>

<style scoped>

</style>