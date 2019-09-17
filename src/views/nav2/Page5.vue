<template>
	<section>
		<div id="myChart" class="commentStyle"></div>
		<div id="myChart2" class="commentStyle"></div>
		<div id="myChart3" class="commentStyle"></div>
	</section>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		mounted(){
			this.drawLine();
			this.drawLine2();
			this.drawLine3();
		},
		methods: {
			drawLine(){
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.echarts.init(document.getElementById('myChart'));
				// 绘制图表
				myChart.setOption({
					title: { text: '柱形' },
					tooltip: {},
					xAxis: {
						data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				});
			},
			drawLine3(){
				// 基于准备好的dom，初始化echarts实例
				let myChart3 = this.echarts.init(document.getElementById('myChart3'));
				// 绘制图表
				myChart3.setOption({
					title: { text: '折线' },
					tooltip: {},
					xAxis: {
						data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'line',
						data: [5, 20, 36, 10, 10, 20]
					}]
				});
			},
			drawLine2(){
				// 基于准备好的dom，初始化echarts实例
				let myChart2 = this.echarts.init(document.getElementById('myChart2'));
				// 绘制图表
				myChart2.setOption({
					title: { text: '扇形' },
					series : [
						{
							name: '访问来源',
							type: 'pie',
							radius: '55%',
							itemStyle: {
								normal: {
									// 阴影的大小
									shadowBlur: 200,
									// 阴影水平方向上的偏移
									shadowOffsetX: 0,
									// 阴影垂直方向上的偏移
									shadowOffsetY: 0,
									// 阴影颜色
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							data:[
								{value:400, name:'搜索引擎'},
								{value:335, name:'直接访问'},
								{value:310, name:'邮件营销'},
								{value:274, name:'联盟广告'},
								{value:235, name:'视频广告'}
							]
						}
					]
				})
			},

		}
	}
</script>
<style scoped>
.commentStyle{
	width: 400px;
	height: 300px;
	float:left;
	margin-right: 20px;
}
</style>