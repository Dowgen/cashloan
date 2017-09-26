
import conf from './conf';
import * as pickerList from './pickerList'; /* popup-picker所需的列表数据 */

import axios from 'axios';

var oproto = Object.prototype;
var serialize = oproto.toString;
var Rxports = {
	/* wb add start */
    /* 获取验证码 */
    sendVcode:function (phoneNum){
        axios.get('http://120.27.198.97:8081/flower/w/cashUser/sendMsg?phoneNum='+ phoneNum)
          .then( data => {
            console.warn(data);
            if(data.data == 'error') {
              layer.msg("验证码发送失败!");
              that.resetBtn();
            }
            if(data.data == 'success') {
              layer.msg("验证码发送成功");
            }
          })
          .catch( err => {
            layer.msg("验证码发送失败!");
            that.resetBtn();
        });
    },
    
    /**    列表    **/
    eduList: pickerList.eduList,
    mariList: pickerList.mariList,
    cityList: pickerList.cityList,
    workTypeList: pickerList.workTypeList,
    adviceList: pickerList.adviceList,
	/* wb add end */


	/**
	  * 封装axios，减少学习成本，参数基本跟jq ajax一致
	  * @param {String} type			请求的类型，默认post
	  * @param {String} url				请求地址
	  * @param {String} time			超时时间
	  * @param {Object} data			请求参数
	  * @param {String} dataType		预期服务器返回的数据类型，xml html json ...
	  * @param {Object} headers			自定义请求headers
	  * @param {Function} success		请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
	  * @param {Function} error		发送请求前
	  * @param return 
	*/
	ajax:function (opt){
		
		var opts = opt || {};
		
		if (!opts.url) {
			alert('请填写接口地址');
			return false;
		}
		
		axios({
			method: opts.type || 'post',
			url: opts.url,
            data: opts.data || {},
			params: opts.params || {},
			headers: opts.headers || {/*
                Accept:'application/json',
			  	'Content-Type':'application/x-www-form-urlencoded'*/
			},
			// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  			// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
			baseURL:'https://finbridge.cn',
			/*timeout: opts.time || 10*1000,
			responseType: opts.dataType || 'json'*/
		}).then(function(res){
			console.log('成功');
			if(res.status == 200 ){
				
				if(opts.success){
					opts.success(res.data,res);
				}
				
			}else{
				
				if (data.error) {
					opts.error(error);
				}else{
					alert('好多人在访问呀，请重新试试[timeout]');
				}
				
			}
			
				
		}).catch(function (error){

			if (opts.error) {
				opts.error(error);
			}else{
				alert('好多人在访问呀，请重新试试[timeout]');
			}
		});
			
	},
	/*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
	isArrayLike:function(obj) {
    if (!obj)
        return false
    var n = obj.length
    if (n === (n >>> 0)) { //检测length属性是否为非负整数
        var type = serialize.call(obj).slice(8, -1)
        if (/(?:regexp|string|function|window|global)$/i.test(type))
            return false
        if (type === "Array")
            return true
        try {
            if ({}.propertyIsEnumerable.call(obj, "length") === false) { //如果是原生对象
                return /^\s?function/.test(obj.item || obj.callee)
            }
            return true
        } catch (e) { //IE的NodeList直接抛错
            return !obj.window //IE6-8 window
        }
    }
    return false
	},
	/*遍历数组与对象,回调的第一个参数为索引或键名,第二个或元素或键值*/
    each: function (obj, fn) {
    	var That = this;
        if (obj) { //排除null, undefined
            var i = 0
            if (That.isArrayLike(obj)) {
                for (var n = obj.length; i < n; i++) {
                    if (fn(i, obj[i]) === false)
                        break
                }
            } else {
                for (i in obj) {
                    if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
                        break
                    }
                }
            }
        }
    },
	/**
	  * 获取url传过来的参数
	  * @param name 	获取的参数
	  * @param Url 		自定义获取参数的链接
	  * @param return
	*/
    GetQueryString:function (name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    
};


export default Rxports;


































