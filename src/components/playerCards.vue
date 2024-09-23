<template>
    <div class="playerCards">
      <div v-for="player in players" :key="player.id" class="playerCard">
        <img :src="player.picture" class="playerPhoto" />
        <div class="playerInfo">
            <h3>{{ player.name }}</h3>
            <p>#{{ player.number }} {{ player.position }} </p>
            
      </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Player } from '../models/Player';
  
  export default defineComponent({
    name: 'playerCards',
    props: {
      players: {
        type: Array as PropType<Player[]>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .playerCards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    position: relative;
    width: 100%;
    height: 100%; 
    background-image: url("../assets/shl.avif");
    background-size: cover; 
    background-position: center; 
  }
  
  .playerCard {
  display: flex;
  align-items: center; 
  width: 300px; 
  height: 110px;
  
}

.playerPhoto {
  width: 100px; 
  height: 100px;
  object-fit: cover; 
 
  
}

.playerInfo {
     display: none;
     flex-direction: column;
     height: 90px;
     width: 200px;
     border-top-right-radius: 8px;
     border-bottom-right-radius: 8px; 
     justify-content: center;
     box-sizing: border-box;
}
.playerInfo h3 {
    color: #0F4C81;
     font-size: 20px; 
     margin-top: 0; 
     line-height: 1.2; 
}

.playerInfo p {
    color: #0F4C81;
     font-size: 17px; 
     margin: 0; 
     line-height: 1.2; 
}

.playerCard:hover .playerInfo {
    display: flex;
    background-image: url("../assets/shl.avif");  
}

  </style>