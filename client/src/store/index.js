import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: [],
    questions: [],
    testquiz: [],
    quiznames: null,
    quizname: null,
    points: 0
  },
  mutations: {
    setQuizName(state, names) {
      state.quizname = names
    }
  },
  actions: {
    fetchTestquiz() {
      axios.get('http://localhost:3000/testquiz')
        .then((response) => {
          this.state.testquiz = response.data
          this.state.quiznames = Object.keys(response.data).reverse()
        })
    },
    postQuiz(context, payload) {
      axios.post('http://localhost:3000/',
          payload
        )
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {}
})