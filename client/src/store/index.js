import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: [],
    questions: [],
    testquiz: [],
    newQuiz: []
  },
  mutations: {

  },
  actions: {
    fetchTestquiz() {
      axios.get('http://localhost:3000/testquiz')
        .then((response) => {
          this.state.testquiz = response.data
        })
    },
    postQuiz(context, payload) {
      axios.post('http://localhost:3000/',
          payload
        )
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    }
  },
  modules: {}
})