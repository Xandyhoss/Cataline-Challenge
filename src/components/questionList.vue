<template>
  <div class="FaqPage">
    <div class="topBox">
      <div class="arrow" @click="goToFaq">
        <img :src="require(`../assets/images/arrow-left.svg`)" />
      </div>
      <div class="text">
        <p class="title">{{ data.title }}</p>
        <p class="subtitle">Escolha uma pergunta</p>
      </div>
      <div class="icon">
        <img :src="require(`../assets/images/${data.icon}`)" />
      </div>
    </div>
    <div class="questionBox">
      <ul class="item-list">
        <li
          v-for="question in data.questions"
          :key="question.id"
          @click="goToAnswer(question.id)"
        >
          {{ question.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actualTopic: this.$store.getters.$actualTopic,
      data: {}
    }
  },
  created() {
    this.data = this.filteredContent()[0]
  },
  methods: {
    filteredContent() {
      return this.$store.getters.$allContent.filter(
        (topic) => topic.id == this.actualTopic
      )
    },
    goToFaq() {
      this.$store.dispatch('goToFaq')
    },
    goToAnswer(id) {
      this.$store.dispatch('goToAnswer', id)
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
  grid-template-columns: auto 200px auto;
  justify-items: center;
  justify-content: stretch;
  align-content: center;
  align-items: center;
  grid-auto-flow: column;
}
.text {
  display: grid;
  grid-template-columns: 1fr;
  justify-self: flex-start;
  margin-left: 2rem;
}
.arrow {
  align-self: flex-start;
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
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
}
.subtitle {
  font-family: 'Lato';
  color: #fff;
  font-size: 13px;
}
.icon {
  width: 30px;
}
.item-list {
  list-style: none;
}
.item-list li {
  font-family: 'Lato';
  color: #fff;
  font-size: 16px;
  padding-inline: 3rem;
  padding-block: 15px;
  transition: 0.5s;
}
.item-list li:hover {
  transition: 0.5s;
  font-family: 'Lato';
  color: #fff;
  background-color: #5d6681;
  font-size: 16px;
  padding-inline: 3rem;
  padding-block: 15px;
}
.questionBox {
  display: grid;
  width: 100%;
  height: 100%;
}
</style>
