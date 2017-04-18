<template>
  <div class="only">
    <div class="mainbody-outer"> 
        <div class="main_outer" style="width:1198px;margin:0 auto;">
            <div class="main_header_nav" style="height:78px;">
              <ul>
                <router-link to="/tao"><div>便利购</div></router-link>
                <router-link to="/only/tao" ><div class="cli">便利淘</div></router-link>
                <router-link to="/tao"><div>便利筹</div></router-link>
              </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'only',
  data () {
    return {
      
    }
  },
  methods:{
    
  },
 created() {
  //  debugger
        this.$nextTick(function(){
            // 便利淘、便利购、便利筹切换
          $(".main_outer .main_header_nav ul div").click(function(){
              $(this).css({"color":"#fff","background":"url(../static/images/icon_tie2.png) no-repeat","transform":"translateY(7px)","transition":"transform 0.7s"});
              $(this).parent().siblings().find("div").css({"color":"#696969","background":"url(../static/images/icon_tie1.png) no-repeat","transform":"translateY(0px)","transition":"transform 0.7s"});
          });
        // 竖直导航菜单
        //  $(".left-menu a").click(function(){
        //    $(this).$router.go('https://www.baidu.com/');
        //  });
        })
    }
 
}
</script>

<style>
.mainbody-outer{
      background: #f5f5f5;
      overflow: hidden;
      /*border:1px solid red;*/
   }
   .main_outer .main_header_nav ul a{
     float:left;
     /*border:1px solid red;*/
     width:139px;
     height:53px;
     padding-top:25px;
     }
  .main_outer .main_header_nav ul a .cli{
    color:#fff;
    background:url(../assets/images/icon_tie2.png) no-repeat;
    transform:translateY(7px);
    transition:transform 0.7s;
  }
    .main_outer .main_header_nav ul a div{
        width:139px;
        height:43px;
        line-height: 43px;
        /*border:1px solid red;*/
        text-align: center;
        font-size: 17px;
        color:#696969;
        cursor: pointer;
        margin-top:5px;
        background: url(../assets/images/icon_tie1.png) no-repeat;
      }



</style>