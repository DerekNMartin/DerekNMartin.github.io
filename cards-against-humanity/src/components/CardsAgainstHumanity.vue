<template>
  <div class="main">
    <h1>Cards Against Vue</h1>
    <button @click="chooseHand">Deal Hand</button>
    <button @click="chooseBlackCard">Deal Black Card</button>
    <h3>{{ currentBlackCard.text }}</h3>
    <template v-for="card in playerHand">
      <p v-bind:key="card"> {{ card }} </p>
    </template>
  </div>
</template>

<script>
import deck from '../assets/baseSet'

export default {
  name: 'CardsAgainstHumanity',
  data() {
    return {
      blackCards: deck.blackCards,
      whiteCards: deck.whiteCards,
      playerHand: [],
      currentBlackCard: '',
    }
  },
  methods: {
    randomCard(cardType) {
      const randomNumber = Math.floor(Math.random() * Math.floor(cardType.length))
      return cardType[randomNumber]
    },
    clearHand() {
      this.playerHand = []
    },
    chooseHand() {
      const numberOfCards = 10
      this.clearHand()
      for (let i = 0; i < numberOfCards; i += 1) {
        this.playerHand.push(this.randomCard(this.whiteCards))
      }
    },
    chooseBlackCard() {
      this.currentBlackCard = this.randomCard(this.blackCards)
    },
  },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
