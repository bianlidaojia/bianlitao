<template>
    <div class="order_data">
       <ul class="ul1">
         <li style="width:20%;">用户ID</li>
         <li>订单编号</li>
         <li>上传时间</li>
         <li>订单状态</li>
         <li style="width:20%;">订单操作</li>
       </ul>
       <ul class="ul2">
         <li style="width:20%;">0298655689</li>
         <li>31704719831660986</li>
         <li>2017-03-26 14:45:46</li>
         <li>已存入</li>
         <li style="width:20%;color:#ff7b3f;cursor:pointer;"> <router-link :to="{name:'details'}">查看订单</router-link></li>
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
 export default {
  data () {
    return {
      isA:false
    }
  },
  created:function(){ //这里mounted和created生命周期函数区
      
        this.$ajax({
          method: 'get',
          url: 'static/ticketList.json',
          data: {
            
          }
      }).then(function(res){
          console.log(res)
          debugger
        }).catch(function(err){
          console.log(err)
        })
      
  },
  methods: {
      
  }
}
</script>

<style>

ul li{
    float: left
}
    .order_data{
  width:100%;
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  margin-top:15px;
  }
  /*.order_data ul{height: 50px;display: block}*/
  .order_data .ul1 li{width:20%;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .ul2 li{width:20%;font-size:14px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
   .ul3 li:last-child{width:100px;background: #ff7b3f;color:#fff;}
</style>