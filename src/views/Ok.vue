<template>
<div id="">
  this is ok page
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
       1
      </div>
      <div class="swiper-slide">
       2
      </div>
      <div class="swiper-slide">
       3
      </div>
      <div class="swiper-slide">
       4
      </div>
    </div>
  </div> -->
</div>
</template>

<script>
export default {
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    // this.swiper = new Swiper('.swiper-container', {
    //   resistanceRatio: 0.5
    // })
  }
}
</script>

<style lang="scss">
.swiper-slide{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 50px;
  color: 1;
  background: #ccc;
}
</style>
