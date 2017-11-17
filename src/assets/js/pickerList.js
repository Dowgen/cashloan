var eduList = [{
    name: '研究生及以上',
    value: '研究生及以上',
    parent:0
},{
    name: '本科',
    value: '本科',
    parent:0
},{
    name: '大专',
    value: '大专',
    parent:0
},{
    name: '高中',
    value: '高中',
    parent:0
},{
    name: '中专',
    value: '中专',
    parent:0
},{
    name: '初中及以下',
    value: '初中及以下',
    parent:0
}];
/* 弃用，改为调用接口
var workTypeList = [{
    name:'上班族',
    value:'上班族',
    parent: 0
},{
    name:'自由职业',
    value:'自由职业',
    parent: 0
},{
    name:'学生',
    value:'学生',
    parent: 0
}];*/

var mariList = [{
    name: '已婚',
    value: '已婚',
    parent:0
},{
    name: '未婚',
    value: '未婚',
    parent:0
}];
/* 弃用，改为调用接口
var adviceList = [{
    name: '借款',
    value: '借款',
    parent:0,
},{
    name: '认证',
    value: '认证',
    parent:0,
},{
    name: '还款',
    value: '还款',
    parent:0,
},{
    name: '其他',
    value: '其他',
    parent:0,
}];*/

