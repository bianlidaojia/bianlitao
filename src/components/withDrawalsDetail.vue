<template>
    <div class="drawalsDetail">
        <!--头部-->
        <div class="detail-header">
            <div class="detail-header-inside">
                <div class="goBack">
                <router-link :to="{name:'smTicket'}"><span class="icon_back"></span><span style="float:left;margin-left:10px;">返回</span></router-link>
                </div>
                <div class="inside-detail" id="profit">
                    提现详情
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
           <div class="detail-id" style="padding-top:10px;">
               <span>用户ID</span><span>{{list.order_number}}</span>
           </div>
            <div class="detail-id">
               <span>支付宝账号</span><span>{{list.order_number}}</span>
           </div>
            <div class="detail-id">
               <span>账户余额</span><span class="it">￥0.00</span>
           </div>
       </div>
       <!--小票详情-->
       <div class="detail-main detail-user">
            <div class="detail-tie">用户信息</div>
           <div class="detail-id" style="padding-top:10px;">
               <span style="width:90px;">提现申请时间</span><span>{{list.order_number}}</span>
           </div>
            <div class="detail-id">
               <span style="text-align: left;">提现金额</span><span class="it">￥300.00</span>
           </div>
       </div>
       <div class="shen">
           <div @click="open(0)">审核失败</div>
           <div @click="open(1)">操作提现</div>
       </div>
        <el-dialog :title="title" v-model="dialogFormVisible">
            <el-form @model="form">
                <el-form-item label="进入支付宝去转账" :label-width="formLabelWidth" v-show="!isB">
                <el-input v-model="form.name" auto-complete="off" style="width:85%;"  placeholder="请填写支付宝付款订单号"></el-input>
                </el-form-item>
                <el-form-item label="审核失败原因" :label-width="formLabelWidth" v-show="isB">
                <el-select v-model="form.region" placeholder="请选择审核失败原因">
                    <el-option label="支付宝账号用户名不正确" value="1"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth" v-show="isB">
                 <el-input type="textarea" v-model="form.remark" placeholder="请填写备注,非必填项(20字以内)" resize="none"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
            </div> 
            </el-dialog>
    </div>
   
</template>

<script>
    export default {
        data () {
         return {
            dialogFormVisible: false,
            isA:false,
            isB:false,
            defaultActive:this.$route.name,
            list:[],
            title:null,
            form: {
                name: '',
                region: '',
                remark:'',
             },
            formLabelWidth: '152px'
            };
        },
        created () {
            this.getList();
        },
         methods: {
            getList () {
            this.$ajax({
            method: 'get',
            url: 'static/json/ticketDetail.json',
            data: {userID:"121212", ticketID:"45454545"}
            }).then((res) => {
                // console.log(res);
                this.list = res.data.data;
                }).catch((err) => {
                console.log(err)
                })
            },
            open:function(a){
            if(a==0){this.title="审核失败";this.isB=true; }else if(a==1){this.title="操作提现";this.isB=false; }this.dialogFormVisible=true; },
            sure:function(){
                this.dialogFormVisible=false;
                    // 审核通过或者失败请求接口
                // this.$router.push({path:'/only/tao/withDrawals'});
                console.log(1223);
                }
         }
 
    }
</script>

<style>
    .drawalsDetail{
        width:1200px;
        background:#fff;
        margin:0 auto;
        min-height:530px;
    }
    .drawalsDetail .detail-header{
        width:100%;
        height:65px;
        border-top: 2px solid #ffad2f;
        margin:0 auto;
    }
    .drawalsDetail .detail-header-inside{
        margin-left: 22px;
        margin-right: 20px;
        margin-top: 25px;
        border-bottom: 1px solid #e5e5e5;
        height: 38px;
        width: 1156px;     
    }
   .drawalsDetail  .detail-header-inside .goBack{
        height: 14px;
        line-height: 14px;
        margin-top: 3px;
        width: 80px;
        border-right: 1px solid #e5e5e5;
        float: left;
        color: #ff7b3f;
        font-size:16px;
    }
    .drawalsDetail .icon_back{background: url(../assets/images/icon_back.png) no-repeat;width:15px;height:14px;display: block;float:left;}
    .drawalsDetail .detail-header-inside .inside-detail{
        margin-left: 27px;
        height:17;
        line-height: 17px;
        float: left;
        color: #696969;
        font-size:17px;
    }
     .drawalsDetail.detail-header-inside .inside-detail-tab{
        color: #ffad2f;
        border-bottom: 2px solid #ffad2f;
    }
    .drawalsDetail .detail-user{
        padding:30px;
    }
    .drawalsDetail .detail-tie{font-size:17px;color:#696969;}
    .drawalsDetail .detail-user .detail-id{height:35px;line-height:35px;color:#959595;font-size:15px;padding-top:0px;}
    .drawalsDetail .detail-user .detail-id span:last-child{margin-left:25px;width:200px;display:block;float:left;}
    .drawalsDetail .detail-user .detail-id span:first-child{text-align: right;width:80px;display:block;float:left;}
    .drawalsDetail .detail-main{padding:5px 30px;height:150px;}
    .drawalsDetail .shen{height:35px;padding:0px 30px;margin-top:20px;}
    .drawalsDetail .shen div{float:left;width:100px;height:35px;line-height:35px;background:#ff7b3f;color:#fff;text-align:center;border-radius: 2px;cursor: pointer;}
    .drawalsDetail .shen div:last-child{margin-left:25px;}
    .drawalsDetail .status{color:#bae1b5;}
    .drawalsDetail .it{color:#ff7b3f;}
     .el-dialog--small {
    width: 33% !important;
    }
  .el-textarea__inner{height:75px !important;}
</style>