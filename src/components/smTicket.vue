<template>
    <div class="order_data">
       <ul class="ul1">
         <li style="width:20%;">用户ID</li>
         <li>订单编号</li>
         <li>上传时间</li>
         <li>订单状态</li>
         <li style="width:20%;">订单操作</li>
       </ul>
       <ul class="ul2" v-for="(item,index) in list.data">
         <li style="width:20%;" v-text="`${item.member_id}`">0298655689</li>
         <li v-text="`${item.order_number}`">31704719831660986</li>
         <li v-text="`${item.create_time}`">2017-03-26 14:45:46</li>
         <li v-if="item.order_status == 20">待审核</li>
         <li v-else-if="item.order_status == 30">已存入</li>
         <li v-else>无效</li>
         <li style="width:20%;color:#ff7b3f;cursor:pointer;"><router-link to="details" v-if="item.order_status == 20" >审核小票</router-link>
         <router-link to="details" v-else>查看订单</router-link></li>
       </ul>
        <ul class="ul3">
          <li v-for="n in (+list.totalPage)" @click="toggleN(n)">{{n}}</li>
        </ul>
        <botton @click="toggle">下一页</botton>
    </div>
</template>

<script>
 export default {
  data () {
    return {
      isA:false,
      page1:0,
      list:[]
    }
  },
  created () {
    this.getList(1)
  },
  methods: {
      getList (i) {
          if(i > this.list.totalPage){
              alert("没有下一页了")
              return
          }
          this.page1 = i
          this.$ajax({
          method: 'get',
          url: 'static/json/ticketList.json',
          data: {
            totalPage:i
          }
      }).then((res) => {
          console.log(res);
          this.list = res.data;
        //   debugger
        }).catch((err) => {
          console.log(err)
        })
      },
      toggle() {
          const n = this.page1 +1
          this.getList(n)
      },
      toggleN(n){
          this.getList(n)
      }
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
    botton{width:50px;height: 35px;float: left;background: #ff7b3f;color:#fff;margin-left:5px;margin-top:20px;line-height:35px;text-align:}
</style>