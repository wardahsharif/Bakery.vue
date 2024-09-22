<template>
    <div class="card">
      <img :src="imageSrc" :alt="title" />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button>{{ buttonText }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    width: 300px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin: 20px;
    text-align: left;
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card h3 {
    font-size: 1.5em;
    margin: 20px 0 10px;
  }
  
  .card p {
    padding: 0 20px;
    margin-bottom: 20px;
  }
  
  button {
    margin: 0 20px 20px;
    padding: 10px 20px;
    background-color: #ff9900;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #e68a00;
  }
  </style>
  