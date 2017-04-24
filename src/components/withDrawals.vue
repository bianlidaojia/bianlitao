<template>
    <div class="drawalsList">
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
      <div class="order_data">
       <ul class="ul1">
         <li >用户ID</li>
         <li>提现订单号</li>
         <li>申请提现金额</li>
         <li>申请时间</li>
         <li >提现状态</li>
         <li >付款订单号</li>
         <li style="width: 10%">备注</li>
         <li >功能操作</li>
       </ul>
       <ul class="ul2" v-for="(item,index) in list.list">
         <li  v-text="`${item.member_id}`">0298655689</li>
         <li v-text="`${item.record_order_id}`">31704719831660986</li>
         <li v-text="`${item.bh_money}`"></li>
         <li v-text="`${item.add_time}`"></li> 
         <li v-text="`${item.name}`"></li>         
         <li v-if="item.order_id" v-text="`${item.order_id}`"></li>
         <li v-else >{{"--"}}</li>
         <li v-if="item.order_id" v-text="`${item.comment}`"></li>
         <li v-else >{{"--"}}</li>                                                          
         <li style="color:#ff7b3f;cursor:pointer;"><router-link :to="{name:'withDrawalsDetail'}" >查看详情</router-link></li>
       </ul>
        <ul class="ul3">
          <li v-for="n in (+list.totalPage)" @click="toggleN(n)">{{n}}</li>
        </ul>
        <button @click="toggle">下一页</button>
    </div>

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
    this.withList(1)
   
  },
  methods: {
      withList (i) {
          if(i > this.list.totalPage){
              alert("没有下一页了")
              return
          }
          this.page1 = i
          this.$ajax({
          method: 'get',
          url: 'static/json/txrecord.json',
          data: {
            totalPage:i,
            table:'member_tx_record',
            state:1
          }
      }).then((res) => {
          console.log(res.data.data);
          this.list = res.data.data;
        //   debugger
        }).catch((err) => {
          console.log(err)
        })
      },
      toggle() {
          const n = this.page1 +1
          this.withList(n)
      },
      toggleN(n){
          this.withList(n)
      }
  }
}
</script>

<style>
.drawalsList .search_parms li{
  float:left;
  padding-top:25px;
  margin-left: 20px;
  /*border:1px solid red;*/
}
.drawalsList .search_parms ul{width: 1200px;height: 60px}
.drawalsList .search_parms ul li span{color:#696969;font-size:16px;margin-right:5px;}
.drawalsList .search_parms ul li select{width:115px;color:#959595;height:30px;line-height: 30px;text-indent: 5px;background: #f5f5f5;}
.drawalsList .search_parms ul input[type="text"]{height:26px;line-height: 26px;width:270px;margin-right:10px;text-indent: 5px;}
.drawalsList .search_parms ul input[type="button"]{width:63px;height:28px;line-height: 28px;background: #f5f5f5;border:1px solid #959595;}

.drawalsList .order_data .ul1 li{
    width:12.5%
}
.drawalsList .order_data .ul2 li{
    width:12.5%
}

</style>