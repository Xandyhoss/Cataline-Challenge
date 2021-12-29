<template>
  <div class="FaqPage">
    <div class="topBox">
      <div class="arrow" @click="goToQuestions(data.id)">
        <img :src="require(`../assets/images/arrow-left.svg`)" />
      </div>
      <div class="text">
        <p class="title">{{ answerData.title }}</p>
      </div>
    </div>
    <div class="answerBox">
      <p class="conteudo" v-html="answerData.content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actualTopic: this.$store.getters.$actualTopic,
      actualAnswer: this.$store.getters.$actualAnswer,
      answerData: {},
      data: {}
    }
  },
  created() {
    this.data = this.filteredContent()[0]
    this.answerData = this.filteredAnswer()[0]
  },
  methods: {
    filteredContent() {
      return this.$store.getters.$allContent.filter(
        (topic) => topic.id == this.actualTopic
      )
    },
    filteredAnswer() {
      return this.data.questions.filter(
        (answer) => answer.id == this.actualAnswer
      )
    },
    goToQuestions(id) {
      this.$store.dispatch('goToQuestions', id)
    }
  }
}
</script>

<style scoped>
@import '../assets/css/main.css';
.FaqPage {
  display: grid;
  height: auto;
  padding-bottom: 1rem;
  grid-template-columns: 350px;
  grid-template-rows: 80px 1fr;
  justify-items: center;
  background-color: #3f4452;
  border-radius: 20px;
}
.topBox {
  display: grid;
  grid-template-columns: 50px auto;
  align-content: center;
  justify-self: flex-start;
  margin-left: 1rem;
  align-items: center;
  grid-auto-flow: column;
}
.text {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: flex-start;
}
.arrow {
  align-self: flex-start;
  justify-self: center;
  margin-top: 5px;
  width: 30px;
  padding: 5px;
  border-radius: 4px;
  transition: 0.3s;
}
.arrow:hover {
  align-self: flex-start;
  background-color: #26282c;
  margin-top: 5px;
  width: 30px;
  border-radius: 4px;
  transition: 0.3s;
}
.arrow img {
  width: 100%;
}
.title {
  font-family: 'Lato';
  color: #fff;
  font-size: 20px;
  margin-bottom: 5px;
}
.conteudo {
  font-family: 'Lato';
  color: #fff;
  font-size: 16px;
}
.answerBox {
  display: grid;
  width: 100%;
  height: 100%;
  padding-inline: 2rem;
  padding-bottom: 2rem;
}
</style>
