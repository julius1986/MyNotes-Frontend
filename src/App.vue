<template>
  <div id="app">
    <Menu @add-new-note="addNewNote()"></Menu>
    <list-notes :notes="notes" @delete-note="deleteNote($event)"></list-notes>
  </div>
</template>

<script>
import ListNotes from './components/ListNotes.vue'
import Menu from './components/menu.vue';
import store from './store.js';
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import mansory from "./masonry";

export default {
  name: 'app',

  store,
  async created() {
     let result = await this.getAllNotes();
     store.commit('setNotes', result);
  },
  components: {
    ListNotes,
    Menu
  },
  computed:{
    ...mapGetters([
      'notes'
    ])
  },
  methods: {
    ...mapActions([
      'getAllNotes',
      'addNewNote',
      'deleteNote'

    ]),
  },
  mounted() {
    //do something after mounting vue instance
    mansory.initMasonry();
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
