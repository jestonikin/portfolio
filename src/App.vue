<template>
  <v-app>
    <v-main>
      <Portfolio/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Portfolio from './components/Portfolio.vue';

export default defineComponent({
  name: 'App',
  components: {
    Portfolio,
  },
})
</script>