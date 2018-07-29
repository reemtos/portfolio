<template>
  <div id="app">
    <Header/>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" src="./assets/sass/main.scss">
</style>