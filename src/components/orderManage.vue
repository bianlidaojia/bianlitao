<template>
  <div class="order_manage">
    <div class="order_head">
        <div class="order_tab">
          <ul>
            <router-link :to="{name:'taobao'}" @click.native="toggle('taobao')" :class="{'selected':isA == 'taobao' || !isA}" >淘宝</router-link>
            <router-link :to="{name:'smTicket'}" @click.native="toggle('jindong')" :class="{'selected':isA == 'jindong'}"> 京东</router-link>
            <router-link :to="{name:'smTicket'}" @click.native="toggle('piao')" :class="{'selected':isA == 'piao'}">小票</router-link>
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
    <router-view></router-view>
  </div>
</template>

<script>

// mounted 钩子函数  这里去请求豆瓣数据
export default {
  data () {
    return {
      isA:false
    }
  },
  created:function(){ //这里mounted和created生命周期函数区
      
        this.$ajax({
          method: 'post',
          url: 'http://api-test.bianlitao.com.cn/index/personmessage',
          data: {
            
          }
      }).then(function(res){
          // console.log(res)
        }).catch(function(err){
          console.log(err)
        })
      
  },
  methods: {
    toggle:function(e){
      this.isA = e;
    }
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
ul a{float:left;}
.order_head .order_tab ul a{
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

</style>