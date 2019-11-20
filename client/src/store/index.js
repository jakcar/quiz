import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    answers: []
  },
  mutations: {
  },
  actions: {
    fetchQ() {
      axios.get('http://localhost:3000/questions')
      .then((response) =>  {
        // eslint-disable-next-line no-console
        console.log(response.data)
        this.state.questions = response.data
      })
    },
    fetchA() {
      axios.get('http://localhost:3000/answers')
      .then((response) =>  {
        // eslint-disable-next-line no-console
        console.log(response.data)
        this.state.answers = response.data
      })
    }
  },
  modules: {
  }
})
