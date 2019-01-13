<template>
  <div id="app">
    <Menu></Menu>
    <list-notes :notes="notes" @set-update-note="setUpdateNote($event)" @set-delete-note="setDeleteNote($event)"></list-notes>
    <disable-window v-if="isDisable" ></disable-window>
    <dialog-window v-if="isConfirm"  @delete-note="deleteNote($event)" :note="currentDeleteNote"></dialog-window>
    <edit-window v-if="isEdit" :note="currentEditNote"  @update-note="updateNote($event)"></edit-window>
    <show-note-window v-if="isShowNote"></show-note-window>
    <add-note-window v-if="isAdd" @add-new-note="addNewNote($event)"></add-note-window>
  </div>
</template>

<script>
import ListNotes from './components/ListNotes.vue'
import Menu from './components/menu.vue';
import DisableWindow from "./components/disable-window";
import ShowNoteWindow from "./components/show-note-window";
import AddNoteWindow from "./components/add-note-window";
import EditWindow from "./components/edit-window";
import DialogWindow from "./components/dialog-window";
import store from './store.js';
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  async created() {
     let allNotes = await this.getAllNotes();
     store.commit('setNotes', allNotes.data);
  },
  data(){
    return{
      currentEditNote: {},
      currentDeleteNote: {}
    }
  },
  store,
  components: {
    ListNotes,
    Menu,
    DisableWindow,
    DialogWindow,
    ShowNoteWindow,
    AddNoteWindow,
    EditWindow
  },
  computed:{
    ...mapGetters([
      'notes',
      'isConfirm',
      'isDisable',
      'isShowNote',
      'isAdd',
      'isEdit'
    ])
  },
  methods: {
    ...mapActions([
      'getAllNotes',
      'addNewNote',
      'deleteNote',
      'updateNote'
    ]),
    setUpdateNote(note){
      this.currentEditNote = note;
    },
    setDeleteNote(note){
      this.currentDeleteNote = note;
    },
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
body{
      margin: 0!important;
      background: url(./assets/background-table-wood.jpg) repeat;
      font-size: 26px;
}

@media only screen and (max-device-width: 768px) {
  body .width-100{
    min-width:100% !important;
  }
  body .height-100{
    min-height:100% !important;
  }
  body .width-80{
    min-width:80% !important;
  }
  body .height-80{
    min-height:80% !important;
  }
}


</style>
