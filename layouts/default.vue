<template>
  <div>
    <Header></Header>
    <nuxt/>
  </div>
</template>
<style lang="sass">
@import '~assets/scss/app.scss';
</style>

<script>
import Header from "../components/Header/Header";
export default {
  components: {Header}
}

</script>
