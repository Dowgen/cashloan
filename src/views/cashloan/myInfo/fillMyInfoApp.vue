<template>
		<div>
				<div class="info_head">
						<span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
						<span>个人信息</span>
				</div>
				<div class="headShot pad">
						<span>头像</span>
						<span>
								<img v-show="noAvatar" class="avatar2" src="./assets/headshot.png">
								<img v-show="!noAvatar" class="avatar2" :src="img_id">
								<input id="upfile" type="file" name="upfile" accept="image/png,image/jpg,image/jpeg" @change='preivewImg'>
								<img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
						</span>

				</div>

				<div class="info_public pad" @click="$router.push({path:'/nick'})">
						<span>昵称</span>
						<span class="fr">
								<span>{{userInfo.userName}}</span>
								<img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
						</span>
				</div>
				<div class="info_public pad" style="margin-top: 1rem">
						<span>真实名字</span>
						<span v-show="idInfo.name !== ''" class="fr">
								{{idInfo.name}}
						</span>
						<span v-show="idInfo.name == ''" class="fr" @click="jump">
								<span>未认证</span>
								<img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
						</span>
				</div>
				<div class="info_public pad">
						<span>手机号码</span>
						<span class="fr color">
								{{userInfo.phone.substr(0, 3)}}****{{userInfo.phone.substr(7)}}
						</span>
				</div>
				<div class="info_public pad" style="margin-top: 1.0315rem">
						<span>身份证号</span>
						<span v-show="idInfo.idCardNumber !== ''" class="fr color">
							{{idInfo.idCardNumber.substr(0, 3)}}***********{{idInfo.idCardNumber.substr(14)}}
						</span>
						<span v-show="idInfo.idCardNumber == ''" class="fr" @click="jump">
								<span>未认证</span>
								<img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
						</span>
				</div>
				<div v-show="idInfo.idCardNumber == ''" @click="jump" class="info_public pad">
						<span>银行卡号</span>
						<span v-show="!cardBinded" class="fr">
								<span>未绑定</span>
								<img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
						</span>
						<span v-show="cardBinded" class="fr color">
								<span></span>
								<img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
						</span>
				</div>
			<div v-show="idInfo.idCardNumber !== ''" class="info_public pad" @click="$router.push({'path':'/addBank'})">
				<span>银行卡号</span>
				<span v-show="!cardBinded" class="fr">
								<span>未绑定</span>
								<img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
						</span>
				<span v-show="cardBinded" class="fr color">
								<span></span>
								<img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
						</span>
			</div>
		</div>
</template>

