<template>
  <div>
<div class="flex items-center justify-center mt-32">
        <div class="w-full max-w-md">
          <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <!-- @csrf -->
            <div
              class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Cool graph
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                v-model="username"
                type="text"
                required
                autofocus
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autocomplete="current-password"
              />
            </div>
            <div class="flex items-center justify-between">
              <button @click="login" class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="button">Sign In</button>
            </div>
          </form>
        </div>
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
