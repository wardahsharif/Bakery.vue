<template>
  <div>
    <Navbar />
    <section class="about">
      <h2>About Us</h2>
      <p>We are a team of developers creating beautiful websites with Vue.js.</p>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.about {
  padding: 20px;
  text-align: center;
}
</style>
