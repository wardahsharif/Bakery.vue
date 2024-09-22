<template>
  <div>
    <Navbar />
    <section class="hero">
      <h1>Welcome to Our Landing Page</h1>
      <p>Your journey begins here.</p>
      <button>Get Started</button>
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
 .hero {
  height: 100vh;
  background: url('@/assets/assortment-baked-bread-wooden-background.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #ff9900;
  border: none;
  cursor: pointer;
}
</style>
