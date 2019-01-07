import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
    isDisable: false,
    isEdit: false,
    isShowNote: false,
    isConfirm: false,
    isAdd: false,

    showNoteText: ""
  },
  getters: {
    notes: (state) => {
      return state.notes
    },
    isConfirm: (state) => {
      return state.isConfirm
    },
    isEdit: (state) => {
      return state.isEdit
    },
    isShowNote: (state) => {
      return state.isShowNote
    },
    isAdd: (state) => {
      return state.isAdd
    },
    isDisable: (state) => {
      return state.isDisable
    }
  },
  mutations: {
    setNotes: (state, newNotes) => {
      state.notes = newNotes;
    },
    addNewNote: (state, note) => {
      state.notes.push(note);
    },
    deleteNote: (state, note) => {
      state.notes.splice(state.notes.indexOf(note), 1);
    },
    changeState: (state, ctx) => {
      state[ctx.type] = ctx.value;
    },
    updateNote: (state, note) => {
      for (var i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id == note.id) {
          for (let key in state.notes[i]) {
            state.notes[i][key] = note[key]
          }
          return;
        }
      }
    }

  },
  actions: {
    getAllNotes: () => {
      return fetch("http://localhost:8080/notes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function(res) {
          return res.json()
        })
        .then(function(res) {
          return res
        });
    },
    addNewNote: (ctx, newNote) => {

      //тут нужно сделать добавление
      fetch("http://localhost:8080/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newNote)
        })
        .then(function(res) {
          return res.json()
        })
        .then(function(res) {
          ctx.commit('addNewNote', res.data);
        });

      ctx.commit('changeState', {
        type: 'isDisable',
        value: false
      });
      ctx.commit('changeState', {
        type: 'isAdd',
        value: false
      });

    },
    deleteNote: (ctx, note) => {

      ctx.commit('changeState', {
        type: 'isDisable',
        value: false
      });
      ctx.commit('changeState', {
        type: 'isConfirm',
        value: false
      });
      //тут нужно сделать удаление

      fetch("http://localhost:8080/notes/" + note.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
        })
        .then(function(res) {
          return res.json()
        })
        .then(function(res) {
          ctx.commit('deleteNote', res.data)
        });

    },
    updateNote: (ctx, note) => {
      ctx.commit('changeState', {
        type: 'isDisable',
        value: false
      });
      ctx.commit('changeState', {
        type: 'isEdit',
        value: false
      });
      //тут нужно сделать обновление
      fetch("http://localhost:8080/notes/" + note.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
        })
        .then(function(res) {
          return res.json()
        })
        .then(function(res) {
          ctx.commit('updateNote', res.data);
        });

    }
  }
})

export default store;
