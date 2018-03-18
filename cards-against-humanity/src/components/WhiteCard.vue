<template>
  <div class="card">
    <div class="card__text">
      {{ cardText | tradeMark }}
    </div>
    <div class="card__footer">
      <div class="card__footer-title">
        Cards Against Vue
      </div>
      <div class="card__footer-index">
        {{ cardIndex }}
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'WhiteCard',
  props: ['cardText', 'cardIndex'],
  filters: {
    tradeMark: (value) => {
      const string = value.replace(/&trade;|&reg;/g, '')
      return string
    },
  },
}
</script>

<style scoped lang='scss'>
  .card {
    display: inline-table;
    border-radius: 5px;
    border: 3px solid;
    color: #000000;
    text-align: left;
    width: 250px;
    height: 350px;
    padding: 1em;
    background: #FFFFFF;
    position: relative;
    &__text {
      font-size: 1.5em;
      font-weight: 600;
    }
    &__footer {
      width: 85%;
      font-weight: 600;
      padding-bottom: 1em;
      position: absolute;
      bottom: 10px;
      &-title {
        display: inline-block;
      }
      &-index {
        position: absolute;
        display: inline-block;
        right: 0;
      }
    }
  }
</style>
