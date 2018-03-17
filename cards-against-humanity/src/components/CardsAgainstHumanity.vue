<template>
  <div class="main">
    <div class="row">
      <h1>Cards Against Vue</h1>
      <button class="btn-white" @click="chooseHand">Deal White Cards</button>
      <button class="btn-black" @click="chooseBlackCard">Deal Black Card</button>
      <button class="button-primary" @click="clearGame">Clear Game</button>
    </div>
    <template v-if="currentBlackCard">
      <div class="row">
        <BlackCard
          :cardText="currentBlackCard.text">
        </BlackCard>
      </div>
    </template>
    <template v-if="playerHand">
      <div class="row">
        <template v-for="card in playerHand">
          <WhiteCard
            :key="card"
            :cardText="card">
          </WhiteCard>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import deck from '../assets/baseSet'
import BlackCard from './BlackCard'
import WhiteCard from './WhiteCard'

export default {
  name: 'CardsAgainstHumanity',
  components: { BlackCard, WhiteCard },
  data() {
    return {
      blackCards: deck.blackCards,
      whiteCards: deck.whiteCards,
      playerHand: [],
      currentBlackCard: '',
    }
  },
  methods: {
    clearGame() {
      this.playerHand = []
      this.currentBlackCard = ''
    },
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

<style scoped lang="scss">
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

  .btn {
    &-white {
      color: #000000;
      background: #FFFFFF;
      &:hover {
        color: #FFFFFF;
        background: #000000;
      }
    }
    &-black {
      color: #FFFFFF;
      background: #000000;
      &:hover {
        color: #000000;
        background: #FFFFFF;
      }
    }
  }

</style>
