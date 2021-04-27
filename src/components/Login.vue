<template>
  <div>
     <div class="login-form">
    <form >
        <div v-if="incorrect" class="alert alert-danger" role="alert">Incorrect login</div>
        <h2 class="text-center">Big money!</h2>       
        <div class="form-group">
            <input v-model="username" type="text" class="form-control" placeholder="Username" required="required">
        </div>
        <div class="form-group">
            <input v-model="password" type="password" class="form-control" placeholder="Password" required="required">
        </div>
        <div class="form-group">
            <button type="button" @click="login" class="btn btn-primary btn-block">Log in</button>
        </div>      
    </form>
</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data:() => ({
        username:"",
        password:"",
        incorrect:false
    }),
    methods:{
        login: async function(){
            const username = this.username
            const password = this.password
            this.incorrect = false
            const data = {
                username:username,
                password:password
            }
            const response = await axios.post('https://binance-graph-api.herokuapp.com/login',data).then(res => {
                return res.data
            }).catch(err => {
                throw err
            })
            if (response.ok){
                localStorage.setItem("token", response.token)
                this.$emit('logged-event', true);
            } else {
                this.incorrect = true
            }
        }
    }
}
</script>

<style  scoped src='./../assets/styles/styles.css'>
</style>