<template>
  <div id="app">
    <Menu @add-new-note="addNewNote()"></Menu>
    <list-notes :notes="notes" @delete-note="deleteNote($event)" @editMode = "turnOnEditMod()"></list-notes>
    <edit-note v-if="isDisable"></edit-note>
    <dialog-window v-if="isConfirm"></dialog-window>
  </div>
</template>

<script>
import ListNotes from './components/ListNotes.vue'
import Menu from './components/menu.vue';
import EditNote from "./components/edit-window";
import DialogWindow from "./components/dialog-window";
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
    Menu,
    EditNote,
    DialogWindow
  },
  computed:{
    ...mapGetters([
      'notes',
      'isConfirm',
      'isDisable'
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
