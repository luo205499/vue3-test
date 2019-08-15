<template>
    <div class="err">
        <div class="errComent" id="clock">
            <p class="err-text"> 页面走丢了</p>
            <p class="err-time">{{time}}</p>
            <p class="err-date">{{date}}</p>
            <div class="err-div-backAndToHome">
                <span class="err-back" @click="$router.back()">返回</span>
                <span class="err-toHome" @click="$router.push('/Home')">回到主页</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pageNotFound",
        data() {
            return {
                date: '',
                time: '',
            }
        },
        mounted() {
            this.getDate();
            setInterval(this.getDate, 500);
        },
        methods: {
            getDate() {
                this.time = this.dateFtt("hh:mm:ss", new Date());
                this.date = this.dateFtt("yyyy-MM-dd", new Date());
            },
            dateFtt(fmt, date) {
                var o = {
                    "M+": date.getMonth() + 1,                 //月份
                    "d+": date.getDate(),                    //日
                    "h+": date.getHours(),                   //小时
                    "m+": date.getMinutes(),                 //分
                    "s+": date.getSeconds(),                 //秒
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds()             //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            },
        }
    }
</script>

<style scoped>
    .errComent {
        position: absolute;
        top: 30%;
        left: 40%;
        text-align: center;
    }

    .err-text {
        letter-spacing: 0.1em;
        font-size: 12px;
        /*padding: 20px 0 0;*/
    }

    .err-time {
        letter-spacing: 0.05em;
        font-size: 60px;
        /*padding: 5px 0;*/
    }

    .err-date {
        letter-spacing: 0.1em;
        font-size: 15px;
    }

    .err {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #0f3854;
        background: -webkit-radial-gradient(#0a2e38 0%, #000000 70%);
        background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
        background-size: 100%;
    }

    p {
        margin: 0;
        padding: 0;
    }

    #clock {
        font-family: 'Share Tech Mono', monospace;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: #daf6ff;
        text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
    }

    .err-div-backAndToHome {
        margin-top: 15px;
    }

    .err-back {
        margin-top: 10px;
        margin-right: 10px;
    }

</style>