<template>
	<div style="position: relative;">
		<!-- header开始 -->
		<div id="header_page_bg" style="position: fixed;  z-index: 10; top: 0; height: 44px; width: 100%;" >
			<a-row>
				<a-col :span="3"><img src="../../assets/img/nav_icon_return.png" style="width: 19px; height: 18px; margin-top: 14.5px;" v-on:click="returnModel()" /></a-col>
				<a-col :span="18"><h4 style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;">图纸</h4></a-col>
				<a-col :span="3"></a-col>
			</a-row>
		</div>
		<!-- header结束 -->

		<!-- 图片文件夹加载器content开始 -->
		<div style="margin-top: 50px; margin-left: 1.5%; margin-right: 1.5%; margin-bottom: 49px; position:absolute; width: 97%;" >
			<div>
				<a-row v-for="(item, index) in drwaing" :key="index">
					<a-col :span="24">
						<a-collapse>
							<img src="../../assets/img/file_off.png" style="width: 22px;height: 22px; float: left; margin-top: 10px; margin-left: 20px; margin-right: 10px;" />

							<a-collapse-panel v-bind:header="item.name" :showArrow="false" style="text-align: left; font-family: PingFang-SC-Medium; font-size: 15px; color: #333333">
								<div>
									<div v-for="(iitem, indexx) in item.res" :key="indexx" style="float: left; width: 100%">
										<div style="margin-left: 10px">
											<img src="../../assets/img/picture_on.png" style="width: 17px; height: 17px; margin-right: 10px;"/>
											<a style="text-align: center; margin-top: 2px; color: #333333; font-size: 13px;">{{iitem.resName}}</a>
											
											<img :src="iitem.resUrl" v-on:click="openDrawing($event)" style="width: 30px; float: right; margin-right: 10px;"/>
										</div>
										<hr style="width:100%; color:#DDDDDD"/>
									</div>
								</div>
							</a-collapse-panel>
						</a-collapse>
					</a-col>
				</a-row>
			</div>
		</div>
		<!-- 图片文件夹加载器content结束 -->

		<img v-on:click="changeFilePg()" src="../../assets/img/picture_on.png" style="width: 17px; height: 17px; margin-right: 10px;"/>

		<!-- footer开始 -->
		<div style="position: fixed; bottom: 0; width: 100%; height: 49px; background-color: #FAFAFA">
			<a-row>
				<a-col :span="8">
					<div v-on:click="openModel()"><img src="../../assets/img/model_off.png" style="width: 22px; height: 22px; margin-top: 5px;" /></div>

					<div><a style="color: #666666; font-size: 11px">模型</a></div>
				</a-col>
				<a-col :span="8">
					<div v-on:click="openPicture()"><img src="../../assets/img/picture_on.png" style="width: 22px; height: 22px; margin-top: 5px;" /></div>

					<div><a style="color: #2180ED; font-size: 11px">图纸</a></div>
				</a-col>
				<a-col :span="8">
					<div v-on:click="openMaterial()"><img src="../../assets/img/material_off.png" style="width: 22px; height: 22px; margin-top: 5px;" /></div>
					<div><a style="color: #666666; font-size: 11px">材料</a></div>
				</a-col>
			</a-row>
		</div>
		<!-- footer结束 -->
	</div>
</template>

<script>
import api from '@/api/api.js'
import qs from 'qs'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'



export default {
	data() {
		return {
			drwaing: {},
 
		};
	},
	mounted() {
		this.$http.post(api.GetResDrawing,qs.stringify({ modelId: this.$route.query.modelId, projectId: this.$route.query.projectId, companyId: this.$route.query.companyId }))
        .then(res => {
					this.drwaing = JSON.parse(res.data.urlJson)
        })
        .catch(err => {
					
        })
        .finally(() => {

				});
	},
	methods: {
		returnModel() {
			let companyId = this.$route.query.companyId;
			let projectId = this.$route.query.projectId;
			let projectName = this.$route.query.projectName;
			this.$router.push('/project?' + 'companyId=' + companyId + '&projectId=' + projectId + '&projectName=' + projectName);
		},
		openModel() {
			let companyId = this.$route.query.companyId;
			let projectId = this.$route.query.projectId;
			let projectName = this.$route.query.projectName;
			let modelId = this.$route.query.modelId;
			this.$router.push('/build/model?' + 'companyId=' + companyId + '&projectId=' + projectId + '&projectName=' + projectName + '&modelId=' + modelId);
		},
		openPicture() {
			let companyId = this.$route.query.companyId;
			let projectId = this.$route.query.projectId;
			let projectName = this.$route.query.projectName;
			let modelId = this.$route.query.modelId;
			this.$router.push('/build/picture?' + 'companyId=' + companyId + '&projectId=' + projectId + '&projectName=' + projectName + '&modelId=' + modelId);
		},
		openMaterial() {
			let companyId = this.$route.query.companyId;
			let projectId = this.$route.query.projectId;
			let projectName = this.$route.query.projectName;
			let modelId = this.$route.query.modelId;
			this.$router.push('/build/material?' + 'companyId=' + companyId + '&projectId=' + projectId + '&projectName=' + projectName + '&modelId=' + modelId);
		},
		openDrawing(e) {
			new Viewer(e.target, {
					toolbar: false,
					title: false,
					navbar: false
			})
		}
	}
};
</script>

<style scoped>
#header_page_bg {
	background: url('../../assets/img/tabbar_bg.png');
	background-size: 100% 100%;
	height: 100%;
}
</style>