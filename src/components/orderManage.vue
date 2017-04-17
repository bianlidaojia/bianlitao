<template>
  <div class="order_manage">
    <div class="order_head">
        <div class="order_tab">
          <ul>
            <li class="selected">淘宝</li>
            <li>京东</li>
            <li>小票</li>
          </ul>
        </div>
        <div class="search_parms">
           <ul>
              <li>
                <span>筛选</span>
                <select name="" id="">
                  <option value="">全部</option>
                  <option value="">已存入</option>
                  <option value="">未审核</option>
                </select>
                </li>
              <li><input type="text" name="search" value=""  placeholder="搜索用户ID/商品关键字/小票关键字"><input type="button" value="搜索"></li>
           </ul>
        </div>
    </div>
    <div class="order_data">
       <ul class="ul1">
         <li style="width:10%;">用户ID</li>
         <li>用户昵称</li>
         <li>淘宝订单号</li>
         <li>提交时间</li>
         <li>订单金额</li>
         <li>订单状态</li>
         <li style="width:10%;">订单操作</li>
       </ul>
       <ul class="ul2">
         <li style="width:10%;">0298655689</li>
         <li>小怪兽</li>
         <li>31704719831660986</li>
         <li>2017-03-26 14:45:46</li>
         <li>￥9.90</li>
         <li>已存入</li>
         <li style="width:10%;color:#ff7b3f;cursor:pointer;"> <router-link to="details">查看订单</router-link></li>
       </ul>
        <ul class="ul3">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>下一页</li>
        </ul>
    </div>
  </div>
</template>

<script>

// mounted 钩子函数  这里去请求豆瓣数据
export default {
  name: 'orderManage',
  created:function(){  //这里mounted和created生命周期函数区

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order_manage{
  height:100%;
  overflow: hidden;
  /*border:1px solid red;*/
}
.order_head{
  width:100%;
  height:70px;
  /*border:1px solid #ccc;*/
  /*padding:0px 3%;*/
}
/*tab切换*/
.order_head .order_tab{
  float:left;
  padding-top:20px;
  /*border:1px solid red;*/
}
ul li{float:left;}
.order_head .order_tab ul li{
  cursor: pointer;
  height:38px;
  line-height: 38px;
  text-align: center;
  padding:0px 30px;
  border-bottom:1px solid #ccc;
  font-size: 15px;
  color:#959595;
}
.order_head .order_tab .selected{
  color:#ff7b3f;
  border:1px solid #ccc;
  background: #f5f5f5;
  border-bottom: 0px;
}
/*搜索栏*/
.order_head .search_parms{
  float:right;
  padding-top:25px;
  /*border:1px solid red;*/
}
.order_head .search_parms ul li:first-child{
  margin-right:40px;
}
.order_head .search_parms ul li span{color:#696969;font-size:16px;margin-right:5px;}
.order_head .search_parms ul li select{width:115px;color:#959595;height:30px;line-height: 30px;text-indent: 5px;background: #f5f5f5;}
.order_head .search_parms ul input[type="text"]{height:26px;line-height: 26px;width:270px;margin-right:10px;text-indent: 5px;}
.order_head .search_parms ul input[type="button"]{width:63px;height:28px;line-height: 28px;background: #f5f5f5;border:1px solid #959595;}
.order_data{
  width:100%;
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  margin-top:15px;
  }
  .order_data ul{width:100%;}
  .order_data .ul1 li{width:16%;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .ul2 li{width:16%;font-size:14px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
   .ul3 li:last-child{width:100px;background: #ff7b3f;color:#fff;}
</style>