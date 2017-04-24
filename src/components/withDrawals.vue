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
       <router-link :to="{name:'withDrawalsDetail'}"><button>提现详情</button></router-link>
    </div>
</template>
<script>

</script>
<style>

</style>