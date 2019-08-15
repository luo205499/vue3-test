<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12" :offset="6"><div>
				<ul style="list-style: none">
					<li v-for="i in dataList" :key="dataList.uid">
						<div class="">
							<img style="border-radius: 50%;" :src=i.header height="30" width="30"/>
							<span class="data-text">{{i.username}}</span>
						</div>
						<p><span>{{i.text}}</span></p>
						<p><video controls class="data-video">
							<source :src=i.video type="video/ogg" />
							<source :src=i.video type="video/mp4" />
							Your browser does not support the video tag.
						</video></p>
						<p class="data-love"><i style="color: rgba(255,65,70,0.76)" class="fa fa-heart-o"></i><span class="data-up">{{i.up}}</span></p>
					</li>
				</ul>
			</div>
				<el-button type="button" class="more" @click="getData()">再爽一次</el-button>
				<button @click="scrollToTop">回到顶部</button>
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
			}
		},
		mounted() {
			this.getData();
			this.$nextTick(function () {
				window.addEventListener('scroll', this.handleScroll,true);
			});
		},
		destroyed() {
			window.addEventListener('scroll', this.handleScroll,true);
		},

		methods:{
			scrollToTop() {
				let timer = null;
				let _this = this;
				cancelAnimationFrame(timer);
				timer = requestAnimationFrame(function fn() {
					if (_this.scrollTop > 5000) {
						_this.scrollTop -= 1000;
						document.getElementsByClassName("content-container")[0].scrollTop =
								_this.scrollTop;
						timer = requestAnimationFrame(fn);
					} else if (_this.scrollTop > 1000 && _this.scrollTop <= 5000) {
						_this.scrollTop -= 500;
						document.getElementsByClassName("content-container")[0].scrollTop =
								_this.scrollTop;
						timer = requestAnimationFrame(fn);
					} else if (_this.scrollTop > 200 && _this.scrollTop <= 1000) {
						_this.scrollTop -= 100;
						document.getElementsByClassName("content-container")[0].scrollTop =
								_this.scrollTop;
						timer = requestAnimationFrame(fn);
					} else if (_this.scrollTop > 50 && _this.scrollTop <= 200) {
						_this.scrollTop -= 10;
						document.getElementsByClassName("content-container")[0].scrollTop =
								_this.scrollTop;
						timer = requestAnimationFrame(fn);
					} else if (_this.scrollTop > 0 && _this.scrollTop <= 50) {
						_this.scrollTop -= 5;
						document.getElementsByClassName("content-container")[0].scrollTop =
								_this.scrollTop;
						timer = requestAnimationFrame(fn);
					} else {
						cancelAnimationFrame(timer);
						_this.toTopShow = false;
					}
				});
			},
			getData(){
				this.page=this.page+1;
				get('',{type:1,page:this.page}).then(({code,data})=>{
					if(code==200){
						this.dataList=data;
						console.log(data);
					}
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
	.data-video{
		width: 100%;
		height: 100%;
		background-position: center;
		background-size:cover;
		background-repeat: no-repeat;
	}
</style>