<script>
import Lib from 'assets/js/Lib';
export default {
	name: 'add',

		components: {

		},
	data () {
		return {
				cardBinded: false,
				img_id: '',
				noAvatar:true,
				idInfo:{},
				userInfo:{},
				localUserInfo:{}
		}
	},
	mounted(){
			this.localUserInfo = JSON.parse(localStorage.userInfo);
			this.getInfo();
			this.getImg();
			this.bankCardCheck();

	},
	methods: {
			preivewImg() {
					/* 用fileReader实现图片预览 */
					var self = this;
					var file = document.getElementById("upfile").files[0];
					if(file.size > 200*1024){
						self.$vux.alert.show('图片过大(需小于200KB)')
					}else{
						var reader = new FileReader();
						reader.onload = function(e) {
							self.img_id = e.target.result;
							self.uploadImg();
						}
						reader.readAsDataURL(file, "UTF-8");
					}
			},
			getImg(){
					var self = this;
					Lib.M.ajax({
							type:'get',
							url:'cash-account/user/account/getIconImage/'+self.localUserInfo.userInfo.phone,
							dataType:'blob',
							success:function (res) {
									if(res.size!=0){
											self.img_id =  window.URL.createObjectURL(res);
											self.noAvatar = false;
									}else{
											self.noAvatar = true;
									}
							}
					})
			},
			uploadImg(/*base64Data*/){
					var self = this;
					var fd = new FormData();
				 /* console.log(self.convertBase64UrlToBlob(base64Data))*/
					fd.append("upload", 1);
					fd.append('file', document.getElementById("upfile").files[0]/*self.convertBase64UrlToBlob(base64Data)*/);
					Lib.M.ajax({
							url: "cash-account/user/account/iconImage/"+self.localUserInfo.userInfo.phone,
							data: fd,
							success:function (res) {
									if(res.code == 200){
										self.$vux.toast.text('上传成功!')
										this.getImg();
									}else{
										self.$vux.alert.show(res.error)
										this.getImg();
									}
							}
					})
			},
			/* 压缩图片 */
		 /* canvasDataURL(re,w){
					var self = this;
					var newImg=new Image();
					newImg.src=re;
					var imgWidth,imgHeight,offsetX=0,offsetY=0;
					newImg.onload=function(){
							var img=document.createElement("img");
							img.src=newImg.src;
							imgWidth=img.width;
							imgHeight=img.height;
							var canvas=document.createElement("canvas");
							canvas.width=w;
							canvas.height=w;
							var ctx=canvas.getContext("2d");
							ctx.clearRect(0,0,w,w);
							if(imgWidth>imgHeight){
									imgWidth=w*imgWidth/imgHeight;
									imgHeight=w;
									offsetX=-Math.round((imgWidth-w)/2);
							}else{
									imgHeight=w*imgHeight/imgWidth;
									imgWidth=w;
									offsetY=-Math.round((imgHeight-w)/2);
							}
							ctx.drawImage(img,offsetX,offsetY,imgWidth,imgHeight);
							let base64Data=canvas.toDataURL("image/jpeg",0.7);
							self.uploadImg(base64Data);
					}
			},*/
			/* base64转blob */
			/*convertBase64UrlToBlob(urlData){
					var bytes=window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte

					//处理异常,将ascii码小于0的转换为大于0
					var ab = new ArrayBuffer(bytes.length);
					var ia = new Uint8Array(ab);
					for (var i = 0; i < bytes.length; i++) {
							ia[i] = bytes.charCodeAt(i);
					}

					return new Blob( [ab] , {type : 'image/png'});
			},*/
			getInfo(){
					var self = this;
					Lib.M.ajax({
							type:'GET',
							url:'cash-account/user/account/accountInfo/'+self.localUserInfo.userInfo.phone,
							success:function (res) {
									console.log(res.data.userInfo.userId);
									self.idInfo = res.data.idInfo;
									self.userInfo = res.data.userInfo;
							}
					})
			},
			/* 得到银行卡信息 */
			bankCardCheck(){
					var self = this;
					Lib.M.ajax({
							url : '/pay/repayment/bankCardCheckList',
							data:{
								user_id: self.localUserInfo.userInfo.userId
							},
							success:function (res){
								console.log(res.data.length)
								if(res.data.length!=0){
									self.cardBinded = true 
								}
							}
					});
			},
        jump(){
            this.$vux.confirm.show({
                content: '亲，请先进行认证!',
                onConfirm () {
                    window.location.href = '/views/cashloan/infoFill.html'
                }
            })
		}
	}
}

</script>

<style>
		.pad{
				padding:0 1.19rem 0 1.125rem;
		}
		.fr{
				float: right;
		}
		.info_head{
				height:3rem;
				background:rgba(255,255,255,1);
				text-align: center;
				line-height: 3rem;
				font-size:1.065rem;
				color: rgba(0,0,0,1);
				position: relative;
		}
		.info_head span:nth-of-type(1){
				position: absolute;
				left: 1.47rem;
		}

		.headShot{
				height:5.44rem;
				background:rgba(255,255,255,1);
				line-height: 5.44rem;
				margin-top: 1.065rem;
				color: rgba(115,115,115,1);
		}
		.headShot span:nth-of-type(2){
				float: right;
				position: relative;
		}
		.avatar2{
				width: 2.5rem;
				height: 2.5rem;
				display: inline-block;
				position: absolute;
				left: -3rem;
				top: 1.25rem;
				border-radius:50% ;
		}
		.headShot span:nth-of-type(2) input{
				width: 2.5rem;
				height: 2.5rem;
				position: absolute;
				left: -3rem;
				top: 1.25rem;
				opacity: 0;
				border-radius:50% ;
		}

		.info_public{
				height:2.815rem;
				background:rgba(255,255,255,1);
				line-height: 2.815rem;
				color: rgba(115,115,115,1);
				font-size: 1rem;
		}
		.color{
				color: rgba(194,194,194,1);
		}
		
</style>
