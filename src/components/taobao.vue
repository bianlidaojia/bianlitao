<template>
    <div class="order_data1">
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
</template>

<script>

</script>

<style>
.order_data1 ul li{
    float: left;
    /*border:1px solid red;*/
}
.order_data1{
  width:100%;
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  margin-top:15px;
  }
  .order_data1 ul{width:100%;}
  .order_data1 .ul1 li{width:16%;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .order_data1 .ul2 li{width:16%;font-size:14px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .order_data1 .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
  .order_data1 .ul3 li:last-child{width:100px;background: #ff7b3f;color:#fff;}
</style>