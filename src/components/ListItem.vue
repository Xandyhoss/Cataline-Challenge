<template>
  <div class="container">
    <slot />
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: [String]
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
}
.text {
  margin-left: 20px;
}
</style>