var cityList = [{
    name: '北京',
    value: '北京',
    parent: 0
},{
    name: '天津',
    value: '天津',
    parent: 0
},{
    name: '山西',
    value: '山西',
    parent: 0
},{
    name: '河北',
    value: '河北',
    parent: 0
},{
    name: '内蒙古',
    value: '内蒙古',
    parent: 0
},{
    name: '辽宁',
    value: '辽宁',
    parent: 0
},{
    name: '吉林',
    value: '吉林',
    parent: 0
},{
    name: '黑龙江',
    value: '黑龙江',
    parent: 0
},{
    name: '上海',
    value: '上海',
    parent: 0
},{
    name: '江苏',
    value: '江苏',
    parent: 0
},{
    name: '浙江',
    value: '浙江',
    parent: 0
},{
    name: '安徽',
    value: '安徽',
    parent: 0
},{
    name: '福建',
    value: '福建',
    parent: 0
},{
    name: '江西',
    value: '江西',
    parent: 0
},{
    name: '山东',
    value: '山东',
    parent: 0
},{
    name: '河南',
    value: '河南',
    parent: 0
},{
    name: '湖北',
    value: '湖北',
    parent: 0
},{
    name: '湖南',
    value: '湖南',
    parent: 0
},{
    name: '广东',
    value: '广东',
    parent: 0
},{
    name: '广西',
    value: '广西',
    parent: 0
},{
    name: '海南',
    value: '海南',
    parent: 0
},{
    name: '重庆',
    value: '重庆',
    parent: 0
},{
    name: '四川',
    value: '四川',
    parent: 0
},{
    name: '贵州',
    value: '贵州',
    parent: 0
},{
    name: '云南',
    value: '云南',
    parent: 0
},{
    name: '西藏',
    value: '西藏',
    parent: 0
},{
    name: '陕西',
    value: '陕西',
    parent: 0
},{
    name: '甘肃',
    value: '甘肃',
    parent: 0
},{
    name: '青海',
    value: '青海',
    parent: 0
},{
    name: '宁夏',
    value: '宁夏',
    parent: 0
},{
    name: '新疆',
    value: '新疆',
    parent: 0
},{
    name: '香港',
    value: '香港',
    parent: 0
},{
    name: '澳门',
    value: '澳门',
    parent: 0
},{
    name:'石家庄',
    value:'石家庄',
    parent: '河北'
},{
    name: '秦皇岛',
    value: '秦皇岛',
    parent: '河北'
},{
    name: '廊坊',
    value: '廊坊',
    parent: '河北'
},{
    name: '保定',
    value: '保定',
    parent: '河北'
},{
    name: '邯郸',
    value: '邯郸',
    parent: '河北'
},{
    name: '唐山',
    value: '唐山',
    parent: '河北'
},{
    name: '邢台',
    value: '邢台',
    parent: '河北'
},{
    name: '衡水',
    value: '衡水',
    parent: '河北'
},{
    name: '张家口',
    value: '张家口',
    parent: '河北'
},{
    name: '承德',
    value: '承德',
    parent: '河北'
},{
    name: '沧州',
    value: '沧州',
    parent: '河北'
},{
    name:'太原',
    value:'太原',
    parent:'山西'
},{
    name:'大同',
    value:'大同',
    parent:'山西'
},{
    name:'长治',
    value:'长治',
    parent:'山西'
},{
    name:'晋中',
    value:'晋中',
    parent:'山西'
},{
    name:'阳泉',
    value:'阳泉',
    parent:'山西'
},{
    name:'朔州',
    value:'朔州',
    parent:'山西'
},{
    name:'运城',
    value:'运城',
    parent:'山西'
},{
    name:'临汾',
    value:'临汾',
    parent:'山西'
},{
    name:'呼和浩特',
    value:'呼和浩特',
    parent:'内蒙古'
},{
    name:'赤峰',
    value:'赤峰',
    parent:'内蒙古'
},{
    name:'通辽',
    value:'通辽',
    parent:'内蒙古'
},{
    name:'锡林郭勒',
    value:'锡林郭勒',
    parent:'内蒙古'
},{
    name:'兴安',
    value:'兴安',
    parent:'内蒙古'
},{
    name:'大连',
    value:'大连',
    parent:'辽宁'
},{
    name:'沈阳',
    value:'沈阳',
    parent:'辽宁'
},{
    name:'鞍山',
    value:'鞍山',
    parent:'辽宁'
},{
    name:'抚顺',
    value:'抚顺',
    parent:'辽宁'
},{
    name:'营口',
    value:'营口',
    parent:'辽宁'
},{
    name:'锦州',
    value:'锦州',
    parent:'辽宁'
},{
    name:'丹东',
    value:'丹东',
    parent:'辽宁'
},{
    name:'朝阳',
    value:'朝阳',
    parent:'辽宁'
},{
    name:'辽阳',
    value:'辽阳',
    parent:'辽宁'
},{
    name:'阜新',
    value:'阜新',
    parent:'辽宁'
},{
    name:'铁岭',
    value:'铁岭',
    parent:'辽宁'
},{
    name:'盘锦',
    value:'盘锦',
    parent:'辽宁'
},{
    name:'本溪',
    value:'本溪',
    parent:'辽宁'
},{
    name:'葫芦岛',
    value:'葫芦岛',
    parent:'辽宁'
},{
    name:'长春',
    value:'长春',
    parent:'吉林'
},{
    name:'吉林',
    value:'吉林',
    parent:'吉林'
},{
    name:'四平',
    value:'四平',
    parent:'吉林'
},{
    name:'辽源',
    value:'辽源',
    parent:'吉林'
},{
    name:'通化',
    value:'通化',
    parent:'吉林'
},{
    name:'延吉',
    value:'延吉',
    parent:'吉林'
},{
    name:'白城',
    value:'白城',
    parent:'吉林'
},{
    name:'辽源',
    value:'辽源',
    parent:'吉林'
},{
    name:'松原',
    value:'松原',
    parent:'吉林'
},{
    name:'临江',
    value:'临江',
    parent:'吉林'
},{
    name:'珲春',
    value:'珲春',
    parent:'吉林'
},{
    name:'哈尔滨',
    value:'哈尔滨',
    parent:'黑龙江'
},{
    name:'齐齐哈尔',
    value:'齐齐哈尔',
    parent:'黑龙江'
},{
    name:'大庆',
    value:'大庆',
    parent:'黑龙江'
},{
    name:'牡丹江',
    value:'牡丹江',
    parent:'黑龙江'
},{
    name:'鹤岗',
    value:'鹤岗',
    parent:'黑龙江'
},{
    name:'佳木斯',
    value:'佳木斯',
    parent:'黑龙江'
},{
    name:'绥化',
    value:'绥化',
    parent:'黑龙江'
},{
    name:'南京',
    value:'南京',
    parent:'江苏'
},{
    name:'苏州',
    value:'苏州',
    parent:'江苏'
},{
    name:'无锡',
    value:'无锡',
    parent:'江苏'
},{
    name:'常州',
    value:'常州',
    parent:'江苏'
},{
    name:'扬州',
    value:'扬州',
    parent:'江苏'
},{
    name:'徐州',
    value:'徐州',
    parent:'江苏'
},{
    name:'南通',
    value:'南通',
    parent:'江苏'
},{
    name:'镇江',
    value:'镇江',
    parent:'江苏'
},{
    name:'泰州',
    value:'泰州',
    parent:'江苏'
},{
    name:'淮安',
    value:'淮安',
    parent:'江苏'
},{
    name:'连云港',
    value:'连云港',
    parent:'江苏'
},{
    name:'宿迁',
    value:'宿迁',
    parent:'江苏'
},{
    name:'盐城',
    value:'盐城',
    parent:'江苏'
},{
    name:'淮阴',
    value:'淮阴',
    parent:'江苏'
},{
    name:'沐阳',
    value:'沐阳',
    parent:'江苏'
},{
    name:'张家港',
    value:'张家港',
    parent:'江苏'
},{
    name:'杭州',
    value:'杭州',
    parent:'浙江'
},{
    name:'金华',
    value:'金华',
    parent:'浙江'
},{
    name:'宁波',
    value:'宁波',
    parent:'浙江'
},{
    name:'温州',
    value:'温州',
    parent:'浙江'
},{
    name:'嘉兴',
    value:'嘉兴',
    parent:'浙江'
},{
    name:'绍兴',
    value:'绍兴',
    parent:'浙江'
},{
    name:'丽水',
    value:'丽水',
    parent:'浙江'
},{
    name:'湖州',
    value:'湖州',
    parent:'浙江'
},{
    name:'台州',
    value:'台州',
    parent:'浙江'
},{
    name:'舟山',
    value:'舟山',
    parent:'浙江'
},{
    name:'衢州',
    value:'衢州',
    parent:'浙江'
},{
    name:'合肥',
    value:'合肥',
    parent:'安徽'
},{
    name:'马鞍山',
    value:'马鞍山',
    parent:'安徽'
},{
    name:'蚌埠',
    value:'蚌埠',
    parent:'安徽'
},{
    name:'黄山',
    value:'黄山',
    parent:'安徽'
},{
    name:'芜湖',
    value:'芜湖',
    parent:'安徽'
},{
    name:'淮南',
    value:'淮南',
    parent:'安徽'
},{
    name:'铜陵',
    value:'铜陵',
    parent:'安徽'
},{
    name:'阜阳',
    value:'阜阳',
    parent:'安徽'
},{
    name:'宣城',
    value:'宣城',
    parent:'安徽'
},{
    name:'安庆',
    value:'安庆',
    parent:'安徽'
},{
    name:'福州',
    value:'福州',
    parent:'福建'
},{
    name:'厦门',
    value:'厦门',
    parent:'福建'
},{
    name:'泉州',
    value:'泉州',
    parent:'福建'
},{
    name:'漳州',
    value:'漳州',
    parent:'福建'
},{
    name:'南平',
    value:'南平',
    parent:'福建'
},{
    name:'龙岩',
    value:'龙岩',
    parent:'福建'
},{
    name:'莆田',
    value:'莆田',
    parent:'福建'
},{
    name:'三明',
    value:'三明',
    parent:'福建'
},{
    name:'宁德',
    value:'宁德',
    parent:'福建'
},{
    name:'南昌',
    value:'南昌',
    parent:'江西'
},{
    name:'景德镇',
    value:'景德镇',
    parent:'江西'
},{
    name:'上饶',
    value:'上饶',
    parent:'江西'
},{
    name:'萍乡',
    value:'萍乡',
    parent:'江西'
},{
    name:'九江',
    value:'九江',
    parent:'江西'
},{
    name:'吉安',
    value:'吉安',
    parent:'江西'
},{
    name:'宜春',
    value:'宜春',
    parent:'江西'
},{
    name:'鹰潭',
    value:'鹰潭',
    parent:'江西'
},{
    name:'新余',
    value:'新余',
    parent:'江西'
},{
    name:'赣州',
    value:'赣州',
    parent:'江西'
},{
    name:'青岛',
    value:'青岛',
    parent:'山东'
},{
    name:'济南',
    value:'济南',
    parent:'山东'
},{
    name:'淄博',
    value:'淄博',
    parent:'山东'
},{
    name:'烟台',
    value:'烟台',
    parent:'山东'
},{
    name:'泰安',
    value:'泰安',
    parent:'山东'
},{
    name:'临沂',
    value:'临沂',
    parent:'山东'
},{
    name:'日照',
    value:'日照',
    parent:'山东'
},{
    name:'德州',
    value:'德州',
    parent:'山东'
},{
    name:'威海',
    value:'威海',
    parent:'山东'
},{
    name:'东营',
    value:'东营',
    parent:'山东'
},{
    name:'荷泽',
    value:'荷泽',
    parent:'山东'
},{
    name:'济宁',
    value:'济宁',
    parent:'山东'
},{
    name:'潍坊',
    value:'潍坊',
    parent:'山东'
},{
    name:'枣庄',
    value:'枣庄',
    parent:'山东'
},{
    name:'聊城',
    value:'聊城',
    parent:'山东'
},{
    name:'郑州',
    value:'郑州',
    parent:'河南'
},{
    name:'洛阳',
    value:'洛阳',
    parent:'河南'
},{
    name:'开封',
    value:'开封',
    parent:'河南'
},{
    name:'平顶山',
    value:'平顶山',
    parent:'河南'
},{
    name:'濮阳',
    value:'濮阳',
    parent:'河南'
},{
    name:'安阳',
    value:'安阳',
    parent:'河南'
},{
    name:'许昌',
    value:'许昌',
    parent:'河南'
},{
    name:'南阳',
    value:'南阳',
    parent:'河南'
},{
    name:'信阳',
    value:'信阳',
    parent:'河南'
},{
    name:'周口',
    value:'周口',
    parent:'河南'
},{
    name:'新乡',
    value:'新乡',
    parent:'河南'
},{
    name:'焦作',
    value:'焦作',
    parent:'河南'
},{
    name:'三门峡',
    value:'三门峡',
    parent:'河南'
},{
    name:'商丘',
    value:'商丘',
    parent:'河南'
},{
    name:'武汉',
    value:'武汉',
    parent:'湖北'
},{
    name:'襄樊',
    value:'襄樊',
    parent:'湖北'
},{
    name:'孝感',
    value:'孝感',
    parent:'湖北'
},{
    name:'十堰',
    value:'十堰',
    parent:'湖北'
},{
    name:'荆州',
    value:'荆州',
    parent:'湖北'
},{
    name:'黄石',
    value:'黄石',
    parent:'湖北'
},{
    name:'宜昌',
    value:'宜昌',
    parent:'湖北'
},{
    name:'黄冈',
    value:'黄冈',
    parent:'湖北'
},{
    name:'恩施',
    value:'恩施',
    parent:'湖北'
},{
    name:'鄂州',
    value:'鄂州',
    parent:'湖北'
},{
    name:'江汉',
    value:'江汉',
    parent:'湖北'
},{
    name:'随枣',
    value:'随枣',
    parent:'湖北'
},{
    name:'荆沙',
    value:'荆沙',
    parent:'湖北'
},{
    name:'咸宁',
    value:'咸宁',
    parent:'湖北'
},{
    name:'长沙',
    value:'长沙',
    parent:'湖南'
},{
    name:'湘潭',
    value:'湘潭',
    parent:'湖南'
},{
    name:'岳阳',
    value:'岳阳',
    parent:'湖南'
},{
    name:'株洲',
    value:'株洲',
    parent:'湖南'
},{
    name:'怀化',
    value:'怀化',
    parent:'湖南'
},{
    name:'永州',
    value:'永州',
    parent:'湖南'
},{
    name:'益阳',
    value:'益阳',
    parent:'湖南'
},{
    name:'张家界',
    value:'张家界',
    parent:'湖南'
},{
    name:'常德',
    value:'常德',
    parent:'湖南'
},{
    name:'衡阳',
    value:'衡阳',
    parent:'湖南'
},{
    name:'湘西',
    value:'湘西',
    parent:'湖南'
},{
    name:'邵阳',
    value:'邵阳',
    parent:'湖南'
},{
    name:'娄底',
    value:'娄底',
    parent:'湖南'
},{
    name:'郴州',
    value:'郴州',
    parent:'湖南'
},{
    name:'广州',
    value:'广州',
    parent:'广东'
},{
    name:'深圳',
    value:'深圳',
    parent:'广东'
},{
    name:'东莞',
    value:'东莞',
    parent:'广东'
},{
    name:'佛山',
    value:'佛山',
    parent:'广东'
},{
    name:'珠海',
    value:'珠海',
    parent:'广东'
},{
    name:'汕头',
    value:'汕头',
    parent:'广东'
},{
    name:'韶关',
    value:'韶关',
    parent:'广东'
},{
    name:'江门',
    value:'江门',
    parent:'广东'
},{
    name:'梅州',
    value:'梅州',
    parent:'广东'
},{
    name:'揭阳',
    value:'揭阳',
    parent:'广东'
},{
    name:'中山',
    value:'中山',
    parent:'广东'
},{
    name:'河源',
    value:'河源',
    parent:'广东'
},{
    name:'惠州',
    value:'惠州',
    parent:'广东'
},{
    name:'茂名',
    value:'茂名',
    parent:'广东'
},{
    name:'湛江',
    value:'湛江',
    parent:'广东'
},{
    name:'阳江',
    value:'阳江',
    parent:'广东'
},{
    name:'潮州',
    value:'潮州',
    parent:'广东'
},{
    name:'云浮',
    value:'云浮',
    parent:'广东'
},{
    name:'汕尾',
    value:'汕尾',
    parent:'广东'
},{
    name:'潮阳',
    value:'潮阳',
    parent:'广东'
},{
    name:'肇庆',
    value:'肇庆',
    parent:'广东'
},{
    name:'顺德',
    value:'顺德',
    parent:'广东'
},{
    name:'清远',
    value:'清远',
    parent:'广东'
},{
    name:'南宁',
    value:'南宁',
    parent:'广西'
},{
    name:'桂林',
    value:'桂林',
    parent:'广西'
},{
    name:'柳州',
    value:'柳州',
    parent:'广西'
},{
    name:'梧州',
    value:'梧州',
    parent:'广西'
},{
    name:'来宾',
    value:'来宾',
    parent:'广西'
},{
    name:'贵港',
    value:'贵港',
    parent:'广西'
},{
    name:'玉林',
    value:'玉林',
    parent:'广西'
},{
    name:'贺州',
    value:'贺州',
    parent:'广西'
},{
    name:'海口',
    value:'海口',
    parent:'海南'
},{
    name:'三亚',
    value:'三亚',
    parent:'海南'
},{
    name:'渝中',
    value:'渝中',
    parent:'重庆'
},{
    name:'大渡口',
    value:'大渡口',
    parent:'重庆'
},{
    name:'江北',
    value:'江北',
    parent:'重庆'
},{
    name:'沙坪坝',
    value:'沙坪坝',
    parent:'重庆'
},{
    name:'九龙坡',
    value:'九龙坡',
    parent:'重庆'
},{
    name:'南岸',
    value:'南岸',
    parent:'重庆'
},{
    name:'北碚',
    value:'北碚',
    parent:'重庆'
},{
    name:'万盛',
    value:'万盛',
    parent:'重庆'
},{
    name:'双桥',
    value:'双桥',
    parent:'重庆'
},{
    name:'渝北',
    value:'渝北',
    parent:'重庆'
},{
    name:'巴南',
    value:'巴南',
    parent:'重庆'
},{
    name:'万州',
    value:'万州',
    parent:'重庆'
},{
    name:'涪陵',
    value:'涪陵',
    parent:'重庆'
},{
    name:'黔江',
    value:'黔江',
    parent:'重庆'
},{
    name:'长寿',
    value:'长寿',
    parent:'重庆'
},{
    name:'成都',
    value:'成都',
    parent:'四川'
},{
    name:'达州',
    value:'达州',
    parent:'四川'
},{
    name:'南充',
    value:'南充',
    parent:'四川'
},{
    name:'乐山',
    value:'乐山',
    parent:'四川'
},{
    name:'绵阳',
    value:'绵阳',
    parent:'四川'
},{
    name:'德阳',
    value:'德阳',
    parent:'四川'
},{
    name:'内江',
    value:'内江',
    parent:'四川'
},{
    name:'遂宁',
    value:'遂宁',
    parent:'四川'
},{
    name:'宜宾',
    value:'宜宾',
    parent:'四川'
},{
    name:'巴中',
    value:'巴中',
    parent:'四川'
},{
    name:'自贡',
    value:'自贡',
    parent:'四川'
},{
    name:'康定',
    value:'康定',
    parent:'四川'
},{
    name:'攀枝花',
    value:'攀枝花',
    parent:'四川'
},{
    name:'贵阳',
    value:'贵阳',
    parent:'贵州'
},{
    name:'遵义',
    value:'遵义',
    parent:'贵州'
},{
    name:'安顺',
    value:'安顺',
    parent:'贵州'
},{
    name:'黔西南',
    value:'黔西南',
    parent:'贵州'
},{
    name:'都匀',
    value:'都匀',
    parent:'贵州'
},{
    name:'昆明',
    value:'昆明',
    parent:'云南'
},{
    name:'丽江',
    value:'丽江',
    parent:'云南'
},{
    name:'昭通',
    value:'昭通',
    parent:'云南'
},{
    name:'玉溪',
    value:'玉溪',
    parent:'云南'
},{
    name:'临沧',
    value:'临沧',
    parent:'云南'
},{
    name:'文山',
    value:'文山',
    parent:'云南'
},{
    name:'红河',
    value:'红河',
    parent:'云南'
},{
    name:'楚雄',
    value:'楚雄',
    parent:'云南'
},{
    name:'大理',
    value:'大理',
    parent:'云南'
},{
    name:'拉萨',
    value:'拉萨',
    parent:'西藏'
},{
    name:'林芝',
    value:'林芝',
    parent:'西藏'
},{
    name:'日喀则',
    value:'日喀则',
    parent:'西藏'
},{
    name:'昌都',
    value:'昌都',
    parent:'西藏'
},{
    name:'西安',
    value:'西安',
    parent:'陕西'
},{
    name:'咸阳',
    value:'咸阳',
    parent:'陕西'
},{
    name:'延安',
    value:'延安',
    parent:'陕西'
},{
    name:'汉中',
    value:'汉中',
    parent:'陕西'
},{
    name:'榆林',
    value:'榆林',
    parent:'陕西'
},{
    name:'商南',
    value:'商南',
    parent:'陕西'
},{
    name:'略阳',
    value:'略阳',
    parent:'陕西'
},{
    name:'宜君',
    value:'宜君',
    parent:'陕西'
},{
    name:'麟游',
    value:'麟游',
    parent:'陕西'
},{
    name:'白河',
    value:'白河',
    parent:'陕西'
},{
    name:'兰州',
    value:'兰州',
    parent:'甘肃'
},{
    name:'金昌',
    value:'金昌',
    parent:'甘肃'
},{
    name:'天水',
    value:'天水',
    parent:'甘肃'
},{
    name:'武威',
    value:'武威',
    parent:'甘肃'
},{
    name:'张掖',
    value:'张掖',
    parent:'甘肃'
},{
    name:'平凉',
    value:'平凉',
    parent:'甘肃'
},{
    name:'酒泉',
    value:'酒泉',
    parent:'甘肃'
},{
    name:'黄南',
    value:'黄南',
    parent:'青海'
},{
    name:'海南',
    value:'海南',
    parent:'青海'
},{
    name:'西宁',
    value:'西宁',
    parent:'青海'
},{
    name:'海东',
    value:'海东',
    parent:'青海'
},{
    name:'海西',
    value:'海西',
    parent:'青海'
},{
    name:'海北',
    value:'海北',
    parent:'青海'
},{
    name:'果洛',
    value:'果洛',
    parent:'青海'
},{
    name:'玉树',
    value:'玉树',
    parent:'青海'
},{
    name:'银川',
    value:'银川',
    parent:'宁夏'
},{
    name:'吴忠',
    value:'吴忠',
    parent:'宁夏'
},{
    name:'乌鲁木齐',
    value:'乌鲁木齐',
    parent:'新疆'
},{
    name:'哈密',
    value:'哈密',
    parent:'新疆'
},{
    name:'喀什',
    value:'喀什',
    parent:'新疆'
},{
    name:'巴音郭楞',
    value:'巴音郭楞',
    parent:'新疆'
},{
    name:'昌吉',
    value:'昌吉',
    parent:'新疆'
},{
    name:'伊犁',
    value:'伊犁',
    parent:'新疆'
},{
    name:'阿勒泰',
    value:'阿勒泰',
    parent:'新疆'
},{
    name:'克拉玛依',
    value:'克拉玛依',
    parent:'新疆'
},{
    name:'博尔塔拉',
    value:'博尔塔拉',
    parent:'新疆'
},{
    name:'中西区',
    value:'中西区',
    parent:'香港'
},{
    name:'湾仔区',
    value:'湾仔区',
    parent:'香港'
},{
    name:'东区',
    value:'东区',
    parent:'香港'
},{
    name:'南区',
    value:'南区',
    parent:'香港'
},{
    name:'九龙-油尖旺区',
    value:'九龙-油尖旺区',
    parent:'香港'
},{
    name:'九龙-深水埗区',
    value:'九龙-深水埗区',
    parent:'香港'
},{
    name:'九龙-九龙城区',
    value:'九龙-九龙城区',
    parent:'香港'
},{
    name:'九龙-黄大仙区',
    value:'九龙-黄大仙区',
    parent:'香港'
},{
    name:'九龙-观塘区',
    value:'九龙-观塘区',
    parent:'香港'
},{
    name:'新界-北区',
    value:'新界-北区',
    parent:'香港'
},{
    name:'新界-大埔区',
    value:'新界-大埔区',
    parent:'香港'
},{
    name:'新界-沙田区',
    value:'新界-沙田区',
    parent:'香港'
},{
    name:'新界-西贡区',
    value:'新界-西贡区',
    parent:'香港'
},{
    name:'新界-荃湾区',
    value:'新界-荃湾区',
    parent:'香港'
},{
    name:'新界-屯门区',
    value:'新界-屯门区',
    parent:'香港'
},{
    name:'新界-元朗区',
    value:'新界-元朗区',
    parent:'香港'
},{
    name:'新界-葵青区',
    value:'新界-葵青区',
    parent:'香港'
},{
    name:'新界-离岛区',
    value:'新界-离岛区',
    parent:'香港'
},{
    name:'花地玛堂区',
    value:'花地玛堂区',
    parent:'澳门'
},{
    name:'圣安多尼堂区',
    value:'圣安多尼堂区',
    parent:'澳门'
},{
    name:'大堂区',
    value:'大堂区',
    parent:'澳门'
},{
    name:'望德堂区',
    value:'望德堂区',
    parent:'澳门'
},{
    name:'风顺堂区',
    value:'风顺堂区',
    parent:'澳门'
},{
    name:'嘉模堂区',
    value:'嘉模堂区',
    parent:'澳门'
},{
    name:'圣方济各堂区',
    value:'圣方济各堂区',
    parent:'澳门'
},{
    name:'路氹城',
    value:'路氹城',
    parent:'澳门'
},{
    name:'西城',
    value:'西城',
    parent:'北京'
},{
    name:'东城',
    value:'东城',
    parent:'北京'
},{
    name:'朝阳',
    value:'朝阳',
    parent:'北京'
},{
    name:'海淀',
    value:'海淀',
    parent:'北京'
},{
    name:'丰台',
    value:'丰台',
    parent:'北京'
},{
    name:'石景山',
    value:'石景山',
    parent:'北京'
},{
    name:'门头沟',
    value:'门头沟',
    parent:'北京'
},{
    name:'房山',
    value:'房山',
    parent:'北京'
},{
    name:'通州',
    value:'通州',
    parent:'北京'
},{
    name:'顺义',
    value:'顺义',
    parent:'北京'
},{
    name:'大兴',
    value:'大兴',
    parent:'北京'
},{
    name:'昌平',
    value:'昌平',
    parent:'北京'
},{
    name:'平谷',
    value:'平谷',
    parent:'北京'
},{
    name:'怀柔',
    value:'怀柔',
    parent:'北京'
},{
    name:'密云',
    value:'密云',
    parent:'北京'
},{
    name:'延庆',
    value:'延庆',
    parent:'北京'
},{
    name:'青羊',
    value:'青羊',
    parent:'天津'
},{
    name:'河东',
    value:'河东',
    parent:'天津'
},{
    name:'河西',
    value:'河西',
    parent:'天津'
},{
    name:'南开',
    value:'南开',
    parent:'天津'
},{
    name:'河北',
    value:'河北',
    parent:'天津'
},{
    name:'红桥',
    value:'红桥',
    parent:'天津'
},{
    name:'塘沽',
    value:'塘沽',
    parent:'天津'
},{
    name:'汉沽',
    value:'汉沽',
    parent:'天津'
},{
    name:'大港',
    value:'大港',
    parent:'天津'
},{
    name:'东丽',
    value:'东丽',
    parent:'天津'
},{
    name:'西青',
    value:'西青',
    parent:'天津'
},{
    name:'北辰',
    value:'北辰',
    parent:'天津'
},{
    name:'津南',
    value:'津南',
    parent:'天津'
},{
    name:'武清',
    value:'武清',
    parent:'天津'
},{
    name:'宝坻',
    value:'宝坻',
    parent:'天津'
},{
    name:'静海',
    value:'静海',
    parent:'天津'
},{
    name:'宁河',
    value:'宁河',
    parent:'天津'
},{
    name:'蓟县',
    value:'蓟县',
    parent:'天津'
},{
    name:'开发区',
    value:'开发区',
    parent:'天津'
},{
    name:'浦东',
    value:'浦东',
    parent:'上海'
},{
    name:'杨浦',
    value:'杨浦',
    parent:'上海'
},{
    name:'徐汇',
    value:'徐汇',
    parent:'上海'
},{
    name:'静安',
    value:'静安',
    parent:'上海'
},{
    name:'卢湾',
    value:'卢湾',
    parent:'上海'
},{
    name:'黄浦',
    value:'黄浦',
    parent:'上海'
},{
    name:'普陀',
    value:'普陀',
    parent:'上海'
},{
    name:'闸北',
    value:'闸北',
    parent:'上海'
},{
    name:'虹口',
    value:'虹口',
    parent:'上海'
},{
    name:'长宁',
    value:'长宁',
    parent:'上海'
},{
    name:'宝山',
    value:'宝山',
    parent:'上海'
},{
    name:'闵行',
    value:'闵行',
    parent:'上海'
},{
    name:'嘉定',
    value:'嘉定',
    parent:'上海'
},{
    name:'金山',
    value:'金山',
    parent:'上海'
},{
    name:'松江',
    value:'松江',
    parent:'上海'
},{
    name:'青浦',
    value:'青浦',
    parent:'上海'
},{
    name:'崇明',
    value:'崇明',
    parent:'上海'
},{
    name:'奉贤',
    value:'奉贤',
    parent:'上海'
},{
    name:'南汇',
    value:'南汇',
    parent:'上海'
}]

export {mariList, eduList, workTypeList, cityList,adviceList};