<template>
    <section class="loginAndRegister">
        <div class="login">
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
                     class="demo-ruleForm login-container animated bounceInDown">
                <h3 class="title">系统登录</h3>
                <el-form-item prop="account">
                    <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"
                              placeholder="密码"></el-input>
                </el-form-item>
                <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
                <span class="toRegister" @click="$router.push({path:'/register'})">马上注册</span>
                <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2"
                               :loading="logining">登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </section>
</template>

<script>
    import {get} from "../api/api";

    export default {
        data() {
            return {
                logining: false,
                ruleForm2: {
                    account: '13594347817',
                    checkPass: '123456'
                },
                rules2: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                    ],
                    checkPass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ]
                },
                ruleForm1: {
                    account: '13594347817',
                    checkPass: '123456'
                },
                rules1: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                    ],
                    checkPass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ]
                },
                checked: true
            };
        },
        methods: {
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },
            handleSubmit2(ev) {
                var _this = this;
                this.$refs.ruleForm2.validate((valid) => {
                    this.logining = true;
                    if (valid) {
                        get('https://www.apiopen.top/login',
                            {
                                key: "00d91e8e0cca2b76f515926a36db68f5",
                                phone: _this.ruleForm2.account,
                                passwd: _this.ruleForm2.checkPass
                            }).then((data) => {
                            this.logining = false;
                            if (data.code == 200) {
                                var user = {name: data.data.name, img: data.data.img};
                                localStorage.setItem("user", user);
                                this.$store.commit("setToken", user);
                                this.$router.push({path: '/HappyPassages'});
                            } else {
                                this.$message.error('账号或者密码错误');
                            }
                        }).catch(err => {
                            this.logining = false;
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }

</script>

<style lang="scss" scoped>
    .loginAndRegister {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-image: url("../assets/images/login_backgroung.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        position: absolute;
        top: 20%;
        right: 35%;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: rgb(255, 255, 255);
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

        .title {
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
        }

        .remember {
            margin: 0px 0px 35px 0px;
        }

        .toRegister {
            font-size: 14px;
            color: #4e4a4a;
            margin-right: 20px;
            float: right;
        }
    }
</style>