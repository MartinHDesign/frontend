<template>
    <div class="startPage" >
      <h1>Select Team</h1>
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    
  
    export default defineComponent({
        name: 'startPage'
    });
  </script>


<style scoped>
    .startPage {
        background-image: url("../assets/shl.avif");
        width: 100%;
        height: 100%; 
        background-size: cover; 
        background-position: center; 
        display: flex; 
        flex-direction: column;
        justify-content: flex-start; 
        align-items: center; 
        padding-top: 20px; 
    }

    h1 {
        margin: 0;
    }

</style>
