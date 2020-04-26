<template>
  <div id="app">
    <Menu :userName="userName"></Menu>
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
     this.userName = await this.getUserName();
  },
  data(){
    return{
      currentEditNote: {},
      currentDeleteNote: {},
      userName:""
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
    async getUserName(){
      let res = await fetch("http://localhost:8080/users/currentUser");
      res = await res.json();
      return res.data.userName;
    }
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
}
body{
      margin: 0!important;
      background: url(./assets/background-table-wood.jpg) repeat;
      font-size: 26px;
}

@media only screen and (max-device-width: 768px) {
  .width-100{
    min-width:100% !important;
  }
  .height-100{
    min-height:100% !important;
  }
  .width-80{
    min-width:80% !important;
  }
  .height-80{
    min-height:80% !important;
  }
  .width-60{
    min-width:60% !important;
  }
  .height-60{
    min-height:60% !important;
  }
  .width-40{
    min-width:40% !important;
  }
  .height-40{
    min-height:40% !important;
  }
}

.btn-success{
  transition: background-color .4s;
  background-color: lightgreen;
}
.btn-success:hover{
  background-color: green;
}
.btn-cancel{
  transition: background-color .4s;
  background-color: rgb(252, 88, 88);
}
.btn-cancel:hover{
  background-color: rgb(247, 30, 30); 
}
.btn-info{
  transition: background-color .4s;
  background-color: rgb(247, 206, 0);
}
.btn-info:hover{
  background-color: yellow;
}
.p-10{
  padding:10px;
}

</style>
