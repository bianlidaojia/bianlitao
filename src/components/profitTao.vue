<template>
    <div>
       <div class="echarts">
            <IEcharts :option="bar" ></IEcharts>
        </div>
    </div>
</template>
<script>
 import IEcharts from 'vue-echarts-v3';
export default {
    components: {
            IEcharts
        },
        data: () => ({
            bar: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: '柱状图'
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis:{},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 50]
                    }
                ]
            }
        })
}


</script>

<style>
.echarts {
        float: left;
        width: 500px;
        height: 400px;
    }

</style>a