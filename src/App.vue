<template>
  <div class="container">
    <transition
      enter-active-class="animate__animated animate__fadeInRight animate__faster"
      leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
      mode="out-in"
    >
      <component :is="this.$store.getters.$actualPage" />
    </transition>
  </div>
</template>

<script>
import Faq from '@/components/Faq.vue'
import questionList from '@/components/questionList.vue'
import answerPage from '@/components/answerPage.vue'
import 'animate.css'

export default {
  components: {
    Faq,
    questionList,
    answerPage
  },
  created() {
    this.$store.dispatch('fetchContent')
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #f5f6f8;
}
</style>
