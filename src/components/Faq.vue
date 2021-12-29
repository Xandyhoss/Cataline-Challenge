<template>
  <div class="FaqPage">
    <img class="astronaut" src="@/assets/images/astronaut.svg" />
    <div class="faqQuestions">
      <div class="titleText">
        <p class="title">Perguntas Frequentes</p>
        <p class="subtitle">Escolha a categoria desejada</p>
      </div>
      <div class="items">
        <ul class="item-list">
          <li
            v-for="categorie in $content"
            @click="goToQuestions(categorie.id)"
            :key="categorie"
          >
            <ListItem :text="categorie.title">
              <i
                ><img
                  class="icon"
                  :src="require(`../assets/images/${categorie.icon}`)"
                />
              </i>
            </ListItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
  methods: {
    goToQuestions(id) {
      this.$store.dispatch('goToQuestions', id)
    }
  },
  computed: {
    $content() {
      return this.$store.getters.$allContent
    }
  },
  components: {
    ListItem
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
  grid-template-rows: 150px 1fr;
  justify-items: center;
  background-color: #3f4452;
  border-radius: 20px;
}
.faqQuestions {
  display: grid;
  width: 100%;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: flex-start;
}
.titleText {
  padding-inline: 3rem;
}
.astronaut {
  align-self: flex-start;
  width: 80%;
  height: auto;
  margin-top: 15px;
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
.items {
  display: grid;
  width: 100%;
  height: 100%;
}
</style>
