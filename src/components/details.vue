<template>
    <div class="detail">
        <!--头部-->
        <div class="detail-header">
            <div class="detail-header-inside">
                <div class="goBack">
                    <span style="padding-right:5px;"><<</span>返回
                </div>
                <div class="inside-detail" id="profit" @click="tabToggle" :class="{'inside-detail-tab':isA =='profit'}">
                    审核小票
               </div>
                <!--<div class="inside-detail" id="profit" @click="tabToggle" :class="{'inside-detail-tab':isA =='profit'}">
                    收益详情
                </div>
                <div class="inside-detail" id="consume" @click="tabToggle" :class="{'inside-detail-tab':isA == 'consume'}">
                    消费详情
                </div>-->
            </div>
        </div>
       <!--内容-->
       <div class="detail-user">
           <div class="detail-tie">用户信息</div>
           <div class="detail-id">
               <span>用户ID</span><span>12344456767676</span>
           </div>
       </div>
       <!--小票详情-->
       <div class="detail-main">
           <div class="detail-xiao" style="width:65%;height:300px;float:left;">
               <div class="detail-tie">小票详情</div>
               <div style="margin-top:20px;color:#959595;">
                   <div class="xiao-picture" style="float:left;" >
                       <div class="picture1" style="float:left;"><div><img src="" alt="" style="width:140px;height:200px;border:1px solid #ccc;margin-right:15px;"></div><div style="text-align:center;height:30px;line-height:30px;font-size:14px;">完整图</div></div>
                       <div class="picture2"  style="float:left;"><div><img src="" alt="" style="width:140px;height:200px;border:1px solid #ccc;"></div><div style="text-align:center;height:30px;line-height:30px;font-size:14px;">撕裂图</div></div>
                   </div>
                   <div style="margin-left:50px;float:left;" class="xiao-text">
                       <table>
                           <tr>
                               <td>商户名称</td>
                               <td>海底捞海岸城店</td>
                            </tr>
                            <tr>
                                <td>小票上传位置</td>
                                <td>广东省深圳市南山区一路3001号<br>N:35`55`435&nbsp;E:45`66`908`</td>
                            </tr>
                            <tr>
                                <td>商户地理位置</td>
                                <td>广东省深圳市南山区一路3001号<br>N:35`55`435&nbsp;E:45`66`908`<br>正常</td>
                            </tr>
                            <tr>
                                <td>小票金额</td>
                                <td>￥32.50</td>
                            </tr>
                            <tr>
                                <td>打印时间</td>
                                <td>2017-4-15 17:56:02</td>
                            </tr>
                       </table>
                   </div>
               </div>
           </div>
           <div class="order-state" style="float:left;border-left:1px dashed #959595;padding-left:170px;height:300px;">
              <div class="detail-tie">订单状态</div>
           </div>
       </div>
       <div class="shen" style="width:100%;">
           <div>审核通过</div>
           <div>审核失败</div>
       </div>
    </div>
   
</template>

<script>
    export default {
        name:'details',
        data () {
            return {
            isA:false
            }
        },
        methods:{
            tabToggle:function(e){
            let isA = e.currentTarget.id;
            this.isA = isA;
            }
        }
        
    }
</script>

<style>
    .detail{
        width:1200px;
        background:#fff;
        margin:0 auto;
        min-height:600px;
    }
    .detail-header{
        width:100%;
        height:70px;
        border-top: 2px solid #ffad2f;
        margin:0 auto;
        border:1px solid red;
    }
    .detail-header-inside{
        margin-left: 22px;
        margin-right: 22px;
        margin-top: 26px;
        border-bottom: 1px solid #e5e5e5;
        height: 42px;
        width: 1156px;     
    }
    .detail-header-inside .goBack{
        height: 22px;
        width: 76px;
        border-right: 1px solid #e5e5e5;
        float: left;
        color: #ffad2f
    }
    .detail-header-inside .inside-detail{
        margin-left: 40px;
        float: left;
        color: #696969;
    }
    .detail-header-inside .inside-detail-tab{
        color: #ffad2f;
        border-bottom: 2px solid #ffad2f;
    }

    .detail-user{
        padding:30px;
        border:1px solid red;
    }
    .detail-tie{font-size:17px;}
    .detail-user .detail-id{height:40px;line-height:40px;color:#959595;padding-top:10px;}
    .detail-user .detail-id span:last-child{margin-left:25px;}
    .detail-main{padding:10px 30px;height:300px;}
     .xiao-text td{line-height:30px;padding-left:20px;}
     .shen{padding:0px 30px;}
     .shen div{float:left;width:100px;height:35px;line-height:35px;background:#ff7b3f;color:#fff;text-align:center;}
     .shen div:last-child{margin-left:20px;}
</style>