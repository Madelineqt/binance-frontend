<template >
  <div class="h-screen" id="app">
    <div class="h-full bg-indigo-100">
        <Header />
        <Login @logged-event="loggedEventFunction" v-if="!logged"/>
        <Graph :gain="gain" :totalgain="totalgain" :names="names" :values="values" :labels="labels" :min="0" :max="max" v-if="logged"/>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';
import Header from './components/Header'
import Login from './components/Login'
import Graph from './components/Graph'
export default {
  name: 'App',
  components:{
    Login,
    Graph,
    Header
  },
  data:() => ({
    logged:false,
    names: [ 'USD' ],
    values: [1,2,3,4],
    labels:[ ],
    max: 0,
    gain: 0,
    totalgain: 0

  }),
  methods:{
    loggedEventFunction: function(value){
      this.logged = value
      this.getValues()
    },
    getValues: async function(){
      const token = localStorage.getItem("token");
      const response = await axios.get('https://binance-graph-api.herokuapp.com/test',{headers:{'Authorization':`Bearer ${token}`}}).then(res => {
        return res.data
      }).catch(err => {
        throw err
      })
      this.values = response.snapshotVos.map(({total}) => total)
      console.log(this.values)
      this.labels = new Array(this.values.length);
      this.labels[0] = moment(new Date(response.snapshotVos[0].updateTime)).format("DD/MM/YYYY")
      this.labels[this.labels.length - 1] = moment(new Date(response.snapshotVos[response.snapshotVos.length - 1].updateTime)).format("DD/MM/YYYY")
      this.max = this.values.reduce(function(a, b) {return Math.max(a, b);});
      this.totalgain = ((this.values[this.values.length - 1] * 100 / this.values[0]) - 100).toFixed(2)
      this.gain = ((this.values[this.values.length - 1] * 100 / this.values[this.values.length - 2]) - 100).toFixed(2)
    },
    checkLogin: async function(){
      const token = localStorage.getItem("token");
      const response = await axios.get('https://binance-graph-api.herokuapp.com/check', {headers:{'Authorization':`Bearer ${token}`}}).then(res => {
        return res.data
      }).catch(err => {
        throw err
      })
      console.log(response)
      return response.ok
    }
  },
  async mounted(){
    this.logged = await this.checkLogin()
    if (this.logged) this.getValues()
  }
}
</script>


