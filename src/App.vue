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

export default {
  name: 'app',
  async created() {
     let result = await this.getAllNotes();
     store.commit('setNotes', result);
  },
  store,
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
