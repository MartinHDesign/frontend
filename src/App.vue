<template>
    <div id="app">
      
      <header class="top-bar">
        
        <teamNavBar @playersFetched="handlePlayers"/>
      </header>
  
      
      <main class="main-content">
        <player-cards v-if="players.length" :players="players"/>
        <start-page v-else/>
      </main>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, ref } from 'vue';
    import teamNavBar from './components/teamNavBar.vue';
    import StartPage from './components/startPage.vue';
    import playerCards from './components/playerCards.vue';
    import { Player } from "./models/Player";
    
    export default defineComponent({
        name: 'App',
        components: {
        teamNavBar,
        StartPage,
        playerCards,
        },
        setup(){
            const players = ref<Player[]>([]);

            const handlePlayers = (fetchPlayers: Player[]) => {
                players.value = fetchPlayers;
            };

            return {
                players,
                handlePlayers
            };
        }
    });

    
  </script>
  
  <style scoped>
  
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }
    
    #app {
        display: flex;
        flex-direction: column;
        width: 100vw; 
        margin: 0;    
        padding: 0; 
        height: 100vh;
    }
    .top-bar {
        margin-top: 0%;
        background-color: #333;
        padding: 10px; 
        width: 100%;
    }
  
  
  .main-content {
        padding: 20px;
        border: 12px solid #333;
        width: 100%;
        height: 600px;
        background-color: #333;
    }
  </style>
  