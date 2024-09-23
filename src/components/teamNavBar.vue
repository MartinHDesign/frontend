<template>
    <div class="teamNavBar">
      <button
        v-for="item in items"
        :key="item.id"
        class="teamItem"
        :style="{ backgroundImage: `url(${item.logo})` }"
        :data-id="item.id"
        @click="handleClick(item.id)"
      >
        <span class="teamName">{{ item.name }}</span>
      </button>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, ref, onMounted } from 'vue';
    import { fetchPlayers, fetchTeams } from "../service/apiService";
    import { Team } from "../models/Team";
  
    export default defineComponent({
        name: 'teamNavBar',
        setup(_, { emit }) {
        const items = ref<Team[]>([]);

        

        const getTeams = async () =>{
            try {
              const apiTeamUrl = import.meta.env.VITE_TEAM_URL;
              items.value = await fetchTeams(apiTeamUrl);
            } catch (error) {
                throw new Error('Error fetching teams')
            }
      };
  
      const handleClick = async (id: string) => {
        try {
            const apiPlayersUrl = import.meta.env.VITE_PLAYERS_URL;
             const players = await fetchPlayers(`${apiPlayersUrl}${id}`);
             emit('playersFetched', players)
            } catch (error) {
                throw new Error('Error fetching players')
            }
      };
  
      onMounted(() => {
        getTeams();
      });
  
  
      return {
         items,
         handleClick,
         };
        },
    });
  </script>
  
  <style scoped>
  .teamNavBar {
    display: flex;
    justify-content: space-around;

  }
  
  .teamItem {
    width: 30%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    border: solid 3px red; 
    border-radius: 8px; 
    cursor: pointer;
    position: relative;
  }

  
  .teamItem:hover {
    border: 3px solid rgb(12, 223, 82);
  }

  .teamItem:hover .teamName {
    opacity: 1;
  }
  
  .teamName {
    background-color: rgb(12, 223, 82);
    color: black;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    position: absolute;
    opacity: 0;
    bottom: 0;
    border-radius: 8%;
    transform: translateY(50%);
    transition: opacity 0.5s ease;
    padding-right: 2%;
    padding-left: 2%;
    text-transform: uppercase;
  }
  

  </style>
  