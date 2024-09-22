<template>
    <div>
      <Navbar />
      <section class="contact">
        <h2>Contact Us</h2>
        <form>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
          
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
          
          <label for="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
          
          <button type="submit">Send</button>
        </form>
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
  .contact {
    padding: 20px;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }
  
  input, textarea {
    margin-bottom: 10px;
    padding: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #ff9900;
    border: none;
    cursor: pointer;
  }
  </style>
  