<template>
  <div>
    <Navbar />
    <section class="about">

    <h2>About Us</h2>
    <p>
      At our bakery, we believe that food is not just about sustenance; it’s an experience to be cherished. Established in 2024, our bakery was born out of a passion for baking and a love for coffee. 
    </p>
    <p>
      We pride ourselves on using only the finest, locally sourced ingredients to create a delectable selection of baked goods and specialty coffee. From our freshly baked bread and pastries to our rich, aromatic coffees, every bite and sip is crafted with care and attention to detail.
    </p>
    <p>
      Our mission is to create a warm and inviting space where friends and family can gather to enjoy delicious food, share stories, and create lasting memories. We are committed to sustainability and ethical practices, ensuring that our products not only taste good but also contribute to a better world.
    </p>
    <p>
      Come visit us and discover your new favorite treat! We can’t wait to serve you and be a part of your culinary journey.
    </p>
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

p {
  font-size: 18px;
}
</style>
