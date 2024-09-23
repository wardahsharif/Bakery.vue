<template>
  <div class="app-background">
    <Navbar />
    <section class="hero">
      <div class="title-text">
      <h1>Welcome to Our Bakery & Cafe</h1>
      <p>Delicious Baked Goods & Specialty Coffee.</p>
      <button>Visit Us</button>
      </div>
    </section>

      <section class="cards-section">
        <h1 class="cards-title">Our Delicacies</h1>
      <div class="cards-container">
     
        <Card
          imageSrc="src/assets/bagels-hanging-from-basket-full-sweet-buns-marble-background-high-quality-photo.jpg"
          title="Baked Goods"
          description="Freshly baked bread, pastries, and cookies every day."
          buttonText="Explore"
        />

        
        <Card
          imageSrc="src/assets/coffee-cup-wooden-table-dark-wall.jpg"
          title="Specialty Coffee"
          description="Our finest selection of coffee, brewed to perfection."
          buttonText="Learn More"
        />

       
        <Card
          imageSrc="src/assets/front-close-view-male-courier-green-uniform-holding-brown-delivery-coffee-cups-notepad-pink-desk.jpg"
          title="Custom Orders"
          description="Need something special? We cater to your custom requests."
          buttonText="Order Now"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Card from '@/components/Card.vue'; 


export default {
  components: {
    Navbar,
    Footer,
    Card   
  }
};
</script>

<style scoped>



 .hero {
  height: 500px;
  background: url('@/assets/assortment-baked-bread-wooden-background.jpg') no-repeat center center;
  background-size:cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
} 

.title-text {
  padding-right: 350px;
  padding-bottom: 160px;
  font-size: 25px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

button {
  padding: 10px 20px;
  background-color: #d7b399;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  padding:20px;
 

}

.cards-title {
  font-size: 30px;
  font-style: italic;
  background-color:#7b573e;
  color:white;
}

.cards-section {
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.cards-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
