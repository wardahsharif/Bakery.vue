<template>
    <div class="detail-page">
      <h2>{{ title }}</h2>
      <img :src="imageSrc" :alt="title" class="detail-image" />
      <div class="additional-info">
        <h3>More About This Item</h3>
        <p >
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium temporibus iste veniam eaque! Ut, commodi! Sunt ex nulla nostrum!
        </p>
      </div>
      <button @click="goBack">Back</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Detail',
    computed: {
      title() {
        return this.$route.query.title;
      },
      imageSrc() {
        return this.$route.query.imageSrc;
      },
      description() {
        return this.$route.query.description;
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>


  .detail-page {
    padding: 50px 20px;
    text-align: center;
  }
  
  .detail-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 20px;
  }
  
  .additional-info {
    margin-top: 20px;
    text-align: center; 
  }
  
  button {
    padding: 10px 20px;
    background-color: #d7b399;
    border: none;
    cursor: pointer;
  }
  </style>
  