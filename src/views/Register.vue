<template>
    <section class="loginAndRegister">
        <div class="register">
            <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-position="left" label-width="0px"
                     class="demo-ruleForm register-container animated bounceInDown">
                <h3 class="title">系统注册</h3>
                <el-form-item prop="account">
                    <el-input type="text" v-model="ruleForm1.account" auto-complete="off" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" v-model="ruleForm1.checkPass" auto-complete="off"
                              placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass2">
                    <el-input type="password" v-model="ruleForm1.checkPass2" auto-complete="off"
                              placeholder="再次输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input type="email" v-model="ruleForm1.email" auto-complete="off"
                              placeholder="邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="sex">
                    <el-radio v-model="ruleForm1.sex" label="1">男</el-radio>
                    <el-radio v-model="ruleForm1.sex" label="0">女</el-radio>
                </el-form-item>
                <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit"
                               :loading="registering">注册
                    </el-button>
                </el-form-item>
                <span class="toRegister" @click="$router.push('/')">已有账号,去登录</span>
            </el-form>
        </div>
    </section>
</template>

<script>
    import {get} from "../api/api";

    export default {
        data() {
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm1.checkPass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                registering: false,
                ruleForm1: {
                    account: '',
                    checkPass: '',
                    checkPass2: '',
                    sex:'',
                    email:''
                },
                rules1: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                    ],
                    checkPass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    checkPass2: [
                        { validator: validatePass, trigger: 'blur' },
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'blur'},
                    ],

                },
                checked: true
            };
        },
        methods: {
            handleReset() {
                this.$refs.ruleForm1.resetFields();
            },
            handleSubmit(ev) {
                var _this = this;
                this.$refs.ruleForm1.validate((valid) => {
                    this.registering = true;
                    if (valid) {
                        get('https://www.apiopen.top/register',
                            {
                                key: "00d91e8e0cca2b76f515926a36db68f5",
                                phone: _this.ruleForm1.account,
                                passwd: _this.ruleForm1.checkPass
                            }).then((data) => {
                            this.registering = false;
                            if (data.code == 200) {
                                var user = {name: data.data.name, img: data.data.img};
                                localStorage.setItem("user", user);
                                this.$store.commit("setToken", user);
                                this.$router.push({path: '/HappyPassages'});
                            } else {
                                this.$message.error('账号或者密码错误');
                            }
                        }).catch(err => {
                            this.registering = false;
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                this.registering = false;
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

    .register-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        position: absolute;
        top: 8%;
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
        .toRegister {
            font-size: 14px;
            color: #4e4a4a;
            margin-right: 20px;
            float: right;
        }
    }
</style>