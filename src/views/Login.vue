<template>
    <div class="login-container">
        <el-form :model="ruleForm2" :rules="rules2"
                 status-icon
                 ref="ruleForm2"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model="ruleForm2.username"
                          auto-complete="off"
                          placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="ruleForm2.password"
                          auto-complete="off"
                          placeholder="密码"
                ></el-input>
            </el-form-item>
            <el-checkbox
                    v-model="checked"
                    class="rememberme"
            >记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {get,post} from '../api/api'
    export default {
        name:'Login',
        data(){
            var checkPassword = (rule, value, callback) => {
                var passwordTest=/^[\w]{6,20}/;
                if (!passwordTest.test(this.ruleForm2.password)) {
                    callback(new Error('请输入6-20位密码'));
                } else {
                    callback();
                }
            };
            return {
                logining: false,
                ruleForm2: {
                    username: 'admin',
                    password: '123456',
                },
                rules2: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password:  { validator: checkPassword, trigger: 'blur' }
                },
                checked: false
            }
        },
        methods: {
            handleSubmit(event){
                this.$refs.ruleForm2.validate((valid) => {
                    if(valid){
                        this.logining = true;
                        this.toLogin();
                    }else{
                        console.log('error submit!');
                        return false;
                    }
                })
            },
            getData(){
                get('',{type:2,page:1}).then(({code,data})=>{
                    this.logining = false;
                    console.log(data);
                })
            },
            toLogin(){
                this.logining = false;
                this.$router.push('/PageIndex')
            },
        }
    };
</script>

<style scoped>
    .login-container {
        width: 100%;
        height: 100%;
    }
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
       position: absolute;
        top: 20%;
        left: 30%;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }
</style>