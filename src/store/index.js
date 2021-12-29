import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    actualPage: 'Faq',
    actualTopic: -1,
    actualAnswer: -1,
    content: {}
  },
  mutations: {
    SET_CONTENT(state) {
      state.content = faqCategories
    },
    SET_PAGE(state, page) {
      state.actualPage = page
    },
    SET_TOPIC(state, id) {
      state.actualTopic = id
    },
    SET_ANSWER(state, id) {
      state.actualAnswer = id
    }
  },
  actions: {
    fetchContent(context) {
      context.commit('SET_CONTENT')
    },
    goToQuestions(context, id) {
      context.commit('SET_PAGE', 'questionList')
      context.commit('SET_TOPIC', id)
    },
    goToFaq(context) {
      context.commit('SET_PAGE', 'Faq')
      context.commit('SET_TOPIC', -1)
    },
    goToAnswer(context, id) {
      context.commit('SET_PAGE', 'answerPage')
      context.commit('SET_ANSWER', id)
    }
  },
  getters: {
    $allContent(state) {
      return state.content
    },
    $actualPage(state) {
      return state.actualPage
    },
    $actualTopic(state) {
      return state.actualTopic
    },
    $actualAnswer(state) {
      return state.actualAnswer
    }
  }
})
