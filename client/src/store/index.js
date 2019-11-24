import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: [],
    questions: [],
    testquiz: []
  },
  mutations: {},
  actions: {
    fetchQuiz() {
      axios.get('http://localhost:3000/quiz')
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response.data)
          this.state.quiz = response.data
        })
    },
    fetchQuestions() {
      axios.get('http://localhost:3000/questions')
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response.data)
          this.state.questions = response.data
        })
    },
    fetchTestquiz() {
      axios.get('http://localhost:3000/testquiz')
        .then((response) => {
          this.state.testquiz = response.data
        })
    }
  },
  modules: {}
})