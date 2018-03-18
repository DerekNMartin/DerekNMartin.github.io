<template>
  <div class="main">
    <div class="row">
      <h1>Cards Against Vue</h1>
      <button class="btn-white" @click="chooseHand">Deal White Cards</button>
      <button class="btn-black" @click="chooseBlackCard">Deal Black Card</button>
      <button class="button-primary" @click="clearGame">Clear Game</button>
    </div>
    <div class="row">
      <button @click="previousCardInHand">Previous Card</button>
      <button @click="nextCardInHand">Next Card</button>
    </div>
    <template v-if="currentBlackCard">
      <BlackCard
        :cardText="currentBlackCard.text">
      </BlackCard>
    </template>
    <template v-if="playerHand[0]">
      <WhiteCard
        :cardText="currentWhiteCard"
        :cardIndex="currentCardIndex+1">
      </WhiteCard>
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
      currentCardIndex: 0,
      currentWhiteCard: '',
    }
  },
  methods: {
    setCurrentCard() {
      this.currentWhiteCard = this.playerHand[this.currentCardIndex]
    },
    nextCardInHand() {
      if (this.currentCardIndex >= this.playerHand.length - 1) {
        this.currentCardIndex = 0
      } else {
        this.currentCardIndex += 1
      }
      this.setCurrentCard()
    },
    previousCardInHand() {
      if (this.currentCardIndex <= 0) {
        this.currentCardIndex = this.playerHand.length - 1
      } else {
        this.currentCardIndex -= 1
      }
      this.setCurrentCard()
    },
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
      this.setCurrentCard()
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
